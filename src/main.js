import Vue, { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
/* 一般布局，上面插件，下面组件 */
import App from './App.vue'
import env from './util/env'

axios.create({
  // baseURL: '/api',
  baseURL: env.baseURL,
  timeout: 8000,
})
axios.interceptors.response.use(
  function(response) {
    let res = response.data
    if (res.status == 0) return res.data
    else if (res.status == 10) window.location.href = '/#/login'
    else alert(res.msg)
  },
  function(error) {
    return Promise.reject(error)
  }
)
// 创建app
const app = createApp(App)
// 注入路由
app.use(router)
// 将axios通过vueaxios挂载到this实例上去,就可以通过this去调用了
app.use(VueAxios, axios)
// 挂载实例
app.mount('#app')
