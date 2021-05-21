export default {
  addShopCart(context, payload) {
    return new Promise((resolve, reject) => {
      let OldProject = false;
      let successmsg = '添加成功，在购物车等亲~'
      // 判断是否存在原物品
      for (let o of context.state.shopcart) {
        if (o.id === payload.id) {
          OldProject = true;
          context.commit('addCount', o)
          resolve(successmsg)
        }
      }
      if (!OldProject) {
        payload.count = 1;
        context.commit('pushProject', payload)
        resolve(successmsg)
      }
    })
  },
  ischeck(context, payload) {
    for (let i in context.state.shopcart) {
      if (context.state.shopcart[i].id === payload.id) {
        context.commit('isCheck', i)
      }
    }
  }

}