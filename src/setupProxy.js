const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://liamsilvart.cyclic.app',
      changeOrigin: true,
    })
  );
};
