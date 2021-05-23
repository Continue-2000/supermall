import BackTop from "components/common/backtop/BackTop"
import { debounce } from "common/utils";
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
export const RefeshScrollHeight = {
  mounted() {
    // 图片加载完成,更新scrollHeight
    const fn = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("imageHaveLoad", () => {
      fn();
    });
  }
}