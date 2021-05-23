<template>
  <div class="cart-list">
    <scroll
      class="contain"
      ref="scroll"
      @loadmore="toloadmore"
      @position="getposition"
      :probe-type="3"
    >
      <empty v-if="!cartLength" />
      <cart-list-item
        v-for="cart in allCart"
        :key="cart.id"
        :cart="cart"
      ></cart-list-item>
      <div class="recommend-title">为你推荐</div>
      <goods-list :goods="recommend" />
    </scroll>
    <back-top
      @click.native="back2top"
      v-show="isback"
      class="cart-back-top"
    ></back-top>
  </div>
</template>
<script>
// 子组件
import CartListItem from "./CartListItem";
// 公用组件
import Scroll from "components/common/scroll/Scroll";
import Empty from "./Empty";
import GoodsList from "components/content/goods/GoodsList";
import { BackTopMixin, RefeshScrollHeight } from "common/mixin";
// 网络请求
import { Recommend } from "network/detail";
import { getHomeGoods } from "network/home";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  data() {
    return {
      recommend: [],
    };
  },
  components: {
    Scroll,
    CartListItem,
    Empty,
    GoodsList,
  },
  computed: {
    ...mapGetters({
      allCart: "allCart",
      cartLength: "cartLength",
    }),
  },
  mixins: [BackTopMixin, RefeshScrollHeight],
  created() {
    this.getHomeGoods("new");
  },
  mounted() {
    // const fn = debounce(this.$refs.scroll.refresh, 300);
    // this.$bus.$on("imageHaveLoad", () => {
    //   fn();
    // });
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    getHomeGoods(type) {
      const page = this.recommend.page + 1;
      getHomeGoods(type, page).then((res) => {
        this.recommend.push(...res.data.list);
        this.recommend.page += 1;
      });
    },
    toloadmore() {
      this.getHomeGoods("new");
      this.$refs.scroll.finishPullUp();
    },
    getposition(position) {
      position = -position.y;
      this.isShowBackTop(position);
      // console.log(this.ScrollIndex);
    },
  },
};
</script>
<style scoped>
.cart-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 99px;
}
.contain {
  height: 100%;
  width: 100%;
}
.recommend-title {
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #000;
  padding: 10px 0;
  background: #eee;
}
.recommend-title::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -60px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: url("~assets/img/cart/recommend.svg");
  background-size: 100%;
}
.cart-back-top {
  bottom: 105px;
}
</style>