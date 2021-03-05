<template>
  <div class="index">
    <div class="content">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(citem, cindex) in item" :key="cindex">
                    <a :href="citem ? '/#/product/' + citem.id : 'javascript:;'">
                      <img v-lazy="citem ? citem.img : require('/public/imgs/item-box-1.png')" :alt="citem ? citem.name : '小米cc9'" />
                      {{ citem ? citem.name : '小米cc9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">电视 盒子</li>
            <li class="menu-item">笔记本 平板</li>
            <li class="menu-item">家电 插线板</li>
            <li class="menu-item">出行 穿戴</li>
            <li class="menu-item">智能 路由器</li>
            <li class="menu-item">电源 配件</li>
            <li class="menu-item">生活 箱包</li>
          </ul>
        </div>
        <swiper :slides-per-view="1">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img v-lazy="item.img" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="ads-box">
        <a href="/#/product/33" v-for="(item, index) in adsList" :key="index"> <img v-lazy="item.img" :alt="item.id"/></a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="require('/public/imgs/banner-1.png')" alt="banner图" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="content">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="require('../../public/imgs/mix-alpha.jpg')" alt="侧边手机图" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, index) in phoneList" :key="index">
              <div class="item" v-for="(citem, cindex) in item" :key="cindex">
                <span :class="cindex % 2 === 0 ? 'new-pro' : 'hot-pro'">{{ cindex % 2 === 0 ? '新品' : '爆款' }}</span>
                <div class="item-img">
                  <img v-lazy="citem.mainImage" :alt="citem.name" />
                </div>
                <div class="item-info">
                  <h3>{{ citem.name }}</h3>
                  <p>{{ citem.subtitle }}</p>
                  <p class="price" @click="cartHandel(citem.id)">
                    {{ citem.price + '元' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal v-if="modalFlag" v-on:submit="goToCart" v-on:cancel="modalFlag = false" title="添加商品" content="商品添加成功！" :btn="modalBtn" :btnnum="false"></modal>
  </div>
</template>

<script>
import SwiperCore, { EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import Modal from '../components/Modal.vue'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])
export default {
  name: 'index',
  data() {
    return {
      modalFlag: false,
      modalBtn: {
        type: '',
        title: '查看购物车',
      },
      swiperOption: {
        Autoplay: true,
        loop: true,
      },
      slideList: [
        {
          id: 42,
          img: require('/public/imgs/slider/slide-1.jpg'),
        },
        {
          id: 45,
          img: require('/public/imgs/slider/slide-2.jpg'),
        },
        {
          id: 46,
          img: require('/public/imgs/slider/slide-3.jpg'),
        },
        {
          id: '',
          img: require('/public/imgs/slider/slide-4.jpg'),
        },
        {
          id: '',
          img: require('/public/imgs/slider/slide-5.jpg'),
        },
      ],
      phoneList: [],
      menuList: [
        [
          {
            id: 30,
            img: require('/public/imgs/item-box-1.png'),
            name: '小米CC9',
          },
          {
            id: 31,
            img: require('/public/imgs/item-box-2.png'),
            name: '小米8青春版',
          },
          {
            id: 32,
            img: require('/public/imgs/item-box-3.jpg'),
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: require('/public/imgs/item-box-4.jpg'),
            name: '移动4G专区',
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: require('../../public/imgs/ads/ads-1.png'),
        },
        {
          id: 48,
          img: require('../../public/imgs/ads/ads-2.jpg'),
        },
        {
          id: 45,
          img: require('../../public/imgs/ads/ads-3.png'),
        },
        {
          id: 47,
          img: require('../../public/imgs/ads/ads-4.jpg'),
        },
      ],
    }
  },
  created() {
    this.getProductList()
  },
  mounted() {},
  methods: {
    getProductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012', //100012为手机分类
            pageSize: 14,
          },
        })
        .then(res => {
          res.list = res.list.slice(6, 14)
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
        })
    },
    cartHandel(id) {
      this.modalFlag = true
      console.log(id)
    },
    goToCart() {
      this.$router.push('/cart')
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Modal,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.index {
  .content {
    @include content();
    .swiper-box {
      position: relative;
      height: 451px;
      box-sizing: border-box;
      width: $min-width;
      .swiper-container {
        --swiper-theme-color: #007aff; /* 设置Swiper风格 */
        --swiper-navigation-color: #007aff; /* 单独设置按钮颜色 */
        --swiper-navigation-size: 30px; /* 设置按钮大小 */
        img {
          width: 100%;
          height: 451px;
        }
      }
      .nav-menu {
        position: absolute;
        z-index: 9;
        padding: 26px 0;
        background-color: rgba(85, 88, 90, 0.48);
        width: 264px;
        height: 451px;
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            position: relative;
            width: 264px;
            height: 50px;
            padding-left: 30px;
            color: #fff;
            font-size: 16px;
            line-height: 50px;
            box-sizing: border-box;
            a {
              color: #fff;
            }
            &::after {
              content: '';
              position: absolute;
              display: inline-block;
              right: 30px;
              top: 17.5px;
              @include bgimage(10px, 15px, '../../public/imgs/icon-arrow.png');
            }
            &:hover {
              background-color: $colorA;
              cursor: pointer;
              .children {
                display: block;
                transition: all 0.5s;
              }
            }
            .children {
              display: none;
              position: absolute;
              transition: all 0.5s;
              left: 264px;
              top: -26px;
              border: 1px solid #e5e5e5;
              background-color: #fff;
              width: 962px;
              height: 451px;
              box-sizing: border-box;
              ul {
                display: flex;
                justify-content: space-between;
                li {
                  padding-left: 23px;
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  a {
                    color: $colorB;
                    font-size: $fontJ;
                    img {
                      width: 42px;
                      height: 35px;
                      vertical-align: middle;
                      margin-right: 15px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .ads-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        display: inline-block;
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner {
      margin-bottom: 50px;
      a {
        display: inline-block;
        height: 130px;
        width: 100%;
        img {
          @include imgsize();
        }
      }
    }
  }
  .product-box {
    width: 100%;
    height: 743px;
    background-color: #f5f5f5;
    padding: 30px 0 50px;
    box-sizing: border-box;
    .content {
      @include content();
      h2 {
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: #333;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 622px;
        .banner-left {
          width: 224px;
          height: 100%;
          margin-right: 16px;
          box-sizing: border-box;
          img {
            @include imgsize(100%, 619px);
          }
        }
        .list-box {
          flex: 1;
          height: 100%;
          .list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 302px;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              position: relative;
              width: 236px;
              height: 100%;
              background-color: #fff;
              text-align: center;
              .new-pro {
                display: block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                position: relative;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: #7ecf68;
                color: #fff;
              }
              .hot-pro {
                display: block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                position: relative;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: red;
                color: #fff;
              }
              .item-img {
                width: 236px;
                height: 198px;
                text-align: center;
                img {
                  width: 100%;
                  height: 195px;
                }
              }
              .item-info {
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price {
                  color: #f20a0a;
                  font-size: 14px;
                  font-weight: 700;
                  cursor: pointer;
                  &::after {
                    content: '';
                    @include bgimage(22px, 22px, '../../public/imgs/icon-cart-hover.png');
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
