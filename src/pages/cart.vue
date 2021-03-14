<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="content">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span class="checkbox" :class="checkedAllflag ? 'checked' : ''" @click="checkedAllflag = !checkedAllflag"></span>
              全选
            </li>
            <li class="col-2">商品名称</li>
            <li class="col-3">单价</li>
            <li class="col-4">数量</li>
            <li class="col-5">小计</li>
            <li class="col-6">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item">
              <div class="item-check">
                <span class="checkbox" :class="checkedflag ? 'checked' : ''" @click="checkedflag = !checkedflag"></span>
              </div>
              <div class="item-name">
                <img src="../../public/imgs/detail/phone-1.jpg" alt="手机图" />
                <span>Redmi Note 8 Pro , 6400万全场景四摄</span>
              </div>
              <div class="item-price">1399</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;">-</a>
                  <span>1</span>
                  <a href="javascript:;">+</a>
                </div>
              </div>
              <div class="item-total">4197</div>
              <div class="item-del"></div>
            </li>
            <li class="cart-item">
              <div class="item-check">
                <span class="checkbox" :class="checkedflag ? 'checked' : ''" @click="checkedflag = !checkedflag"></span>
              </div>
              <div class="item-name">
                <img src="../../public/imgs/detail/phone-1.jpg" alt="手机图" />
                <span>Redmi Note 8 Pro , 6400万全场景四摄</span>
              </div>
              <div class="item-price">1399</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;">-</a>
                  <span>1</span>
                  <a href="javascript:;">+</a>
                </div>
              </div>
              <div class="item-total">4197</div>
              <div class="item-del"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="javascript:;">继续购物</a>
            共<span> 2 </span>件商品，已选择<span> 0 </span>件
          </div>
          <div class="total fr">
            合计：<span>0</span> 元
            <a href="javascript:;">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  name: 'cart',
  data() {
    return {
      checkedflag: false,
      checkedAllflag: false,
    }
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    NavFooter,
    ServiceBar,
    OrderHeader,
  },
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.cart {
  .wrapper {
    height: auto;
    width: 100%;
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 114px;
    box-sizing: border-box;
    .content {
      @include content();
      .cart-box {
        height: auto;
        width: 100%;
        box-sizing: border-box;
        background-color: $colorG;
        font-size: $fontJ;
        color: $colorD;
        text-align: center;
        .cart-item-head {
          display: flex;
          justify-content: space-between;
          height: 79px;
          line-height: 79px;
          .col-1 {
            flex: 1;
            cursor: pointer;
            .checkbox {
              display: inline-block;
              width: 22px;
              height: 22px;
              border: 1px solid $colorH;
              vertical-align: middle;
              margin-right: 17px;
            }
            .checked {
              @include bgimage(22px, 22px, '../../public/imgs/icon-gou.png', 16px 12px);
              border: none;
              background-color: $colorA;
            }
          }
          .col-2 {
            flex: 3;
          }
          .col-3 {
            flex: 1;
          }
          .col-4 {
            flex: 2;
          }
          .col-5 {
            flex: 1;
          }
          .col-6 {
            flex: 1;
          }
        }
        .cart-item-list {
          .cart-item {
            display: flex;
            align-items: center;
            height: 126px;
            border-top: 1px solid $colorH;
            font-size: $fontI;
            box-sizing: border-box;
            .item-check {
              flex: 1;
              height: 22px;
              cursor: pointer;
              .checkbox {
                display: inline-block;
                width: 22px;
                height: 100%;
                border: 1px solid $colorH;
              }
              .checked {
                @include bgimage(22px, 100%, '../../public/imgs/icon-gou.png', 16px 12px);
                border: none;
                background-color: $colorA;
              }
            }
            .item-name {
              display: flex;
              align-items: center;
              flex: 3;
              font-size: $fontH;
              color: $colorB;
              img {
                width: 80px;
                height: 80px;
                vertical-align: middle;
              }
              span {
                margin-left: 30px;
              }
            }
            .item-price {
              flex: 1;
              color: $colorB;
            }
            .item-num {
              flex: 2;
              .num-box {
                width: 150px;
                height: 40px;
                line-height: 40px;
                margin: 0 auto;
                border: 1px solid #e5e5e5;
                font-size: 14px;
                a {
                  display: inline-block;
                  width: 50px;
                  color: $colorB;
                }
                span {
                  display: inline-block;
                  width: 50px;
                  color: $colorB;
                }
              }
            }
            .item-total {
              flex: 1;
              color: $colorA;
            }
            .item-del {
              flex: 1;
              @include bgimage(14px, 12px, '../../public/imgs/icon-close.png');
              cursor: pointer;
            }
          }
        }
      }
      .order-wrap {
        font-size: 14px;
        color: $colorC;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip {
          height: 50px;
          margin-left: 29px;
          a {
            color: $colorC;
            margin-right: 37px;
          }
          span {
            color: $colorA;
          }
        }
        .total {
          height: 50px;
          color: $colorA;
          span {
            font-size: 24px;
          }
          a {
            display: inline-block;
            width: 202px;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            margin-left: 37px;
            text-align: center;
            background: $colorA;
            color: $colorG;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
