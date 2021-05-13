import VueRouter from 'vue-router'
import Vue from 'vue'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
// 1.使用路由
Vue.use(VueRouter)
// 2.创建实例
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  }, {
    path: '/shopcart',
    component: Shopcart
  }, {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  // mode: 'history'
})
// 3.暴露路由
export default router;