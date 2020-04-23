'use strict'

const http = require('http')
const Koa = require('koa')
const cors = require('@koa/cors')
const compress = require('koa-compress')
const respond = require('koa-respond')
const docs = require('@appliedblockchain/koa-docs')
const { middleware, routes, configureDocs } = require('./router')
const logger = require('./logger')
const middlewareLogger = require('./middleware/logger')
const rootRoute = require('./routes/root')

const {
  notFoundHandler,
  errorHandler
} = require('./middleware')

const { web3 } = require('./util/web3')

const { healthcheck } = require('./healthcheck')

const createServer = async () => {

  logger.debug('Creating server...')

  // const [ from ] = await web3.eth.getAccounts()

  const app = new Koa()
  app
    .use(errorHandler)
    .use(middlewareLogger())
    .use(healthcheck(web3))
    .use(cors())
    .use(docs.get('/api/docs', configureDocs(
      { groupName: 'default', routes: routes.default, prefix: '/api' }
    )))
    // .use(Prometheus.injectMetricsRouter)
    .use(compress())
    .use(respond())
    .use(rootRoute)
    .use(middleware)
    .use(notFoundHandler)
    // .use(Prometheus.requestCounters)
    // .use(Prometheus.responseCounters)

  const server = http.createServer(app.callback())

  server.on('close', async () => {
    logger.debug('Server closing')
  })

  server.on('error', async error => {
    console.log('Error', error)
  })

  logger.debug('Server created.')

  return server
}

module.exports = createServer
