module.exports = {
  "postcss-pxtorem": {
    "rootValue": 32,
    "propList": ["*"],
    // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
    // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
    "selectorBlackList": ["weui-"]
  }

}