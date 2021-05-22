<template>
  <div class="right-content">
    <scroll :probe-type="3" class="content" ref="scroll">
      <grid-view :cols="4" :lineSpace="15" :v-margin="20" v-if="gridList">
        <div class="item" v-for="(item, index) in gridList" :key="index">
          <a :href="item.link">
            <img class="item-img" :src="item.image" alt="" />
            <div class="item-text">{{ item.title }}</div>
          </a>
        </div>
      </grid-view>
    </scroll>
  </div>
</template>
<script>
// 公用组件
import Scroll from "components/common/scroll/Scroll";

import { getSubcategory } from "network/category";
import GridView from "components/common/gridview/GridView";
export default {
  name: "RightContent",
  data() {
    return {
      gridList: [],
    };
  },
  components: { Scroll, GridView },
  // 进入时正在流行
  created() {
    getSubcategory(3627).then((res) => {
      console.log(res);
      this.gridList = res.data.list;
    });
  },
  mounted() {
    this.$bus.$on("getAcm", (maitKey) => {
      getSubcategory(maitKey).then((res) => {
        console.log(res);
        this.gridList = res.data.list;
      });
    });
  },
  methods: {},
};
</script>
<style scoped>
.right-content {
  position: relative;
  flex: 3;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.panel img {
  width: 100%;
}
.item {
  text-align: center;
  font-size: 12px;
}
.item-img {
  width: 80%;
}
.item-text {
  margin-top: 15px;
}
</style>