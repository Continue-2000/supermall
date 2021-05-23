<template>
  <div class="toast" v-if="isShow">
    <img
      src="~assets/img/common/success.svg"
      alt=""
      v-if="type === 'success'"
    />
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
      type: "success",
    };
  },
  methods: {
    success(message = "默认信息", duration = 2500) {
      this.isShow = true;
      this.message = message;
      this.type = "success";
      console.log(message);
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    },
    error(message = "默认信息", duration = 2500) {
      this.isShow = true;
      this.message = message;
      this.type = "error";
      console.log(message);
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  padding: 10px 15px;
  top: 50%;
  left: 50%;
  z-index: 10000;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
}
img {
  width: 50px;
}
.delete {
  width: 100%;
  font-size: 22px;
}
</style>