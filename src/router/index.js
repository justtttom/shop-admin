import { IndexKind } from 'typescript';
import { createRouter, createWebHashHistory } from 'vue-router';

import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'

const routes = [{
  path: '/',
  component: Index,
  meta: {
    title: '首页'
  }
}, {
  path: '/login',
  component: Login,
  meta:{
    title:'登录页'
  }
},
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta:{
    title:'404'
  }
},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;