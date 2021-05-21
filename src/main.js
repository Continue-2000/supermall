import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
//fastclick:1.导入
import FastClick from 'fastclick'
// 1.vue-lazyload:导入
import VueLazyLoad from 'vue-lazyload'
import '../rem'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
Vue.use(toast)
// 2.vue-lazyload:使用
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/loading.gif')
})
// 3.前往组件v-load使用
// 解决点击300ms延迟问题
//fastclick:2.载入
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
