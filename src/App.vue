<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      res: {},
    }
  },
  mounted() {
    this.getUserInfo()
    this.getCartCount()
  },
  methods: {
    getUserInfo() {
      this.axios.get('/user').then((res = {}) => {
        let { username } = res
        // this.$store.commit('saveUserName', username)
        this.saveUserName(username) //使用了mapActions导入即可简写
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.commit('saveCartCount', res)
      })
    },
    ...mapActions(['saveUserName']),
  },
}
</script>

<style>
@import './assets/scss/reset.scss';
@import './assets/scss/base.scss';
.swiper-button-prev {
  left: 274px !important;
}
</style>
