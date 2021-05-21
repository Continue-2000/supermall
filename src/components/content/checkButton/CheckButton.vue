<template>
  <div class="check-button" :class="{ notcheck: !ischeck }" @click="change">
    <img src="~assets/img/cart/tick.svg" alt="" v-show="ischeck" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    ischeck: {
      type: Boolean,
      default() {
        return false;
      },
    },
    cart: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    change() {
      this.ischecked = !this.ischecked;
      this.$store.dispatch("ischeck", this.cart);
    },
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