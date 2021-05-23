import Vue from 'vue'
Vue.prototype.globalClick = function (callback) {
  document.getElementById("app").onclick = function () {
    callback();
    this.isShowControl = false;
  };
};

