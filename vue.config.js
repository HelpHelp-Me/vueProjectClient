module.exports = {
  // 配置postcss-pxtorem
  css: {
    loaderOptions: {
      postcss: {
        // plugins: [
        //   require('postcss-pxtorem')({
        //     rootValue: 75,
        //     unitPrecision: 5,
        //     propList: ['*'],
        //     selectorBlackList: [],
        //     replace: true,
        //     mediaQuery: false,
        //     minPixelValue: 0,
        //     exclude: /node_modules/i
        //   }),
        // ]
      },
      sass: {
        prependData: `@import "~@/assets/css/global.scss";`
      },
    },
  },
  // 配置代理 http-proxy-middleware
  devServer: {
    host: '192.168.1.48',
    port: 8080,
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  }
}