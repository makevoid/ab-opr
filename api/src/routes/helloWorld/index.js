'use strict'
const t = require('koa-joi-router').Joi
const { getHelloWorld } = require('./handlers/helloWorldHandler')

module.exports = [
  {
    method: 'get',
    path: '/hello',
    meta: {
      swagger: {
        summary: '/hello',
        description: 'Retrieves the current hello world message',
        tags: [ 'Hello World' ]
      }
    },
    validate: {
      output: {
        200: {
          body: {
            message: t.string().required().example('abcd', 'test').description('Hello world message')
          }
        }
      }
    },
    handler: getHelloWorld
  }
]
