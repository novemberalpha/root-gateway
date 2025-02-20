import bunyan from 'bunyan';
import { LoggingBunyan } from '@google-cloud/logging-bunyan';
import config from '../../config.js';
const loggingBunyan = new LoggingBunyan();


export function serializer(req, res, status) {
  return {
    request: {
      method: req.method,
      url: req.url,
      headers: req.headers,
      params: req.params,
      query: req.query,
      body: req.body
    },
    response: {
      status: status,
      success: res.success,
      data: res.data,
      error: res.error
    }
  };
}
export const logger = bunyan.createLogger({
  name: config.SERVICE_NAME,
  level: 'info',
  streams: [
    // loggingBunyan.stream('info'),
    { stream: process.stdout }
  ]
});
