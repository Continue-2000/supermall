<template>
  <div class="jumpbtn" @click="clickto"></div>
</template>
<script>
export default {
  name: "JumpBtn",
  props: {
    destination: {
      type: String,
    },
  },
  methods: {
    clickto() {
      this.$router.push("/" + this.destination);
    },
  },
};
</script>
<style scoped>
.jumpbtn {
  position: fixed;
  right: 10px;
  bottom: 108px;
  width: 45px;
  height: 45px;
  background-image: url("~assets/img/common/tocart.png");
  background-size: 100%;
}
</style>