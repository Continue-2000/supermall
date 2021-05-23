<template>
  <div class="settlement">
    <div class="selectAll" @click="selectAll">
      <check-button class="check-button" :ischeck="isAll" />
      <span>全选</span>
    </div>
    <div class="total">
      <span class="totalPrice">合计: {{ total }}</span>
      <div class="toSettle" @click="accounts">
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
    return {
      isSelectAll: false,
    };
  },
  components: { CheckButton },
  created() {
    console.log(this.total);
  },
  computed: {
    ...mapGetters({
      allCart: "allCart",
    }),
    //计算总价
    total() {
      return (
        "￥" +
        this.allCart
          .filter((item) => {
            return item.checked;
          })
          .reduce((pre, cur) => {
            return pre + cur.price * cur.count;
          }, 0)
          .toFixed(2)
      );
    },
    //计算总数量
    totalNum() {
      return this.allCart.filter((item) => {
        return item.checked;
      }).length;
    },
    // 是否全选
    isAll: {
      get() {
        return (
          !this.allCart.length == 0 &&
          !this.allCart.some((item) => item.checked == false)
        );
      },
      set() {},
    },
  },
  methods: {
    // 1.全选
    selectAll() {
      this.isAll = !this.isAll;
      console.log(1);

      if (this.isAll) {
        for (let o of this.allCart) {
          this.$store.dispatch("ischeck", o);
        }
      } else if (!this.isAll)
        for (let o of this.allCart) {
          if (!o.checked) {
            this.$store.dispatch("ischeck", o);
          }
        }
    },
    // 2.结算
    accounts() {
      if (this.totalNum == 0) this.$toast.error("你还没有选择宝贝哦", 2500);
      else this.$toast.error("抱歉，还在开发中哦", 2500);
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
  align-items: center;
  width: 80px;
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
  margin-left: 60px;
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
