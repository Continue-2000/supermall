<template>
  <div id="detail">
    <detail-nav-bar @themeClick="themeIndex" :Index="ScrollIndex" />
    <scroll
      class="content"
      ref="scroll"
      @position="getposition"
      :probe-type="3"
    >
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goodInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info
        :paramInfo="goodParam"
        ref="paramInfo"
      ></detail-param-info>
      <detail-comment :comments="comment" ref="comments"></detail-comment>
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
    <detail-buttom-bar @addShopCart="addShopCart"></detail-buttom-bar>
    <jump-btn :destination="destination" v-show="cartLength" />
    <back-top @click.native="back2top" v-show="isback" />
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
import DetailButtomBar from "./childComps/DetailButtomBar";
// 公用组件
import Scroll from "components/common/scroll/Scroll";
import { debounce } from "common/utils";
import { BackTopMixin } from "common/mixin";
import JumpBtn from "components/common/jumpbtn/JumpBtn";
// 映射
import { mapActions, mapGetters } from "vuex";
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
  name: "Detail",
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
      themeTopYs: [],
      ScrollIndex: 0,
      destination: "shopcart",
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
    DetailButtomBar,
    JumpBtn,
  },
  computed: {
    ...mapGetters({
      cartLength: "cartLength",
    }),
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
  mixins: [BackTopMixin],
  mounted() {
    const fn = debounce(this.$refs.scroll.refresh, 400);
    this.$bus.$on("detailImageLoad", () => {
      fn();
    });
  },
  methods: {
    ...mapActions({
      addCart: "addShopCart",
    }),
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
        // 获取参数、评论、推荐的top
        this.$nextTick(() => {
          setTimeout(() => {
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            console.log(this.themeTopYs);
          }, 500);
        });
      });
    },

    // 获取当前点击的主题
    themeIndex(currentIndex) {
      // 点击跳转
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[currentIndex], 100);
    },
    // 滚动改变对应主题
    getposition(position) {
      position = -position.y;
      this.isShowBackTop(position);
      // console.log(this.ScrollIndex);
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if (position >= this.themeTopYs[i]) this.ScrollIndex = i;
      }
    },
    // 添加购物车信息
    addShopCart() {
      // 1.添加信息到一个对象
      let Product = {};
      Product.img = this.topImages[0];
      Product.title = this.goodInfo.title;
      Product.desc = this.goodInfo.desc;
      Product.price = this.goodInfo.lowNowPrice;
      Product.id = this.id;
      // 2.添加到vuex
      this.addCart(Product).then((msg) => {
        this.$toast.success(msg, 2500);
      });
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 2000;
  height: 100vh;
  background: #fff;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>