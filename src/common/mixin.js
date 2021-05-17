import BackTop from "components/common/backtop/BackTop"
export const BackTopMixin = {
  data() {
    return {
      isback: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    // 返回顶部
    back2top() {
      // scrollTo(x, y, time, easing)
      this.$refs.scroll.scrollTo(0, 0, 100);
      console.log(this.$refs.scroll);
    },
    // 检测是否出现
    isShowBackTop(position) {
      // console.log(position);
      this.isback = position > 1000;
    },
  }
}