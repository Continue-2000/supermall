<template>
  <div class="detailnavbar">
    <nav-bar class="navbar">
      <slot slot="left">
        <div class="left" @click="toback">
          <img src="~assets/img/common/back.svg" alt="" class="back" />
        </div>
      </slot>
      <slot slot="center">
        <div class="title">
          <div
            v-for="(item, index) in titles"
            class="titleItem"
            :class="{ activetitle: currentIndex === index }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </slot>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  props: {
    Index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("themeClick", this.currentIndex);
    },
    toback() {
      this.$router.back();

      // console.log(this.$router);
    },
  },
  watch: {
    Index() {
      this.currentIndex = this.Index;
    },
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.navbar {
  background: #fff;
}
.back {
  margin-top: 10px;
}
.title {
  display: flex;
}
.titleItem {
  flex: 1;
}
.activetitle {
  color: var(--color-high-text);
}
</style>