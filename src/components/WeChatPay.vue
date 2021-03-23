<template>
  <div class="we-chat">
    <div class="pay-box">
      <div class="img-scan"></div>
      <div class="img-pay">
        <div class="title">
          微信支付
          <em @click="$emit('cancel')"></em>
        </div>
        <div class="qrcode">
          <img :src="img" alt="微信收款码" />
        </div>
        <div class="tip">
          <p>请使用微信扫一扫</p>
          <p>二维码完成支付</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeChat',
  data() {
    return {}
  },
  props: ['img'],
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.we-chat {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.6);
  .pay-box {
    position: fixed;
    display: inline-block;
    justify-content: space-between;
    align-items: center;
    width: 670px;
    height: 485px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    .img-scan {
      float: left;
      width: 296px;
      height: 485px;
      background: url('../../public/imgs/pay/icon-scan.png') no-repeat 50%;
      background-size: contain;
      box-sizing: border-box;
    }
    .img-pay {
      width: 370px;
      height: 440px;
      float: right;
      background-color: #fff;
      box-sizing: border-box;
      margin-top: 21px;
      .title {
        position: relative;
        height: 60px;
        line-height: 60px;
        color: #333;
        font-size: 20px;
        padding: 0 18px;
        background-color: #f5f5f5;
        em {
          position: absolute;
          top: 23.5px;
          right: 20px;
          display: inline-block;
          width: 13px;
          height: 13px;
          background: url('../../public/imgs/icon-close.png') no-repeat 50%;
          background-size: contain;
          cursor: pointer;
        }
      }
      .qrcode {
        width: 370px;
        height: 313px;
        text-align: center;
        padding: 44px 0 26px;
        box-sizing: border-box;
        img {
          height: 100%;
        }
      }
      .tip {
        width: 370px;
        height: 38px;
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
  }
}
</style>
