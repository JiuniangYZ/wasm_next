//next.config.js
const withCSS = require('@zeit/next-css')
// const withLess = require('@zeit/next-less')
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}
module.exports =
  withCSS({
    // webpack: (config) => {
    //   config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
    //   return config
    // }
  })





// module.exports = withLess({
//   cssModules: true
// })