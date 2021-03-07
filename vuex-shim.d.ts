import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    username:'',//登录用户名
    cartCount:0//购物车商品数量
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}