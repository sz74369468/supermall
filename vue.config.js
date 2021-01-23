module.exports = {
  // 配置一些别名
  configureWebpack: {
    resolve: {
      // 省略后缀名 默认已经配好可省
      // extensions: ["json", "js", "vue"]
      // 别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
