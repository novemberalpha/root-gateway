import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxies(app, routes) {
  routes.forEach(r => {
    if (!r.proxy.target) {
      r.proxy.target = 'http://localhost:8081'; 
    }
    app.use(r.url, createProxyMiddleware(r.proxy));
  });
}