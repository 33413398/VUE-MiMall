<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多> </span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order" v-for="(order, index) in orderList" :key="index">
            <div class="order-title clearfix">
              <div class="item-info fl">{{ order.createTime }} <span>|</span> {{ order.receiverName }} <span>|</span> 订单号：{{ order.orderNo }} <span>|</span> {{ order.paymentTypeDesc }}</div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item, i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ item.productName }}</div>
                    <div class="p-money">{{ item.totalPrice + 'X' + item.quantity }}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{ order.statusDesc }}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{ order.statusDesc }}</a>
              </div>
            </div>
          </div>
          <loading v-if="loadingFlag"></loading>
          <!-- infinite-scroll-distance 距离页面底部高度 -->
          <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="true" infinite-scroll-distance="410">
            <img src="../../public/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading" />
          </div> -->
          <!-- <el-button type="primary" :loading="buttFlag" @click="moreButHandle">加载更多</el-button> -->
          <no-data v-if="orderList.length === 0 && loadingFlag === false"></no-data>
          <el-pagination v-show="pageFlag" class="pagination" background layout="prev, pager, next" :pageSize="pageSize" :total="total" @current-change="handleChange"> </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import OrderHeader from '../components/OrderHeader.vue'
import infiniteScroll from 'vue-infinite-scroll'
import NoData from '../components/NoData.vue'
export default {
  components: { OrderHeader, Loading, NoData },
  name: 'orderlist',
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      total: 0,
      orderList: [],
      loadingFlag: true,
      pageFlag: false,
      buttFlag: true,
      loading: false,
      busy: false, //滚动加载，是否触发
    }
  },
  directives: {
    infiniteScroll,
  },
  created() {},
  mounted() {
    this.getOrderList()
  },
  methods: {
    getOrderList() {
      this.loading = true
      this.busy = true
      this.axios
        .get('/orders', {
          params: {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
          },
        })
        .then(res => {
          this.orderList = res.list
          this.total = res.total
          this.loadingFlag = false
          this.pageFlag = true
          this.buttFlag = false
        })
    },
    goPay(orderNo) {
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo,
        },
      })
    },
    // 第一种方法：分页器
    handleChange(pageNum) {
      this.pageNum = pageNum
      this.getOrderList()
    },
    // 加载更多分页
    moreButHandle() {
      this.pageNum = this.pageNum++
      this.getOrderList()
    },
    // 触底加载
    loadMore: function() {
      this.busy = true
      setTimeout(() => {
        this.pageNum++
        this.getList()
      }, 500)
    },
    // 专门给scrollMore使用
    getList() {
      this.loading = true
      this.axios
        .get('/orders', {
          params: {
            pageSize: 10,
            pageNum: this.pageNum,
          },
        })
        .then(res => {
          this.orderList = this.orderList.concat(res.list)
          this.loading = false
          if (res.hasNextPage) {
            this.busy = false
          } else {
            this.busy = true
          }
        })
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
.order-list {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 33px;
    padding-bottom: 110px;
    .container {
      @include content();
      .order-box {
        .order {
          border: 1px solid #d7d7d7;
          background-color: #fff;
          margin-bottom: 31px;
          .pagination {
            float: right;
          }
          .order-title {
            height: 74px;
            line-height: 74px;
            background-color: #fffaf7;
            padding: 0 43px;
            font-size: 16px;
            color: #666;
            .item-info {
              span {
                margin: 0 9px;
              }
            }
            .item-money {
              .money {
                font-size: 26px;
                color: #333;
              }
            }
          }
          .order-content {
            padding: 0 43px;
            background-color: #fff;
            .good-box {
              .good-list {
                display: flex;
                align-items: center;
                height: 145px;
                .good-img {
                  width: 112px;
                  img {
                    width: 100%;
                  }
                }
                .good-name {
                  font-size: 20px;
                  color: #333;
                }
              }
            }
            .good-state {
              height: 145px;
              line-height: 145px;
              font-size: 20px;
              a {
                color: #f60;
              }
            }
          }
        }
        .el-pagination {
          float: right;
          .active {
            background-color: #f60 !important;
          }
        }
      }
    }
  }
}
</style>
