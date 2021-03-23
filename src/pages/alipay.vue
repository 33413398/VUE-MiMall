<template>
  <div class="alpay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多 </span>
      </template>
    </order-header>
    <loading v-if="loadingFlag"></loading>
    <div class="from" v-html="alPay"></div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  components: { OrderHeader, Loading, ServiceBar },
  name: 'alpay',
  data() {
    return {
      orderId: this.$route.query.orderId,
      alPay: '',
      loadingFlag: true,
    }
  },
  created() {},
  mounted() {
    this.getAlPay()
  },
  methods: {
    getAlPay() {
      this.axios
        .post('/pay', {
          orderId: this.orderId,
          orderName: '小米商城支付', //扫码支付时订单名称
          amount: 0.01, //单位元
          payType: 1, //1支付宝，2微信
        })
        .then(res => {
          this.alPay = res.content
          setTimeout(() => {
            document.forms[0].submit()
          }, 100)
        })
    },
  },
}
</script>

<style lang="scss"></style>
