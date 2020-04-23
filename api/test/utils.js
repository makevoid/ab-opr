const createServer = require('../src/server')

const setupAppForTest = async () => {
  return createServer()
}

module.exports = setupAppForTest
