<template>
  <div class="settlement">
    <div class="selectAll">
      <check-button class="check-button" @click="selectAll" />
      <span>全选</span>
    </div>
    <div class="total">
      <span class="totalPrice">合计: {{ total }}</span>
      <div class="toSettle">
        结算<span v-show="totalNum">({{ totalNum }})</span>
      </div>
    </div>
  </div>
</template>
<script>
// 子组件
import CheckButton from "components/content/checkButton/CheckButton";
// 公用
import { mapGetters } from "vuex";
export default {
  name: "Settlement",
  data() {
    return {};
  },
  components: { CheckButton },
  created() {
    console.log(this.total);
  },
  computed: {
    //计算总价
    total() {
      return (
        "￥" +
        this.$store.state.shopcart
          .filter((item) => {
            return item.checked;
          })
          .reduce((pre, cur) => {
            return pre + cur.price * cur.count;
          }, 0)
      );
    },
    //计算总数量
    totalNum() {
      return this.$store.state.shopcart.filter((item) => {
        return item.checked;
      }).length;
    },
  },
  methods: {
    //全选
    selectAll() {
      this.$store.state.shopcart.map((item) => (item.checked = true));
    },
  },
};
</script>
<style scoped>
.settlement {
  position: fixed;
  display: flex;
  padding: 0 10px;
  bottom: 50px;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  border-top: 1px solid #ccc;
  background: #fff;
}
.selectAll {
  display: flex;
  flex: 1;
  align-items: center;
  height: 40px;
}
.total {
  display: flex;
  flex: 2;
  align-items: center;
  height: 40px;
}
.check-button {
  margin-right: 10px;
}
.totalPrice {
  flex: 1;
  margin-left: 20px;
}
.toSettle {
  height: 40px;
  width: 100px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  background: coral;
  border-radius: 20px;
}
</style>
