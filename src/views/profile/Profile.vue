<template>
  <div id="profile">
    <nav-bar class="profile-nav-bar">
      <div slot="center">我的信息</div>
    </nav-bar>
    <div class="header">
      <div class="header-img">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="header-info">
        <div class="header-left">
          <div class="login-register" @click="develop">登录/注册</div>
          <div class="phone">
            <img
              src="~assets/img/profile/phone.svg"
              alt=""
              class="phoneimg"
            /><span>暂无绑定手机号</span>
          </div>
        </div>
        <div class="header-right"></div>
      </div>
    </div>
    <div class="mydata">
      <div class="mydata-item" @click="develop">
        <span><span class="number">0.00</span>元</span>
        <span class="title">我的余额</span>
      </div>
      <div class="mydata-item" @click="develop">
        <span><span class="number">0</span>个</span>
        <span class="title">我的优惠</span>
      </div>
      <div class="mydata-item" @click="develop">
        <span><span class="number">0</span>分</span>
        <span class="title">我的积分</span>
      </div>
    </div>
    <div class="other">
      <div class="other-item" @click="develop">
        <img src="~assets/img/profile/collection.svg" alt="" />
        <span>收藏</span>
        <span>8</span>
      </div>
      <div class="other-item" @click="develop">
        <img src="~assets/img/profile/subscribe.svg" alt="" />
        <span>订阅店铺</span>
        <span>6</span>
      </div>
      <div class="other-item" @click="develop">
        <img src="~assets/img/profile/footprint.svg" alt="" />
        <span>足迹</span>
        <span>100</span>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-item" @click="develop">
        <img src="~assets/img/profile/message.svg" alt="" />
        <span>我的消息</span>
      </div>
      <div class="bottom-item" @click="develop">
        <img src="~assets/img/profile/pointer.svg" alt="" />
        <span>积分商城</span>
      </div>
      <div class="bottom-item" @click="develop">
        <img src="~assets/img/profile/vip.svg" alt="" />
        <span>会员卡</span>
      </div>
      <div class="bottom-item" @click="toMyCart">
        <img src="~assets/img/profile/cart.svg" alt="" />
        <span>我的购物车</span>
      </div>
      <div class="bottom-item" @click="develop">
        <img src="~assets/img/profile/shopping.svg" alt="" />
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Profile",
  components: { NavBar },
  methods: {
    toMyCart() {
      this.$router.push("/shopcart");
    },
    develop() {
      this.$toast.error("抱歉，还在开发中哦...");
    },
  },
};
</script>
<style scoped>
#profile {
  font-size: 16px;
}
.profile-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.header {
  display: flex;
  position: relative;
  margin-top: 44px;
  padding: 10px 20px;
  height: 80px;
  width: 100%;
  background-color: var(--color-tint);
}
.header-img {
  flex: 1;
}
/* img {
  width: 18px;
  height: 18px;
} */
.header-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.header-info {
  flex: 5;
  padding: 5px 10px;
  line-height: ;
}
.header-left {
  display: flex;
  flex-direction: column;
}
.login-register {
  flex: 1;
  color: #fff;
  margin-left: 5px;
  font-size: 20px;
}
img {
  width: 20px;
  vertical-align: middle;
}
.phone {
  flex: 1;
  color: #fff;
  font-size: 16px;
}
.header-right {
  position: absolute;
  width: 10px;
  height: 10px;
  right: 20px;
  top: 50%;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: translateY(-50%) rotate(-45deg);
}
.mydata {
  display: flex;
  text-align: center;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  border-bottom: 10px solid #eee;
}
.mydata-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
.mydata-item span {
  flex: 1;
}
.number {
  font-size: 20px;
  color: var(--color-high-text);
}
.title {
  color: var(--color-text);
  font-size: 16px;
}
.mydata-item:nth-of-type(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.other {
  height: 40px;
  width: 100%;
  display: flex;
  padding: 10px 20px;
  text-align: center;
}
.other-item {
  flex: 1;
}
.other-item::after {
  content: "";
  display: block;
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background: #eee;
}
.other-item:nth-of-type(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.other-item span {
  margin-left: 5px;
}
.bottom {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
}
.bottom-item {
  flex: 1;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.bottom-item span {
  margin-left: 5px;
}
</style>