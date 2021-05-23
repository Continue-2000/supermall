<template>
  <div class="right-content">
    <tab-control
      :items="['综合', '销量', '新品']"
      @tabclick="clickindex"
      ref="tabControl1"
      v-show="fixed"
      class="control1"
    ></tab-control>
    <scroll
      :probe-type="3"
      class="content"
      ref="scroll"
      @position="getposition"
      @loadmore="toloadmore"
    >
      <right-grid-view
        :item="item"
        @gridImageLoad="gridImageLoad"
      ></right-grid-view>
      <tab-control
        :items="['综合', '销量', '新品']"
        @tabclick="clickindex"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="goodsList" />
    </scroll>
    <back-top @click.native="back2top" v-show="isback"></back-top>
  </div>
</template>
<script>
// 公用组件
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import { BackTopMixin } from "common/mixin";
// 子组件
import RightGridView from "./RightGridView";

import { getCategoryDetail } from "network/category";
export default {
  name: "RightContent",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      currentitem: "pop",
      goodsList: [],
      fixed: false,
      tabControlTop: 0,
    };
  },
  components: { Scroll, TabControl, GoodsList, RightGridView },
  mixins: [BackTopMixin],
  created() {
    setTimeout(() => {
      this.clickindex(0);
    }, 1000);
  },
  computed: {
    miniWallkey() {
      return this.item.miniWallkey;
    },
  },
  // 进入时正在流行
  methods: {
    gridImageLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
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

      this.getCategoryDetail();
      this.$refs.tabControl1.activeitem = index;
      this.$refs.tabControl2.activeitem = index;
    },
    // 获取详细信息
    getCategoryDetail() {
      getCategoryDetail(this.miniWallkey, this.currentitem).then((res) => {
        this.goodsList = res;
      });
    },
    // 加载更多
    toloadmore() {
      this.getCategoryDetail();
      this.$refs.scroll.finishPullUp();
    },
    //得到滑动位置
    getposition(position) {
      position = -position.y;
      // this.position = position;
      // 判断是否出现返回置顶按钮
      this.isShowBackTop(position);
      // 判断是否停留tabcontrol
      this.fixed = position > this.tabControlTop;
    },
  },
  watch: {
    item() {
      this.getCategoryDetail();
    },
  },
};
</script>
<style scoped>
.right-content {
  position: relative;
  transform: scale(1);
  flex: 2.4;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.control1 {
  position: fixed;
  width: calc(100%);
  left: 0;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 100;
}
</style>