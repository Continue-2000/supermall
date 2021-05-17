<template>
  <div class="check-button" :class="{ notcheck: !ischeck }" @click="change">
    <img src="~assets/img/cart/tick.svg" alt="" v-show="ischeck" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  data() {
    return {
      ischeck: true,
    };
  },
  methods: {
    change() {
      this.ischeck = !this.ischeck;
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