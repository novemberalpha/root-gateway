import dotenv from 'dotenv';
import path from 'path';
const __dirname = path.resolve();

dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

export default {
  SERVICE_NAME: process.env.SERVICE_NAME || 'Microservice-Template',
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000,
  CORS_ALLOWED: process.env.CORS_ALLOWED || 'localhost',
  CONNECTION_STRING: process.env.CONNECTION_STRING || null,
  TEST_CONNECTION_STRING: process.env.TEST_CONNECTION_STRING || null,
  BASIC_AUTH_USERNAME: process.env.BASIC_AUTH_USERNAME || null,
  BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD || null,
  MCSRV_RECIPES_URL: process.env.MCSRV_RECIPES_URL || null
};
