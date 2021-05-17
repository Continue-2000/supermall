<template>
  <div class="bottom-bar">
    <div class="onepart">
      <div class="bar-item customer">
        <i></i>
        <div class="title">客服</div>
      </div>
      <div class="bar-item shop">
        <i></i>
        <div>店铺</div>
      </div>
      <div class="bar-item collection">
        <i></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="twopart">
      <div class="bar-item shopcart" @click="addShopCart">加入购物车</div>
      <div class="bar-item buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailButtomBar",
  methods: {
    addShopCart() {
      this.$emit("addShopCart");
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  height: 58px;
  width: 100%;
  bottom: -2px;
  left: 0;
  right: 0;
  text-align: center;
  background: pink;
}
.onepart {
  display: flex;
  flex: 1;
  background: #fff;
}
.twopart {
  display: flex;
  line-height: 58px;
  flex: 1;
  background: pink;
}
.bar-item {
  flex: 1;
}
.bar-item i {
  display: block;
  width: 25px;
  height: 25px;
  margin: 5px auto 0;
}
.customer i {
  background: url("~assets/img/detail/detail_bottom.png") 0 -60px;
  background-size: 100%;
}
.shop i {
  background: url("~assets/img/detail/detail_bottom.png") 0 -112px;
  background-size: 100%;
}
.collection i {
  background: url("~assets/img/detail/detail_bottom.png") 0 -0px;
  background-size: 100%;
}
.bar-item .title {
  font-size: 15px;
  color: #333;
}
.shopcart {
  color: #333;
  background: #fee716;
}
.buy {
  color: #fff;
  background: #ff669a;
}
</style>