const Router = require('koa-router');
const proxyMiddleware = require('http-proxy-middleware');
const c2k = require('koa2-connect');
const proxyTable = require('../config/proxy.js');

const router = new Router();
const utils = require('../utils');

module.exports = function(app) {
  const handle = app.getRequestHandler();
  console.log('starkwang chinese name', utils.stark);
  Object.keys(proxyTable).forEach(context => {
    let options = proxyTable[context];
    if (typeof options === 'string') {
      options = { target: options };
    }
    router.get('*', c2k(proxyMiddleware(options.filter || context, options)));
  });
  router.get('/a/:id', async ctx => {
    console.log('ctx.query', ctx);
    await app.render(ctx.req, ctx.res, '/b', ctx.query);
    // ctx.respond = false;
  });
  router.get('/b', async ctx => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  return router;
};
