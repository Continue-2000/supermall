<template>
  <div class="backtop"></div>
</template>
<script>
export default {
  name: "BackTop",
};
</script>
<style scoped>
.backtop {
  position: fixed;
  right: 10px;
  bottom: 58px;
  width: 45px;
  height: 45px;
  background-image: url("~assets/img/common/top.png");
  background-size: 100%;
}
</style>