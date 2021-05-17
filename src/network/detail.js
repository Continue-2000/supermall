import { request } from "./request"
export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}

// 获取推荐
export function Recommend() {
  return request({
    url: '/recommend'
  })
}

export class Good {
  constructor(columns, itemInfo, services) {
    this.columns = columns;
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.lowNowPrice = itemInfo.lowNowPrice
    this.services = services;
  }
}
export class ShopInfo {
  constructor(ShopInfo) {
    this.logo = ShopInfo.shopLogo;
    this.name = ShopInfo.name;
    this.fans = ShopInfo.cFans;
    this.sells = ShopInfo.cSells;
    this.score = ShopInfo.score;
    this.goodsCount = ShopInfo.cGoods
  }
}
export class GoodParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
export class Comment {
  constructor(list) {
    this.list = list
  }
}


