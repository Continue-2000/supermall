<template>
  <tab-bar>
    <tab-bar-item path="/home" fontcolor="red">
      <img slot="tab_img" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="tab_active_img"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="tabtext">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" fontcolor="red">
      <img slot="tab_img" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="tab_active_img"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="tabtext">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" fontcolor="red" type="shopcart">
      <img slot="tab_img" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="tab_active_img"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="tabtext">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" fontcolor="red">
      <img slot="tab_img" src="~/assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="tab_active_img"
        src="~/assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="tabtext">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
import TabBar from "components/common/tabbar/TabBar.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
</style>