<template>
  <grid-view
    :cols="3"
    :lineSpace="15"
    :v-margin="20"
    v-if="gridList"
    class="grid-view"
  >
    <div class="item" v-for="(item, index) in gridList" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="" @load="gridImageLoad" />
        <div class="item-text">{{ item.title }}</div>
      </a>
    </div>
  </grid-view>
</template>
<script>
import GridView from "components/common/gridview/GridView";
import { getSubcategory, getCategoryDetail } from "network/category";

export default {
  name: "RightGridView",
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
      gridList: [],
    };
  },
  components: {
    GridView,
  },
  created() {
    setTimeout(() => {
      this.getGridList();
    }, 200);
  },
  methods: {
    getGridList() {
      getSubcategory(this.item.maitKey).then((res) => {
        console.log(res);
        this.gridList = res.data.list;
      });
    },
    gridImageLoad() {
      this.$emit("gridImageLoad");
    },
  },
  watch: {
    item() {
      this.getGridList();
    },
  },
};
</script>
<style scoped>
.grid-view {
  margin-left: 10px;
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