import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from "./actions"
import getters from './getters'
// 1.使用Vuex
Vue.use(Vuex);
// 2.实例化仓库
const state = {
  shopcart: [],
  clickname: '正在流行'
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store;


