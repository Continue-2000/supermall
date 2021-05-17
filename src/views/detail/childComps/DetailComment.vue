<template>
  <div class="comment">
    <p v-if="!iscomment" class="nocomment">暂无评价</p>
    <div v-if="iscomment">
      <div v-for="item in list" class="comment-item">
        <div class="user">
          <div>
            <div class="title">用户评价</div>
            <div class="userimg">
              <img :src="item.user.avatar" alt="" />
            </div>
            <div class="userinfo">
              <div class="username">{{ item.user.uname }}</div>
              <div class="time-style">
                {{ item.created | showDate }}{{ item.style }}
              </div>
            </div>
          </div>
        </div>
        <p class="maincontent">{{ item.content }}</p>
        <div class="images">
          <img v-for="image in item.images" :src="image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDate } from "common/utils";
export default {
  name: "DetailComment",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    list() {
      return this.comments.list;
    },
    date() {
      return Date.vauleof(this.list.created);
    },
    iscomment() {
      return this.comments.list ? true : false;
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return getDate(date, "yyyy-MM-dd ");
    },
  },
};
</script>
<style scoped>
.comment {
  padding: 20px 0;
}
.nocomment {
  margin-left: 10px;
  font-size: 15px;
  color: #333;
}
.comment-item {
  padding: 20px;
}
.title {
  margin: 10px 0 40px 15px;
  color: #333;
  font-size: 15px;
}
.user {
  height: 40px;
}
.userimg {
  float: left;
}
.userimg img {
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.userinfo {
  float: left;
  margin-left: 10px;
  font-size: 14px;
}
.username {
  font-weight: 700;
}
.time-style {
  color: #ccc;
}
.maincontent {
  margin-top: 70px;
  font-size: 14px;
  text-align: left;
}
.images {
  display: flex;
  flex-wrap: wrap;
}

.images img {
  width: 48%;
  padding: 10px 10px 10px 0;
}
</style>