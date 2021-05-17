<template>
  <div class="cart-list">
    <scroll class="contain" ref="scroll">
      <cart-list-item v-for="cart in allCart" :cart="cart"></cart-list-item>
    </scroll>
  </div>
</template>
<script>
// 子组件
import CartListItem from "./CartListItem";
// 公用组件
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters({
      allCart: "allCart",
    }),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
.cart-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 58px;
}
.contain {
  height: 100%;
  width: 100%;
}
</style>