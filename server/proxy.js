import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
  app.use(
    '/voterdata', // Specify the URL path you want to proxy
    createProxyMiddleware({
      target: 'https://voterapp-backend.onrender.com', // Specify the target URL of the external server
      changeOrigin: true,
    })
  );
}
