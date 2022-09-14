import { IndexKind } from 'typescript';
import { createRouter, createWebHashHistory } from 'vue-router';

import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Admin from '~/layouts/admin.vue'

const routes = [
  {
    path: '/',
    component: Admin,
    // meta:{
    //   title:'管理页面'
    // },
    // 子路由
    children:[
      {
        path: '/',
        component: Index,
        meta: {
          title: '首页'
        }
      },
    ]
  }, {
  path: '/login',
  component: Login,
  meta: {
    title: '登录页'
  }
},
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta: {
    title: '你的页面走丢了'
  }
}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;