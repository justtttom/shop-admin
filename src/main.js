import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
// import './style.css'
import App from './App.vue'
import {router} from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'



const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

app.use(ElementPlus)

app.use(store)

import  './permission'

import '../node_modules/nprogress/nprogress.css'

import permission from '~/directives/permission.js'

app.mount('#app')