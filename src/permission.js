import router from "./router";
import {getToken} from './composables/auth'
import {toast} from './composables/util'

// 全局前置守卫
router.beforeEach((to, from,next) => {
  const  token = getToken()
  
  // 没有登陆强制跳转回首页
  if(!token && to.path != "/login"){
    toast("请先登录","error")
    return next({path:"/login"})
  }
  next()
})