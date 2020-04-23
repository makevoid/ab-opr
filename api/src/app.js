const createServer = require('./server')
const config = require('config')

const PORT = config.get('PORT')

// TODO: remove contractAddresses

const runApp = async contractAddresses => {
  const app = await createServer(contractAddresses)
  await app.listen(PORT)
}

module.exports = runApp
