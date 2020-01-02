// 导入 vue-router
import VueRouter from 'vue-router'
import Vue from 'vue'
import index from '../views/index/index.vue'
import login from '../views/login/login.vue'
//注册 vue-router
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
//这里就是路由的配制项
routes: [
  {
  path: '/index',
  component: index
 },
 {
  path: '/login',
  component: login
 }
  ]
})
export default router