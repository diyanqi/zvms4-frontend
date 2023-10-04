import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import Vant from 'vant'

import 'element-plus/theme-chalk/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import 'vant/lib/index.css'
import 'animate.css/animate.min.css'

import persistedstate from 'pinia-plugin-persistedstate'
import { pad } from './plugins/ua'

const app = createApp(App)

app.use(createPinia().use(persistedstate))
app.use(router)

app.use(ElementPlus, {
  size: pad() ? 'large' : 'default'
})
app.use(Vant)

app.mount('#app')
