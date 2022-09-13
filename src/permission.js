import router from "./router";
import { getToken } from './composables/auth'
import { toast, showFullLoading, hideFullLoading } from './composables/util'
import store from "./store"

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 显示loading
  showFullLoading()

  const token = getToken()

  // 没有登陆强制跳转回首页
  if (!token && to.path != "/login") {
    toast("请先登录", "error")
    return next({ path: "/login" })
  }

  // 防止重新登陆
  if (token && to.path == "/login") {
    toast("请勿重复登录", "error")
    return next({ path: from.path ? from.path : "/" })
  }
  // 如果用户登录了，就自动获取用户信息，并存储在VueX当中
  if (token) {
    await store.dispatch("getInfo")
  }

  // 设置页面标题
  let title = (to.meta.title ? to.meta.title : "") //  + "-商城管理后台"
  
  document.title = title

  next()
})

// 全局后置守卫
router.afterEach((to, from) => {
  hideFullLoading()
})