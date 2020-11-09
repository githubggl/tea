// const path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const resolve = dir => path.resolve(__dirname, dir)
// https://cli.vuejs.org/zh/config
// node_modules/@vue/cli-service/lib/config/base.js
module.exports = {
  publicPath: '/',
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // runtimeCompiler: true,
  // assetsDir: '',
  // indexPath: 'index.html',
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV !== 'production', // 生产环境的 source map
  // parallel: require('os').cpus().length > 1,

  // configureWebpack: config => {
  //   // var isProd = process.env.NODE_ENV === 'production'
  //   // 公共配置
  //   // cdn引用时配置externals 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
  //   // config.externals = {
  //   //   'vue': 'Vue',
  //   //   'vue-router': 'VueRouter',
  //   //   'element-ui': 'ELEMENT',
  //   //   'vuex': 'Vuex',
  //   //   'axios': 'axios'
  //   // }
  //   config.resolve.alias = Object.assign({}, config.resolve.alias, {
  //     'src': resolve('src'),
  //     'common': resolve('src/views/common'),
  //     'static': resolve('static')
  //   })
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //     config.optimization = {
  //       minimizer: [
  //         new UglifyJsPlugin({
  //           // cacheDir: path.join(__dirname, './cacheDir/'),
  //           uglifyOptions: {
  //             compress: {
  //               drop_console: true, // console
  //               drop_debugger: false,
  //               pure_funcs: ['console.log']// 移除console
  //             }
  //           }
  //         })
  //       ]
  //     }
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // },

  // css: {
  //   loaderOptions: {
  //     css: {
  //       importLoaders: 1 // @import 引入的文件可被一个loader处理 （2 可被两个loader处理）
  //     }
  //   }
  // },
  devServer: {
    port: 8081,
    disableHostCheck: true // 可使用本地host配置的域名访问
    // proxy: {
    //   '/api': {
    //     target: 'http://132.128.11.12',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }

  }
}
