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
  MSRVC_BATTERIES_URL: process.env.MSRVC_BATTERIES_URL || null,
  MSRVC_CONTENT_URL: process.env.MSRVC_CONTENT_URL || null,
  MSRVC_HUMANS_URL: process.env.MSRVC_HUMANS_URL || null,
  MSRVC_IMAGES_URL: process.env.MSRVC_IMAGES_URL || null,
  MSRVC_INGESTION_URL: process.env.MSRVC_INGESTION_URL || null,
  MSRVC_ORGANIZATIONS_URL: process.env.MSRVC_ORGANIZATIONS_URL || null,
  MSRVC_PDF_URL: process.env.MSRVC_PDF_URL || null,
  MSRVC_POSTS_URL: process.env.MSRVC_POSTS_URL || null,
  MSRVC_QUESTIONS_URL: process.env.MSRVC_QUESTIONS_URL || null,
  MSRVC_RESPONSES_URL: process.env.MSRVC_RESPONSES_URL || null,
  MSRVC_TEAMS_URL: process.env.MSRVC_TEAMS_URL || null,
  MSRVC_TEMPLATE_URL: process.env.MSRVC_TEMPLATE_URL || null,
  MSRVC_TESTS_URL: process.env.MSRVC_TESTS_URL || null,
  MSRVC_CONNECTED_APPS_URL: process.env.MSRVC_CONNECTED_APPS_URL || null,
};
