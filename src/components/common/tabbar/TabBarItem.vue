<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-show="!isActive" class="imgpart">
      <slot name="tab_img"></slot>
      <div class="shop-count" v-if="isshowShopCount">{{ cartLength }}</div>
    </div>
    <div v-show="isActive" class="imgpart">
      <slot name="tab_active_img"></slot>
      <div class="shop-count" v-if="isshowShopCount">{{ cartLength }}</div>
    </div>
    <div :style="activeStyle"><slot name="tabtext"></slot></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cartLength: "cartLength",
    }),
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.fontcolor } : {};
    },
    isshowShopCount() {
      return this.type === "shopcart" && this.cartLength;
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
.imgpart {
  position: relative;
}
.shop-count {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 2px;
  right: 30%;
  text-align: center;
  line-height: 15px;
  font-size: 12px;
  background: red;
  color: #fff;
  border-radius: 50%;
}
</style>