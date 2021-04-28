<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  data() {
    return {
      banners: {
        type: Array,
        default() {
          return [];
        },
      },
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
  components: {
    NavBar,
    HomeSwiper,
  },
};
</script>
<style scoped>
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>