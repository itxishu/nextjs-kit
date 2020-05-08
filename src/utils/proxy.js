// 客户端跨域代理
const proxyMiddleware = require('http-proxy-middleware');
const c2k = require('koa2-connect');

const proxyTable = {
  '/node': {
    target: 'https://api.shudong.wang',
    changeOrigin: true
  }
};
