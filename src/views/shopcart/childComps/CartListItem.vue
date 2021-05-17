<template>
  <div class="cart-list-item">
    <check-button class="check-button" />
    <div class="image">
      <div class="img">
        <img :src="cart.img" alt="产品图片" />
      </div>
    </div>
    <div class="info">
      <div class="info-item title">{{ cart.title }}</div>
      <div class="info-item about">{{ cart.desc }}</div>
      <div class="info-item bottominfo">
        <span class="price">￥{{ cart.price }}</span>
        <span class="buynum">{{ cart.count }}</span>
        <span class="multiply">+</span>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  props: {
    cart: {
      // type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
};
</script>
<style scoped>
.cart-list-item {
  display: flex;
  position: relative;
  padding: 10px;
  height: 150px;
  border-bottom: 2px solid #eee;
}
.check-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.image {
  flex: 1;
  margin-left: 20px;
  padding: 0 10px;
}
.img {
  height: 100%;
  width: 100%;
  background: red;
  border-radius: 5px;
  overflow: hidden;
}
.img img {
  width: 100%;
}
.info {
  flex: 2;
  display: flex;
  flex-direction: column;
  line-height: 42px;
  white-space: nowrap;
  overflow: hidden;
}
.info-item {
  flex: 1;
}
.title {
  font-size: 22px;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
}
.about {
  font-size: 18px;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bottominfo span {
  display: block;
  font-size: 22px;
}
.price {
  float: left;
  color: red;
}
.multiply {
  float: right;
  transform: translate(1px, 1px) rotate(45deg);
}
.buynum {
  float: right;
  /* margin-right: 10px; */
  color: #333;
}
</style>