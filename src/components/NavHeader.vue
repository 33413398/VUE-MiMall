<template>
  <div class="nav-header">
    <div class="header-top">
      <div class="content">
        <div class="topbar-menu">
          <a href="javaScript:;" target="_blank" style="marginRight:15px">小米商城</a>
          <a href="javaScript:;" target="_blank" style="marginRight:15px">MUI</a>
          <a href="javaScript:;" target="_blank" style="marginRight:15px">云服务</a>
          <a href="javaScript:;" target="_blank" style="marginRight:15px">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javaScript:;" target="_blank" class="topbar-user-login">登录</a>
          <a href="javaScript:;" target="_blank" class="topbar-user-cart">
            <span class="icon-cart"></span>
            <span>购物车(0)</span>
          </a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="content">
        <div class="header-log">
          <a href="javaScript:;" target="_blank"> </a>
        </div>
        <div class="header-nav">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="childen">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a href="javaScript:;">
                    <div class="pro-img"><img :src="item.mainImage" :alt="item.name" /></div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu"><span>RedMi红米</span></div>
          <div class="item-menu">
            <span>电视</span>
            <div class="childen">
              <ul>
                <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img"><img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="tv1" /></div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img"><img src="../../public/imgs/nav-img/nav-3-2.jpg" alt="tv1" /></div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img"><img src="../../public/imgs/nav-img/nav-3-3.png" alt="tv1" /></div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img"><img src="../../public/imgs/nav-img/nav-3-4.jpg" alt="tv1" /></div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img"><img src="../../public/imgs/nav-img/nav-3-5.jpg" alt="tv1" /></div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img"><img src="../../public/imgs/nav-img/nav-3-6.png" alt="tv1" /></div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <input type="text" class="header-search-input" />
          <a class="icon-search"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-Header',
  data() {
    return {
      username: 'jack',
      phoneList: [],
    }
  },
  mounted() {
    this.getProductList() //  展示顶部商品时再放开请求
  },
  methods: {
    getProductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012', //100012为手机分类
            pageSize: 6,
          },
        })
        .then(res => {
          this.phoneList = res.list
        })
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.nav-header {
  .header-top {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .content {
      @include content();
      .topbar-menu {
        float: left;
        a {
          color: $colorD;
        }
      }
      .topbar-user {
        float: right;
        .topbar-user-login {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .topbar-user-cart {
          display: inline-block;
          text-align: center;
          width: 110px;
          height: 100%;
          color: $colorK;
          background-color: $colorA;
          .icon-cart {
            @include bgimage(16px, 12px, '../../public/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
  }
  .header-bottom {
    height: 112px;
    line-height: 112px;
    .content {
      position: relative;
      @include content();
      @include flex();
      height: 100%;
      .header-log {
        display: inline-block;
        height: 55px;
        width: 55px;
        line-height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          height: 55px;
          width: 110px;
          transition: margin 0.3s;
          &:before {
            content: '';
            @include bgimage(55px, 55px, '../../public/imgs/mi-logo.png', 55px, 50%);
          }
          &:after {
            content: '';
            @include bgimage(55px, 55px, '../../public/imgs/mi-home.png', 55px, 50%);
          }
          &:hover {
            margin-left: -55px;
          }
        }
      }
      .header-nav {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          &:hover {
            .childen {
              height: 220px;
              opacity: 1;
            }
          }
          span {
            display: inline-block;
            color: $colorB;
            font-weight: 700;
            font-size: $fontI;
            line-height: 112px;
            margin-right: 20px;
            &:hover {
              color: $colorA;
              cursor: pointer;
            }
          }
          .childen {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.5s;
            background-color: #fff;
            border-top: 1px solid #e5e5e5;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &:before {
                content: ' ';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid #d7d7d7;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
              a {
                display: inline-block;
                .pro-img {
                  height: 137px;
                  img {
                    width: auto;
                    height: 111px;
                    margin-top: 26px;
                  }
                }
                .pro-name {
                  font-weight: 700;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: #333;
                }
                .pro-price {
                  color: #f60;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        .header-search-input {
          border: none;
          box-sizing: border-box;
          border-right: 1px solid #e0e0e0;
          width: 264px;
          height: 50px;
          padding-left: 14px;
          outline: none;
        }
        .icon-search {
          margin-left: 17px;
          @include bgimage(18px, 18px, '../../public/imgs/icon-search.png');
        }
      }
    }
  }
}
</style>
