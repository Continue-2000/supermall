<template>
  <div class="cart-list-item">
    <div class="control-part" v-if="isShowControl">
      <div class="control-item">
        <div class="btn" @click="develop">移入收藏</div>
      </div>
      <div class="control-item">
        <div class="btn" @click="develop">看相似</div>
      </div>
      <div class="control-item">
        <div class="btn" @click="deletecart">删除</div>
      </div>
    </div>
    <div class="select">
      <check-button class="check-button" :ischeck="cart.checked" :cart="cart" />
    </div>
    <div
      class="desc"
      @touchstart="touchstart"
      @touchend.stop.prevent="touchend"
    >
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
import functions from "common/functions";
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
  data() {
    return {
      timeout: null,
      islong: false,
      isShowControl: false,
    };
  },
  mounted() {
    let that = this;
    document.getElementById("app").onclick = function (e) {
      console.log(e);
      that.num += 1;
      if (
        e.target.className === "control-item" ||
        e.target.className === "control-part"
      )
        console.log(1);
      else {
        that.isShowControl = false;
      }
    };
  },
  methods: {
    touchend() {
      console.log("ended");
      clearTimeout(this.timeout);
      if (!this.islong) {
        this.$router.push("/detail/" + this.cart.id);
      }
      this.islong = false;
    },
    touchstart() {
      clearTimeout(this.timeout); //防止重新注册
      this.timeout = setTimeout(() => {
        this.islong = true;
        this.isShowControl = true;
      }, 600);
    },
    deletecart() {
      this.$store.commit("deletecart", this.cart);
      this.$toast.success("删除成功", 2500);
    },
    develop() {
      this.$toast.error("抱歉，还在开发中哦");
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
  padding: 10px 20px 10px 0;
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

.control-part {
  display: flex;
  position: absolute;
  padding: 10px 20px;
  left: 0;
  right: 0;
  top: 20%;
  height: 70%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.control-item {
  flex: 1;
  position: relative;
}
.control-item .btn {
  position: absolute;
  width: 70px;
  height: 70px;
  top: 50%;
  left: 50%;
  text-align: center;
  line-height: 70px;
  font-size: 14px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  color: #fff;
}
.control-item:nth-of-type(1) .btn {
  background-image: -webkit-gradient(
    radial,
    center center,
    0,
    center center,
    220,
    from(orange),
    to(red)
  );
}
.control-item:nth-of-type(2) .btn {
  background-image: -webkit-gradient(
    radial,
    center center,
    0,
    center center,
    220,
    from(rgb(58, 223, 126)),
    to(red)
  );
}
.control-item:nth-of-type(3) .btn {
  background-image: -webkit-gradient(
    radial,
    center center,
    0,
    center center,
    220,
    from(rgb(226, 42, 97)),
    to(red)
  );
}
</style>