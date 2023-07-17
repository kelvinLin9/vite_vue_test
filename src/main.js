// import './assets/main.css' 
// 換成scss就不需要了

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
