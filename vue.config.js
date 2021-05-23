module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/supermall/" : "/",
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.css', '.vue'],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@/store'
      }
    },
  },

}