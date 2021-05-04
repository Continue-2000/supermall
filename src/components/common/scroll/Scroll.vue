<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(0, 0, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
  mounted() {
    // 创建better-scroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // 弹跳
      bounce: {
        top: true,
        bottom: true,
        left: true,
        right: true,
      },
    });
    // 获取当前滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("position", position);
    });
    // 下拉加载数据
    this.scroll.on("pullingUp", () => {
      this.$emit("loadmore");
    });
  },
};
</script>
<style scoped>
</style>