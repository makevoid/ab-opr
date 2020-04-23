'use strict'

const { web3 } = require('../../../util/web3')

const getHelloWorld = async ctx => {
  ctx.logger.info(' -> HelloWorld.getHelloWorld()')
  const blockNumber = await web3.eth.getBlockNumber()
  const helloWorldString = `hello world! - block: ${blockNumber}`
  ctx.logger.info(` <- HelloWorld.getHelloWorld() - ${JSON.stringify(helloWorldString)}`)

  ctx.ok({ message: helloWorldString })
}


module.exports = {
  getHelloWorld
}
