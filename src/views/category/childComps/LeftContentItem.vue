<template>
  <div
    class="left-content-item"
    @click="click"
    :class="{ clicked: item.title == clickName }"
  >
    <div class="title">{{ item.title }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "LeftContentItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters({
      clickName: "clickName",
    }),
  },
  methods: {
    click() {
      this.$store.commit("clickName", this.item.title);
      this.$bus.$emit("getShowItem", this.item);
    },
  },
  created() {
    console.log(this.clickName);
  },
};
</script>
<style scoped>
.left-content-item {
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 18px;
}
.title {
}
.clicked {
  border-left: 3px solid var(--color-tint);
  background: #fff;
  color: #000;
}
</style>