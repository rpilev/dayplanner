const webpackConfig = require('./config')

module.exports = process.env.NODE_ENV
  ? { ...webpackConfig.common, ...webpackConfig.development }
  : { ...webpackConfig.common, ...webpackConfig.production }
