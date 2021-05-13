<template>
  <div id="detail">
    <detail-nav-bar />
    <scroll class="content">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goodInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :paramInfo="goodParam"></detail-param-info>
      <detail-comment :comments="comment"></detail-comment>
      <goods-list :goods="recommend" />
    </scroll>
  </div>
</template>
<script>
// 子组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
import GoodsList from "components/content/goods/GoodsList";
// 公用组件
import Scroll from "components/common/scroll/Scroll";

// 网络请求
import {
  getDetail,
  Recommend,
  Good,
  ShopInfo,
  GoodParam,
  Comment,
} from "network/detail";

export default {
  name: "detail",
  id: 0,
  data() {
    return {
      topImages: [],
      goodInfo: {},
      shopInfo: {},
      detailInfo: {},
      goodParam: {},
      comment: {},
      recommend: [],
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    Scroll,
    GoodsList,
  },
  created() {
    // 获取id
    this.id = this.$route.params.id;
    //  获取详情信息
    this.getDetail(this.id);
    // 获取推荐信息
    Recommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  methods: {
    getDetail(id) {
      getDetail(id).then((res) => {
        console.log(res);
        // 获得轮播图图片
        let data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 获得商品信息
        this.goodInfo = new Good(
          data.columns,
          data.itemInfo,
          data.shopInfo.services
        );
        // 获取shopInfo
        this.shopInfo = new ShopInfo(data.shopInfo);
        this.detailInfo = data.detailInfo;
        // 获取goodParam
        this.goodParam = new GoodParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 获取comment
        let commentData = data.rate.list;
        this.comment = new Comment(commentData);
      });
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 20000;
  height: 100vh;
  background: #fff;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 0px;
  left: 0;
  right: 0;
}
</style>