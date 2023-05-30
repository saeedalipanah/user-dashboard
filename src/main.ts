import './assets/scss/main.scss'
import 'ant-design-vue/dist/antd.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(i18n)
app.mount('#app')
