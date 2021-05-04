<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @position="getposition"
      @loadmore="toloadmore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :items="['流行', '新款', '精选']"
        class="tab-control"
        @tabclick="clickindex"
      />
      <goods-list :goods="goods[currentitem].list" />
    </scroll>
    <back-top @click.native="back2top" v-show="isback"></back-top>
  </div>
</template>
<script>
// 1.子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

// 2.components
// 2.1 公用组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";
// 2.2 业务组件
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentitem: "pop",
      isback: false,
    };
  },
  created() {
    // 1.获取banners、recommends
    this.getHomeMultidata(),
      // 2.获取商品goods
      this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    console.log(this.goods.pop.list);
    // 3.图片加载完成
    this.$bus.$on("imageHaveLoad", () => {
      console.log("1");
    });
  },
  methods: {
    // 事件操作
    clickindex(index) {
      switch (index) {
        case 0:
          this.currentitem = "pop";
          break;
        case 1:
          this.currentitem = "new";
          break;
        case 2:
          this.currentitem = "sell";
          break;
      }
    },
    //回到顶部
    back2top() {
      this.$refs.scroll.scrollTo(0, 0);
      console.log(this.$refs.scroll);
    },
    // 得到滑动位置
    getposition(position) {
      // console.log(position);
      this.isback = -position.y > 1000;
    },
    // 加载更多
    toloadmore() {
      // this.getHomeGoods(this.currentitem);
      // this.$refs.scroll.finishPullUp();
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    BackTop,
    TabControl,
    GoodsList,
  },
};
</script>
<style scoped>
#home {
  position: relative;
  padding-top: 44px;
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 100;
}
</style>