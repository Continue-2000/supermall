<template>
  <div class="goods-list">
    <goods-list-item v-for="good in goods" :good="good" class="good-item" />
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { GoodsListItem },
};
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #eee;
  padding: 10px 0;
}
.good-item {
  margin-bottom: 7px;
}
</style>
