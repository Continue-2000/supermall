export default {
  addShopCart(context, payload) {
    let OldProject = false;
    // 判断是否存在原物品
    for (let o of context.state.shopcart) {
      if (o.id === payload.id) {
        console.log(o.count);
        OldProject = true;
        context.commit('addCount', o)
      }
    }
    if (!OldProject) {
      payload.count = 1;
      context.commit('pushProject', payload)
      // state.shopcart.push(payload)
    }
  }
}