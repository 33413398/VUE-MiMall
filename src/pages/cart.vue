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
              <span class="checkbox" :class="{ checked: selectedAll }" @click="toggleAll"></span>
              全选
            </li>
            <li class="col-2">商品名称</li>
            <li class="col-3">单价</li>
            <li class="col-4">数量</li>
            <li class="col-5">小计</li>
            <li class="col-6">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item, index) in list" :key="index">
              <div class="item-check">
                <span class="checkbox" :class="item.productSelected ? 'checked' : ''" @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img :src="item.productMainImage" alt="手机图" />
                <span>{{ item.productName }} , {{ item.productSubtitle }}</span>
              </div>
              <div class="item-price">{{ item.productPrice }}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item, '-')">-</a>
                  <span>{{ item.quantity }}</span>
                  <a href="javascript:;" @click="updateCart(item, '+')">+</a>
                </div>
              </div>
              <div class="item-total">{{ item.productTotalPrice }}</div>
              <div class="item-del" @click="delProduct(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="#/index">继续购物</a>
            共<span> {{ list.length || 0 }} </span>件商品，已选择<span> {{ selectedProduct }} </span>件
          </div>
          <div class="total fr">
            合计：<span>{{ totalPrice || 0 }}</span> 元
            <a href="javascript:;" @click="order">去结算</a>
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
      count: 1,
      cartListData: {},
      list: [],
      totalPrice: 0,
      productAllSum: 0,
      // 是否全选
      selectedAll: false,
      //选择的商品数
      selectedProduct: 0,
    }
  },
  created() {
    this.getCartList()
  },
  mounted() {},
  methods: {
    getCartList() {
      this.axios.get('/carts').then(res => {
        this.setStateData(res)
      })
    },
    // 赋值方法
    setStateData(res) {
      if (res) {
        let { cartProductVoList, cartTotalPrice, cartTotalQuantity, selectedAll } = res
        this.list = cartProductVoList
        // 总价
        this.totalPrice = cartTotalPrice
        //总数
        this.productAllSum = cartTotalQuantity
        // 是否全选
        this.selectedAll = selectedAll
        this.cartListData = res
        this.selectedProduct = cartProductVoList.filter(item => item.productSelected).length
      }
    },
    // 是否全选
    toggleAll() {
      let url = this.selectedAll ? '/carts/unSelectAll' : '/carts/selectAll'
      this.axios.put(url).then(res => {
        this.setStateData(res)
      })
    },
    // 更新购物车数量和购物车单选状态
    updateCart(item, type) {
      let quantity = item.quantity,
        selected = item.productSelected
      if (type == '-') {
        if (quantity == 1) {
          this.$message.warning('商品至少保留一件')
          return
        }
        --quantity
      } else if (type == '+') {
        if (quantity > item.productStock) {
          this.$message.warning('购买数量不能超过库存数量')
          return
        }
        ++quantity
      } else {
        selected = !item.productSelected
      }
      this.axios
        .put(`/carts/${item.productId}`, {
          quantity,
          selected,
        })
        .then(res => {
          this.setStateData(res)
        })
    },
    // 删除购物车商品
    delProduct(item) {
      this.axios.delete(`/carts/${item.productId}`).then(res => {
        this.$message.success('删除成功')
        this.setStateData(res)
      })
    },
    // 购物车下单
    order() {
      // every遍历每一项，如果都为真则真，否则假，返回布尔值
      let isCheck = this.list.every(item => !item.productSelected)
      if (isCheck) {
        this.$message.warning('请选择一件商品')
      } else {
        this.$router.push('/order/confirm')
      }
    },
  },
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
