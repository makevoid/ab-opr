const Web3 = require('web3')
const config = require('config')
const ETHEREUM_JSONRPC_ENDPOINT = config.get('ETHEREUM_JSONRPC_ENDPOINT')
const { join } = require('path')

const contractAbisPath = join(__dirname, '../../contracts/contractABIs.json')
const contractABIs = require(contractAbisPath)

const web3 = new Web3(ETHEREUM_JSONRPC_ENDPOINT)

module.exports = {
  web3,
}
