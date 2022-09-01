import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
// import './style.css'
import App from './App.vue'
import router from './router/index'



const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')