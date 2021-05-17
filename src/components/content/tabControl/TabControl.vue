<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in items"
      class="tab-control-item"
      :class="{ active: activeitem === index }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeitem: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.activeitem = index;
      this.$emit("tabclick", index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  font-size: 14px;
  padding: 5px;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>