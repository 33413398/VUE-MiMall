<template>
  <div class="detail">
    <product-param :title="productInfo.name"></product-param>
    <div class="wrapper clearfix">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :slides-per-view="1" autoplay loop :pagination="{ clickable: true }">
            <swiper-slide><img :src="require('../../public/imgs/detail/phone-1.jpg')" alt=""/></swiper-slide>
            <swiper-slide><img :src="require('../../public/imgs/detail/phone-2.jpg')" alt=""/></swiper-slide>
            <swiper-slide><img :src="require('../../public/imgs/detail/phone-3.jpg')" alt=""/></swiper-slide>
            <swiper-slide><img :src="require('../../public/imgs/detail/phone-4.jpg')" alt=""/></swiper-slide>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{ productInfo.name }}</h2>
          <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br />外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div class="delivery">小米自营</div>
          <div class="item-price">
            {{ productInfo.price }}元<span class="del">{{ productInfo.price + 500 }}元</span>
          </div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stock">有现货</div>
          </div>
          <div class="item-version clearfix">
            <h2>选择版本</h2>
            <div class="phone fl" :class="version == '6GB+64GB 全网通' ? 'checked' : ''" @click="version = '6GB+64GB 全网通'">6GB+64GB 全网通</div>
            <div class="phone fr" :class="version == '4GB+64GB 移动4G' ? 'checked' : ''" @click="version = '4GB+64GB 移动4G'">4GB+64GB 移动4G</div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color"></span>
              深空灰
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">小米9 {{ version }} 深灰色</div>
              <div class="fr">2599元</div>
            </div>
            <div class="phone-total">总计：2599元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="fl" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img :src="require('../../public/imgs/detail/item-price.jpeg')" alt="" />
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import ProductParam from '../components/ProductParam'
import ServiceBar from '../components/ServiceBar'
SwiperCore.use([Pagination, Autoplay])
export default {
  name: 'detail',
  data() {
    return {
      version: '6GB+64GB 全网通',
      productInfo: {},
      productId: this.$route.params.id,
    }
  },
  created() {
    this.getProductInfo()
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductParam,
    ServiceBar,
  },
  methods: {
    addCart() {
      this.axios
        .post('/carts', {
          productId: this.productId,
          selected: true,
        })
        //设置默认值防止页面崩溃
        .then((res = { cartTotalQuantity: 0 }) => {
          this.$store.commit('saveCartCount', res.cartTotalQuantity)
          this.$router.push('/cart')
        })
    },
    getProductInfo() {
      this.axios.get('/products/' + this.productId).then(res => {
        this.productInfo = res
      })
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

.detail {
  .wrapper {
    .container {
      @include content();
      .swiper {
        float: left;
        width: 642px;
        height: 617px;
        margin-top: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        float: right;
        width: 584px;
        height: 870px;
        .item-title {
          font-size: 28px;
          padding-top: 30px;
          padding-bottom: 16px;
          height: 26px;
        }
        .item-info {
          font-size: 14px;
          height: 36px;
        }
        .delivery {
          font-size: 16px;
          color: #ff6700;
          margin-top: 26px;
          margin-bottom: 14px;
          height: 15px;
        }
        .item-price {
          font-size: 20px;
          color: #ff6700;
          height: 19px;
          .del {
            font-size: 16px;
            color: #999999;
            margin-left: 10px;
            text-decoration: line-through;
          }
        }
        .line {
          height: 0;
          margin-top: 25px;
          margin-bottom: 28px;
          border-top: 1px solid #e5e5e5;
        }
        .item-addr {
          height: 108px;
          background-color: #fafafa;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          padding-top: 31px;
          padding-left: 64px;
          font-size: 14px;
          line-height: 14px;
          position: relative;
          .icon-loc {
            position: absolute;
            top: 27px;
            left: 34px;
            @include bgimage(20px, 20px, '/imgs/detail/icon-loc.png');
          }
          .addr {
            color: #666666;
          }
          .stock {
            margin-top: 15px;
            color: #ff6700;
          }
        }
        .item-version,
        .item-color {
          margin-top: 30px;
          h2 {
            font-size: 18px;
            margin-bottom: 20px;
          }
        }
        .item-version,
        .item-color {
          .phone {
            width: 287px;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            color: #333333;
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;
            span {
              color: #666666;
              margin-left: 15px;
            }
            .color {
              display: inline-block;
              width: 14px;
              height: 14px;
              background-color: #666666;
            }
            &.checked {
              border: 1px solid #ff6600;
              color: #ff6600;
            }
          }
        }
        .item-total {
          height: 108px;
          background: #fafafa;
          padding: 24px 33px 29px 30px;
          font-size: 14px;
          margin-top: 50px;
          margin-bottom: 30px;
          box-sizing: border-box;
          .phone-total {
            font-size: 24px;
            color: #ff6600;
            margin-top: 18px;
          }
        }
        .btn-group {
          width: 300px;
          height: 54px;
          line-height: 54px;
          background-color: $colorA;
          a {
            display: inline-block;
            width: 100%;
            color: $colorG;
            text-align: center;
          }
        }
      }
    }
  }
  .price-info {
    background-color: #f3f3f3;
    height: 340px;
    .container {
      @include content();
      h2 {
        font-size: 24px;
        color: #333333;
        padding-top: 38px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
