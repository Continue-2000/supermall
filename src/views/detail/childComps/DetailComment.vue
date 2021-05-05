<template>
  <div class="comment" v-if="Object.keys(comments).length !== 0">
    <div v-for="item in list" class="comment-item">
      <div class="user">
        <div>
          <div class="userimg">
            <img :src="item.user.avatar" alt="" />
          </div>
          <div class="userinfo">
            <div class="username">{{ item.user.uname }}</div>
            <div class="time-style">{{ item.created }}{{ item.style }}</div>
          </div>
        </div>
      </div>
      <p class="maincontent">{{ item.content }}</p>
      <div class="images">
        <img v-for="image in item.images" :src="image" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
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
  },
};
</script>
<style scoped>
.comment {
  padding: 20px 0;
}
.comment-item {
  padding: 20px;
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
  margin-top: 10px;
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