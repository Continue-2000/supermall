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
  name: "Scroll",
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
    // 回到某个位置
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //刷新下拉操作
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 刷新获取可滑动区域
    refresh() {
      // console.log("have refresh");
      this.scroll.refresh();
    },
  },
  mounted() {
    // 创建better-scroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 获取当前滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("position", position);
        // console.log(position);
      });
    }
    // 下拉加载数据
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadmore");
      });
    }
  },
};
</script>
<style scoped>
</style>