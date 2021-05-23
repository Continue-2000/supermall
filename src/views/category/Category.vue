<template>
  <div id="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <left-content :list="leftList" />
      <right-content :item="showitem" />
    </div>
  </div>
</template>
<script>
// 1.公用组件
import NavBar from "components/common/navbar/NavBar";
// 2.子组件
import LeftContent from "./childComps/LeftContent";
import RightContent from "./childComps/RightContent.vue";
import { getCategoryMultidata } from "network/category";
export default {
  name: "Category",
  data() {
    return {
      leftList: [],
      showitem: {},
    };
  },
  components: { NavBar, LeftContent, RightContent },
  created() {
    this.getCategoryMultidata();
  },
  mounted() {
    this.$bus.$on("getShowItem", (item) => {
      this.showitem = item;
    });
  },
  methods: {
    getCategoryMultidata() {
      getCategoryMultidata().then((res) => {
        this.leftList = res.data.category.list;
        this.showitem = this.leftList[0];
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
.category-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: fixed;
  display: flex;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.left {
  flex: 1;
  background: #ddd;
}
.right {
  flex: 3;
  background: purple;
}
</style>