'use strict'

const runApp = require('./src/app')
const logger = require('./src/logger')
const config = require('config')

const NODE_ENV = config.get('NODE_ENV')
const PORT = config.get('PORT')

;(() => {
  try {
    runApp()
    logger.debug(`Server listening on ${PORT} in '${NODE_ENV}' mode`)
    logger.debug(`Docs available at http://localhost:${PORT}/docs`)
  } catch (err) {
    logger.error('Error while starting up server')
    logger.error(err.stack)
    process.exit(1)
  }
})()
