<template>
  <div class="shopcart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>
<script>
// 子组件
import CartList from "./childComps/CartList";
// 公用组件
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from "vuex";
export default {
  name: "Shopcart",
  components: { NavBar, CartList },
  computed: {
    ...mapGetters({
      cartLength: "cartLength",
    }),
  },
};
</script>
<style scoped>
.shopcart {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
</style>