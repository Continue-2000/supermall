export default {
  // 1.返回购物车内容的长度
  cartLength(state) {
    return state.shopcart.length;
  },
  // 2.返回购物车所有内容
  allCart(state) {
    return state.shopcart
  },
  // 3.返回分类选中的item
  clickName(state) {
    return state.clickname
  }
}