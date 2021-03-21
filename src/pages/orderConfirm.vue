<template>
  <div class="orderConfirm">
    <order-header title="订单确认">
      <template v-slot:tip>
        <span>请认真填写收货地址</span>
      </template>
    </order-header>
    <!-- svg矢量图 -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          ></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2 class="addr-title">
              收货地址
            </h2>
            <div class="addr-list clearfix">
              <!-- 地址框 -->
              <div class="addr-info" :class="{ checked: checkedAddress == index }" v-for="(item, index) in addressList" :key="index" @click="checkedAddress = index">
                <h2>{{ item.receiverName }}</h2>
                <div class="phone">{{ item.receiverMobile }}</div>
                <div class="street">{{ item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress }}</div>
                <div class="action">
                  <a href="javascript:;" class="fl" @click="editAddress(item, 1)">
                    <svg class="icon icon-edit">
                      <use xlink:href="#icon-edit"></use>
                    </svg>
                  </a>
                  <a href="javascript:;" class="fr" @click="delAddress(item, 0)">
                    <svg class="icon icon-del">
                      <use xlink:href="#icon-del"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <!-- 新增地址 -->
              <div class="addr-add" @click="addAddress(2)">
                <div class="icon-add"></div>
                <p>添加新地址</p>
              </div>
            </div>
          </div>
          <div class="item-good">
            <h2>商品</h2>
            <ul>
              <li v-for="(item, index) in productList" :key="index">
                <div class="good-name">
                  <img v-lazy="item.productMainImage" />
                  <span>{{ item.productName + ' ' + item.productSubtitle }}</span>
                </div>
                <div class="good-price">{{ item.productPrice }}元x{{ item.quantity }}</div>
                <div class="good-total">{{ item.productTotalPrice }}元</div>
              </li>
            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-name">
                商品件数：
              </span>
              <span class="item-val"> {{ productList.length }}件 </span>
            </div>
            <div class="item">
              <span class="item-name">
                商品总价：
              </span>
              <span class="item-val">
                {{ productPriceAll }}
              </span>
            </div>
            <div class="item">
              <span class="item-name">
                优惠活动：
              </span>
              <span class="item-val">
                0元
              </span>
            </div>
            <div class="item">
              <span class="item-name">
                运费：
              </span>
              <span class="item-val">
                0元
              </span>
            </div>
            <div class="item-total">
              <span class="item-name">应付总额：</span>
              <span class="item-val"> {{ productPriceAll }}元 </span>
            </div>
          </div>
          <div class="btn-group">
            <a href="/#/cart" class="btn-back">返回购物车</a>
            <a href="javascript:;" class="btn-js" @click="orderSubmit">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除模态框 -->
    <modal v-if="showDelModal" @submit="submitAddress" title="删除地址" @cancel="showDelModal = false" content="确定删除该收货地址吗？" btnnum> </modal>
    <!-- 新增、编辑模态框 -->
    <modal v-if="showEditModal" :title="userAction == 2 ? '新增地址' : '编辑地址'" @cancel="showEditModal = false" @submit="submitAddress">
      <template v-slot:content>
        <div class="edit-wrap">
          <div class="item">
            <input type="text" placeholder="姓名" v-model="checkedItem.receiverName" />
            <input type="text" placeholder="手机号" v-model="checkedItem.receiverMobile" />
          </div>
          <div class="item">
            <select name="receiverProvince" v-model="checkedItem.receiverProvince">
              <option disabled value="请选择省份">请选择省份</option>
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">河北</option>
            </select>
            <select name="receiverCity" v-model="checkedItem.receiverCity">
              <option disabled value="请选择城市">请选择城市</option>
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">河北</option>
            </select>
            <select name="receiverDistrict" v-model="checkedItem.receiverDistrict">
              <option disabled value="请选择街镇/区">请选择街镇</option>
              <option value="东城区">东城区</option>
              <option value="西城区">西城区</option>
              <option value="昌平区">昌平区</option>
            </select>
          </div>
          <div class="item">
            <textarea placeholder="请填写详细地址" name="street" v-model="checkedItem.receiverAddress" />
          </div>
          <div class="item">
            <input type="text" placeholder="邮编" v-model="checkedItem.receiverZip" />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import OrderHeader from '../components/OrderHeader.vue'
export default {
  components: { OrderHeader, Modal },
  name: 'orderConfirm',
  data() {
    return {
      // 购物车中商品数据
      cartList: [],
      // 选中的收货地址
      checkedAddress: 0,
      // 收获地址列表
      addressList: [],
      // 用户操作地址类型
      userAction: '',
      // 当前选中的地址项内容
      checkedItem: {
        receiverProvince: '请选择省份',
        receiverCity: '请选择城市',
        receiverDistrict: '请选择街镇/区',
      },
      // 删除地址模态框是否显示
      showDelModal: false,
      // 新增、删除模态框是否显示
      showEditModal: false,
      // 购物车商品数据列表
      productList: [],
      // 商品总价
      productPriceAll: 0,
    }
  },
  created() {},
  mounted() {
    this.getAddressList()
    this.getProductList()
  },
  methods: {
    // 获取收货地址
    getAddressList() {
      this.axios.get('/shippings').then(res => {
        this.addressList = res.list
      })
    },
    // 删除地址
    delAddress(item, type) {
      this.showDelModal = true
      this.userAction = type
      this.checkedItem = item
    },
    //新增地址
    addAddress(type) {
      this.showEditModal = true
      this.userAction = type
    },
    //编辑地址
    editAddress(item, type) {
      this.showEditModal = true
      this.userAction = type
      this.checkedItem = item
    },
    // 删除，编辑，新增收货地址
    submitAddress() {
      let { checkedItem, userAction } = this
      let method,
        url,
        params = {}
      // 校验
      if (userAction == 1 || userAction == 2) {
        let { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = checkedItem
        let errMsg = ''
        if (!receiverName) {
          errMsg = '请输入收货人名称'
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errMsg = '请输入正确格式的手机号'
        } else if (!receiverProvince) {
          errMsg = '请选择省份'
        } else if (!receiverCity) {
          errMsg = '请选择对应的城市'
        } else if (!receiverAddress || !receiverDistrict) {
          errMsg = '请输入收货地址'
        } else if (!/\d{6}/.test(receiverZip)) {
          errMsg = '请输入六位邮编'
        }
        if (errMsg) {
          this.$message.error(errMsg)
          return
        }
      }
      if (userAction == 0) {
        //删除
        method = 'delete'
        url = `/shippings/${checkedItem.id}`
      } else if (userAction == 1) {
        // 编辑
        let { receiverName, receiverPhone, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = checkedItem
        method = 'put'
        url = `/shippings/${checkedItem.id}`
        params = {
          receiverName,
          receiverPhone: 101,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,
        }
      } else if (userAction == 2) {
        // 新增
        let { receiverName, receiverPhone, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = checkedItem
        method = 'post'
        url = `/shippings`
        params = {
          receiverName,
          receiverPhone,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,
        }
      }
      this.axios[method](url, params).then(() => {
        this.closeModal()
        this.getAddressList()
        this.$message.success('操作成功')
      })
    },
    // 地址操作完成后统一调用
    closeModal() {
      this.checkedItem = {}
      this.userAction = ''
      this.showDelModal = false
      this.showEditModal = false
    },
    // 获取购物车商品列表
    getProductList() {
      this.axios.get('/carts').then(res => {
        let arry = res.cartProductVoList.filter((item, index) => {
          return item.productSelected
        })
        this.productList = arry
        this.productPriceAll = res.cartTotalPrice
      })
    },
    // 结算
    orderSubmit() {
      let item = this.addressList[this.checkedAddress]
      if (!item) {
        this.$message.error('请选择一个收货地址')
        return
      }
      this.axios
        .post('/orders', {
          shippingId: item.id,
        })
        .then(res => {
          this.$router.push({
            path: '/order/pay',
            query: {
              orderNo: res.orderNo,
            },
          })
        })
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
.orderConfirm {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 84px;
    .container {
      @include content();
      .order-box {
        background-color: #fff;
        padding-left: 40px;
        padding-bottom: 40px;
        .item-address {
          padding-top: 38px;
          .addr-title {
            font-size: 20px;
            color: #333;
            font-weight: 200;
            margin-bottom: 21px;
          }
          .addr-list {
            color: #333;
            min-width: 1226px;
            font-size: 12px;
            .addr-info {
              float: left;
              width: 271px;
              height: 180px;
              margin-right: 15px;
              padding: 15px 24px;
              font-size: 14px;
              color: #757575;
              border: 1px solid #e5e5e5;
              cursor: pointer;
              box-sizing: border-box;
              h2 {
                height: 27px;
                font-size: 18px;
                font-weight: 300;
                color: #333;
                margin-bottom: 10px;
              }
              .street {
                height: 50px;
              }
              .action {
                height: 50px;
                line-height: 50px;
                .icon {
                  width: 20px;
                  height: 20px;
                  fill: #666666;
                  vertical-align: middle;
                  &:hover {
                    fill: $colorA;
                  }
                }
              }
            }
            .checked {
              border: 1px solid $colorA;
            }
            .addr-add {
              float: left;
              width: 271px;
              height: 180px;
              padding: 15px 24px;
              font-size: 14px;
              color: #757575;
              border: 1px solid #e5e5e5;
              text-align: center;
              cursor: pointer;
              box-sizing: border-box;
              .icon-add {
                border-radius: 50%;
                @include bgimage(30px, 30px, '../../public/imgs/icon-add.png');
                background-size: 14px;
                margin: 0 auto;
                margin-top: 45px;
                margin-bottom: 10px;
                background-color: #e0e0e0;
              }
            }
          }
        }
        .item-good {
          margin-top: 34px;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 12px;
          h2 {
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 5px;
          }
          ul {
            li {
              display: flex;
              text-align: center;
              height: 40px;
              line-height: 40px;
              margin-top: 10px;
              font-size: 16px;
              color: $colorB;
              .good-name {
                flex: 5;
                text-align: left;
                img {
                  width: 30px;
                  height: 30px;
                  vertical-align: middle;
                }
              }
              .good-price {
                text-align: left;
                flex: 2;
              }
              .good-total {
                padding-right: 44px;
                color: #f60;
              }
            }
          }
        }
        .item-shipping {
          margin-top: 31px;
          line-height: 20px;
          h2 {
            display: inline-block;
            margin-right: 71px;
            font-size: 20px;
            width: 80px;
          }
          span {
            font-size: $fontI;
            color: $colorA;
            margin-right: 23px;
          }
        }
        .item-invoice {
          margin-top: 31px;
          line-height: 20px;
          h2 {
            display: inline-block;
            margin-right: 71px;
            font-size: 20px;
            width: 80px;
          }
          a {
            font-size: $fontI;
            color: $colorA;
            margin-right: 23px;
          }
        }
        .detail {
          padding: 50px 44px 33px 0;
          border-bottom: 1px solid #f5f5f5;
          text-align: right;
          font-size: 16px;
          color: #666;
          .item {
            line-height: 15px;
            margin-bottom: 12px;
            .item-name {
              text-align: right;
            }
            .item-val {
              display: inline-block;
              width: 100px;
              color: $colorA;
            }
          }
          .item-total {
            .item-name {
              text-align: right;
              font-size: 16px;
              color: #666;
            }
            .item-val {
              font-size: 28px;
              display: inline-block;
              width: 100px;
              color: $colorA;
            }
          }
        }
        .btn-group {
          margin-top: 37px;
          text-align: right;
          a {
            display: inline-block;
            background-color: $colorA;
            color: $colorG;
            width: 202px;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            text-align: center;
            &:first-child {
              margin-right: 20px;
              background-color: #b0b0b0;
            }
            &:last-child {
              background-color: $colorA;
            }
          }
        }
      }
    }
  }
  .edit-wrap {
    .item {
      display: flex;
      margin-bottom: 15px;
      input {
        display: inline-block;
        width: 283px;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        border: 1px solid #e5e5e5;
        margin-left: 14px;
        &:first-child {
          margin-left: 0;
        }
      }
      select {
        width: 184px;
        height: 40px;
        color: #666;
        line-height: 40px;
        padding-left: 15px;
        border: 1px solid #e5e5e5;
        &:nth-child(2) {
          margin-left: 14px;
        }
        &:nth-child(3) {
          margin-left: 14px;
        }
      }
      textarea {
        flex: 1;
        height: 100px;
        line-height: 35px;
        padding-left: 15px;
        border: 1px solid #e5e5e5;
      }
    }
  }
}
</style>
