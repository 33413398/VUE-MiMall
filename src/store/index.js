import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'


export default createStore({
  //状态
  state(){
    return {
      username:'',//登录用户名
      cartCount:0//购物车商品数量
    }
  },
  //事件
  mutations,
  //派发状态操作
  actions
})
