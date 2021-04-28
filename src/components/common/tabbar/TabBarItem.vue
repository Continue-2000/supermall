<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-show="!isActive"><slot name="tab_img"></slot></div>
    <div v-show="isActive"><slot name="tab_active_img"></slot></div>
    <div :style="activeStyle"><slot name="tabtext"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBatItem",
  props: {
    path: String,
    fontcolor: {
      type: String,
      default() {
        "red";
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.fontcolor } : {};
    },
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 100%;
  padding: 3px 0 0 0;
}
img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
</style>