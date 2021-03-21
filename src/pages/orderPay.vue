<template>
  <div class="orderpay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多 </span>
      </template>
    </order-header>
    <div class="wrapper" v-show="!loadingFlag">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
              <p>收货信息：{{ shippingList }}</p>
            </div>
            <div class="order-total">
              <p>
                应付总额：<span>{{ payment }}</span
                >元
              </p>
              <p>订单详情<em class="icon-down" :class="{ up: showInfo }" @click="showInfo = !showInfo"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showInfo">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info">
                {{ orderNo }}
              </div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">
                {{ shippingList }}
              </div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item, index) in orderList" :key="index"><img v-lazy="item.productImage" />{{ item.productName }}</li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">
                电子发票 个人
              </div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay pay-ali" :class="{ checked: checkedPay == 1 }" @click="paySubmit(1)"></div>
            <div class="pay pay-wechat" :class="{ checked: checkedPay == 2 }" @click="paySubmit(2)"></div>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loadingFlag"></loading>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import OrderHeader from '../components/OrderHeader.vue'
export default {
  components: { OrderHeader, Loading },
  name: 'orderpay',
  data() {
    return {
      showInfo: false,
      // 订单ID
      orderNo: this.$route.query.orderNo,
      // 购物车商品信息
      orderList: [],
      // 收件地址信息
      shippingList: '',
      // 总金额
      payment: 0,
      // 选中的支付方式
      checkedPay: 0,
      // 是否展示loding
      loadingFlag: false,
    }
  },
  created() {},
  mounted() {
    this.getOrdersList()
  },
  methods: {
    getOrdersList() {
      this.axios.get(`/orders/${this.orderNo}`).then(res => {
        this.orderList = res.orderItemVoList
        this.payment = res.payment
        let item = res.shippingVo
        this.shippingList = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`
      })
    },
    // 拉起支付请求
    paySubmit(payType) {
      this.checkedPay = payType
      if (this.checkedPay == 1) {
        // 支付宝
        this.loadingFlag = true
      } else if (this.checkedPay == 2) {
        // 微信
        this.loadingFlag = true
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
.orderpay {
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 61px;
  .container {
    @include content();
    .order-wrap {
      padding: 62px 50px;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 30px;
      .item-order {
        display: flex;
        align-items: center;
        .icon-succ {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: url('../../public/imgs/icon-gou.png') #80c58a no-repeat 50%;
          background-size: 60px;
          margin-right: 40px;
        }
        .order-info {
          margin-right: 248px;
          h2 {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
          }
          p {
            color: #666;
            span {
              color: $colorA;
            }
          }
        }
        .order-total {
          p {
            &:first-child {
              margin-bottom: 30px;
              span {
                font-size: 28px;
                color: $colorA;
              }
            }
            &:last-child {
              .icon-down {
                display: inline-block;
                width: 14px;
                height: 10px;
                background: url('../../public/imgs/icon-down.png') no-repeat 50%;
                background-size: contain;
                margin-left: 9px;
                transition: all 0.5s;
                cursor: pointer;
                transform: all 0.3s;
                &.up {
                  transform: rotate(180deg);
                }
              }
            }
          }
        }
      }
      .item-detail {
        border-top: 1px solid #d7d7d7;
        padding-top: 47px;
        padding-left: 130px;
        font-size: 14px;
        margin-top: 45px;
        transition: all 0.3s;
        .item {
          margin-bottom: 19px;
          .detail-title {
            float: left;
            width: 100px;
          }
          .detail-info {
            display: inline-block;
          }
        }
        .good {
          min-height: 30px;
          img {
            width: 30px;
            vertical-align: middle;
          }
        }
      }
    }
    .item-pay {
      padding: 26px 50px 72px;
      background-color: #fff;
      color: #333;
      h3 {
        font-size: 20px;
        font-weight: 200;
        color: #333;
        padding-bottom: 24px;
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 26px;
      }
      .pay-way {
        font-size: 18px;
        .checked {
          border: 1px solid $colorA !important;
        }
        .pay {
          display: inline-block;
          width: 188px;
          height: 64px;
          border: 1px solid #d7d7d7;
          cursor: pointer;
        }
        .pay-ali {
          background: url('../../public/imgs/pay/icon-ali.png') no-repeat 50%;
          background-size: 103px 38px;
          margin-top: 19px;
          &:last-child {
            margin-left: 20px;
          }
        }
        .pay-wechat {
          background: url('../../public/imgs/pay/icon-wechat.png') no-repeat 50%;
          background-size: 103px 38px;
        }
      }
    }
  }
}
</style>
