<template>
  <div class="goods-list-item" @click="getDetail">
    <img :src="showImg" alt="" @load="imageload" />
    <div class="good-info">
      <p class="title">{{ good.title }}</p>
      <p class="collect">商品已被{{ good.cfav }}收藏</p>
      <span class="price">￥{{ good.price }}</span>
      <span class="sale">{{ good.sale }}人付款</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsListItem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImg() {
      return this.good.image || this.good.show.img;
    },
  },
  methods: {
    imageload() {
      this.$bus.$emit("imageHaveLoad");
    },
    getDetail() {
      this.$router.push("/detail/" + this.good.iid);
    },
  },
};
</script>
<style scoped>
.goods-list-item {
  width: 48%;

  background-color: #fff;
  padding-bottom: 0;
}

.goods-list-item img {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  width: 100%;
}
.good-info {
  position: relative;
  width: 100%;
  padding: 5px 10px;
}
.good-info p,
span {
  margin-top: 5px;
}
.good-info .title {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制一个块元素显示的文本的行数 */
  -webkit-line-clamp: 2;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;
}
.good-info .collect {
  position: relative;
  color: #ccc;
  font-size: 12px;
}
.good-info .collect::after {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  background-image: url("~assets/img/common/collect.svg");
  background-size: 100%;
}

.good-info .price {
  color: var(--color-high-text);
}
.good-info .sale {
  font-size: 12px;
  color: #ccc;
  margin-left: 5px;
}
</style>