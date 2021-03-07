export default {
  saveUserName (context, username) {
    context.commit('saveUserName',username)
    //第一个参数为调用的派发方法名，第二个为派发方法接收到的新值
  },
  saveCartCount (context, cartCount) {
    context.commit('saveCartCount',cartCount)
  }
}