/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-21 15:25:24
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-27 18:30:56
 * @Description: file content
 */
const Koa = require('koa');
const next = require('next');

// const proxyMiddleware = require('http-proxy-middleware');
// const c2k = require('koa2-connect');
const Sentry = require('@sentry/node');
const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });

const router = require('./node/routes')(app);
const server = new Koa();
// const handler = routes.getRequestHandler(app);
// process.exit(1)
const port = 3200;
Sentry.init({
  dsn: ''
});

app.prepare().then(() => {
  server.use(async (ctx, nxt) => {
    ctx.res.statusCode = 200;
    await nxt();
  });
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
