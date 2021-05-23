<template>
  <div id="app">
    <keep-alive :exclude="exclude"><router-view /></keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  data() {
    return {
      exclude: ["Detail"],
    };
  },
  components: {
    MainTabBar,
  },
  mounted() {
    /**
     * 解决 css 引入图片在 github pages 无法获取的问题
     */
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
  },
};
</script>

<style>
@import url("./assets/css/base");
</style>
