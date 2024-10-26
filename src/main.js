import { createApp } from 'vue'
import './style.scss'
import './assets/style/main.scss'
import App from './App.vue'
import router from "./router"
  
const app = createApp(App)
app.use(router)
app.mount('#app')
