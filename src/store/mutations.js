export default {
  saveUserName (state , username) {
    //第一个为仓库状态，点出对应变量，
    //第二个为action派发过来的新值。
    state.username = username
  },
  saveCartCount (state, cartCount) {
    state.cartCount = cartCount
  }
}