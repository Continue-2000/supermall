<template>
  <div class="cart-list-item">
    <div class="select">
      <check-button class="check-button" :ischeck="cart.checked" :cart="cart" />
    </div>
    <div class="desc" @click="toDetail">
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
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  props: {
    cart: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    toDetail() {
      this.$router.push("/detail/" + this.cart.id);
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
  padding: 10px 10px 10px 0;
  width: 100%;
  height: 150px;
  border-bottom: 2px solid #eee;
}
.select {
  position: relative;
  height: 100%;
  padding: 0 15px;
}
.check-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.desc {
  flex: 1;
  width: 100%;
  display: flex;
}
.image {
  flex: 1;
  padding: 0 10px 0 0;
}
.img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.img img {
  width: 100%;
}
.info {
  flex: 3;
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
  transform: translate(-1px, 1px) rotate(45deg);
}
.buynum {
  float: right;
  margin-right: 30px;
  color: #333;
}
</style>