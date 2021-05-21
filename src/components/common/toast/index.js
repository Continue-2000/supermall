import Toast from './Toast'
const obj = {};

obj.install = function (Vue) {
  // 1.创建toast构造器
  const ToastConstructor = Vue.extend(Toast)
  // 2.创建构造器对象
  const toast = new ToastConstructor();
  // 3.挂载构造器对象
  toast.$mount(document.createElement('div'))
  // 4.添加节点
  document.body.appendChild(toast.$el)
  // 5.添加到原型
  Vue.prototype.$toast = toast;
}
export default obj