const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const config = require('./config')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const proxyMiddleware = require('http-proxy-middleware')
const c2k = require('koa2-connect')

// 客户端跨域代理
const proxyTable = {
  '/v1': {
    target: 'http://api.rdhub.cn',
    changeOrigin: true
  },
  '/wp': {
    target: 'http://api.rdhub.cn',
    changeOrigin: true
  },
  '/xcx': {
    target: 'http://api.rdhub.cn',
    changeOrigin: true
  }
}

app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()
    Object.keys(proxyTable).forEach(function (context) {
      var options = proxyTable[context]
      if (typeof options === 'string') {
        options = { target: options }
      }
      router.get('*', c2k(proxyMiddleware(options.filter || context, options)))
    })
    router.get('/a', async ctx => {
      await app.render(ctx.req, ctx.res, '/b', ctx.query)
      ctx.respond = false
    })
    router.get('/b', async ctx => {
      await app.render(ctx.req, ctx.res, '/a', ctx.query)
      ctx.respond = false
    })

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.use(router.routes())
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })