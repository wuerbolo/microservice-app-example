var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ELASTIC_APM_SERVER_URL: JSON.stringify(process.env.ELASTIC_APM_SERVER_URL)
})
