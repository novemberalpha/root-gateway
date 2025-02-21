import config from '../../config.js';
const auth = config.BASIC_AUTH_USERNAME + ':' + config.BASIC_AUTH_PASSWORD;
const ROUTES = [
  {
    url: '/api/v1/recipes',
    proxy: {
      target: config.MSRVC_BATTERIES_URL,
      secure: false,
      auth: auth,
      changeOrigin: true,
    },
  }
];

export default ROUTES;
