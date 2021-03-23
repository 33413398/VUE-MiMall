import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyloadNext from 'vue-lazyload-next'
/* 一般布局，上面插件，下面组件 */
import App from './App.vue'
import store from './store/index'
import {  ElMessage,ElPagination } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// import env from './util/env'

//mock开关
const mock = false
if (mock) {
  require('./mock/api')
}
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

axios.interceptors.response.use(
  function(response) {
    let res = response.data
    let path = location.hash
    if (res.status == 0) return res.data
    else if (res.status == 10) {
      if(path!='#/index'){
        window.location.href = '/#/login'
      }
       return Promise.reject(res)
    }
    else return ElMessage.warning(res.msg)
  },
  function(error) {
    return Promise.reject(error)
  }
)
// 创建app
const app = createApp(App)
//将message组件挂载到全局
app.use(ElMessage)
app.use(ElPagination)

// 注入路由
app.use(router)
// 挂载图片懒加载插件
app.use(VueLazyloadNext, {
  loading: require('../public/imgs/loading-svg/loading-bars.svg'),
  attempt: 1
})
// 将axios通过vueaxios挂载到this实例上去,就可以通过this去调用了
app.use(VueAxios, axios)
// 挂载vuex到实例
app.use(store)
// 挂载实例
app.mount('#app')
