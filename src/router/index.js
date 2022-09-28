import { createRouter, createWebHashHistory } from 'vue-router';

import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import GoodList from '~/pages/goods/list.vue'
import CategoryList from '~/pages/category/list.vue'
import Admin from '~/layouts/admin.vue'

//默认路由，所有用户共享
const routes = [
  {
    path: "/",
    name: 'admin',
    component: Admin,
  }, {
    path: '/login',
    component: Login,
    meta: {
      title: '登录页'
    }
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '你的页面走丢了'
    }
  }
]

// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [
  {
    path: '/',
    name:'/',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: "/goods/list",
    name:'/goods/list',
    component: GoodList,
    meta: {
      title: '商品管理页'
    }
  }, {
    path: '/category/list',
    name:'/category/list',
    component: CategoryList,
    meta: {
      title: '分类管理页'
    }
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 动态添加路由的方法
export function addRoutes(menus) {
  // 是否有新的路由
  let hasNewRoutes = false
  const findAndRoutesByMenus = (arr) =>{
   arr.forEach(e => {
      let item = asyncRoutes.find(o=>o.path == e.frontpath)
      if(item && !router.hasRoute()){
        router.addRoute("admin",item)
        hasNewRoutes = true
      }
      if(e.child && e.child.length > 0){
        findAndRoutesByMenus(e.child)
      }
    });
  }

  findAndRoutesByMenus(menus)

  return hasNewRoutes
}
