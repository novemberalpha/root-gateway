import config from '../../config.js';
const auth = config.BASIC_AUTH_USERNAME + ':' + config.BASIC_AUTH_PASSWORD;
const ROUTES = [
  {
    url: '/api/v1/batteries',
    proxy: {
      target: config.MSRVC_BATTERIES_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/content',
    proxy: {
      target: config.MSRVC_CONTENT_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/humans',
    proxy: {
      target: config.MSRVC_HUMANS_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/images',
    proxy: {
      target: config.MSRVC_IMAGES_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/ingestions',
    proxy: {
      target: config.MSRVC_INGESTION_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/organizations',
    proxy: {
      target: config.MSRVC_ORGANIZATIONS_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/pdf',
    proxy: {
      target: config.MSRVC_PDF_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/posts',
    proxy: {
      target: config.MSRVC_POSTS_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/questions',
    proxy: {
      target: config.MSRVC_QUESTIONS_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/responses',
    proxy: {
      target: config.MSRVC_RESPONSES_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/teams',
    proxy: {
      target: config.MSRVC_TEAMS_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/books',
    proxy: {
      target: config.MSRVC_TEMPLATE_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/tests',
    proxy: {
      target: config.MSRVC_TESTS_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
  {
    url: '/api/v1/apps',
    proxy: {
      target: config.MSRVC_CONNECTED_APPS_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  },
];

export default ROUTES;
