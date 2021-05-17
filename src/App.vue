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
};
</script>

<style>
@import url("./assets/css/base");
</style>
