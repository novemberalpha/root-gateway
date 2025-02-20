import axios from 'axios';
import config from '../../config.js';
import jwt_decode from 'jwt-decode';
import { logger, serializer } from './logging.js';

export const headers = {
  'Content-Type': 'application/json',
  'x-api-key': config.D411_X_API_KEY,
  'x-api-id': config.D411_X_API_ID,
  'x-api-pkey': config.D411_X_API_PKEY,
  'x-api-pid': config.D411_X_API_PID
};

export let d411Token = null;
getToken();

export async function getToken() {
  const url = config.D411_URL + 'partner_users';
  let now = Date.now();
  if (d411Token === null || now > new Date(d411Token.exp*1000)) {
    try {
      const response = await axios.post(url, {}, {headers});
      let decoded = decodeJWT(response.headers['x-authorization']);
      d411Token = {
        token: response.headers['x-authorization'],
        ...decoded
      };
      headers.Authorization = response.headers['x-authorization'];
      logger.info(serializer(response.request, response, response.status), 'New Token Acquired - Expires: ', new Date(d411Token.exp*1000));
    } catch (err) {
      logger.error(err.message);
    }
  }
}

function decodeJWT(jwt) {
  return jwt_decode(jwt);
}

