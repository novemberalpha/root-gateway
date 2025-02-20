import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import basicAuth from 'express-basic-auth';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import http from 'http';
import bunyanMiddleware from 'bunyan-middleware';
import config from '../config.js';
import { logErrors, clientError, serverError } from './errorHandlers.js';
import normalizePort from './utils/normalizePort.js';
import { logger} from './utils/logger.js';
import setupProxies from './utils/setupProxies.js';
import ROUTES from './routes/index.js';
import { onError } from './utils/onError.js';
import { onListening } from './utils/onListening.js';


const app = express();
app.use(bunyanMiddleware(
  { headerName: 'X-Request-Id'
    , propertyName: 'reqId'
    , logName: 'req_id'
    , obscureHeaders: []
    , logger: logger
    , additionalRequestFinishData: function(req, res) {
      return { statusMessage: res.statusMessage };
    }
  }
));
app.use(helmet());
const whitelist = config.CORS_ALLOWED;
let corsOptions = { origin: function (origin, callback) {
  if (!origin || whitelist.indexOf(origin) !== -1) {
    callback(null, true)
  } else {
    console.log(origin, whitelist)
    callback(new Error('Not allowed by CORS'))
  }
} };
app.use(cors(corsOptions));
app.use(compression());
const users = {};
users[config.BASIC_AUTH_USERNAME] = config.BASIC_AUTH_PASSWORD;
app.use(basicAuth({
  users,
  unauthorizedResponse: (req) => {
    logger.error('unauthorized access: ip logged: ', req.ip);
    return {
      'success': false,
      'response': `unauthorized - ip logged: ${req.ip}`
    };
  }
}));
logger.info(`NODE_ENV=${config.NODE_ENV}`);
app.use(logErrors);
app.use(clientError);
app.use(serverError);
setupProxies(app, ROUTES);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
export const port = normalizePort( config.PORT || '3000');
app.set('port', port);
logger.warn(`USING PORT: ${port}`);

export const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

export default app;
