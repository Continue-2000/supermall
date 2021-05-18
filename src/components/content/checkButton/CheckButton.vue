<template>
  <div class="check-button" :class="{ notcheck: !ischeck }" @click="change">
    <img src="~assets/img/cart/tick.svg" alt="" v-show="ischeck" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
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
      ischeck: false,
    };
  },
  methods: {
    change() {
      this.ischeck = !this.ischeck;
      this.cart.checked = this.ischeck;
    },
  },
  created() {
    this.ischeck;
  },
};
</script>
<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  background: pink;
}

img {
  width: 100%;
}
.notcheck {
  background: none;
  border: 2px solid pink;
}
</style>