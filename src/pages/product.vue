<template>
  <div class="product">
    <product-header :phoneName="productInfo.name" @buy="buy"></product-header>
    <div class="item-bg">
      <div class="product_info">
        <h1>{{ productInfo.name }}</h1>
        <h5>{{ productInfo.subtitle }}</h5>
        <p>
          <a href="javascript:;">全球首款双频 GP</a><span>|</span> <a href="javascript:;">骁龙845</a><span>|</span> <a href="javascript:;">AI 变焦双摄</a><span>|</span>
          <a href="javascript:;">红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥</span>
          <span style="fontSize:38px">{{ productInfo.price }}</span>
        </div>
      </div>
    </div>
    <div class="item-bg2"></div>
    <div class="item-bg3"></div>
    <div class="item-swiper">
      <swiper :slides-per-view="3" :space-between="5" autoplay loop :pagination="{ clickable: true }">
        <swiper-slide>
          <img :src="require('../../public/imgs/product/gallery-2.png')" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="require('../../public/imgs/product/gallery-3.png')" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="require('../../public/imgs/product/gallery-4.png')" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="require('../../public/imgs/product/gallery-5.jpg')" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="require('../../public/imgs/product/gallery-6.jpg')" alt="" />
        </swiper-slide>
      </swiper>
      <p>{{ productInfo.name }} AI变焦双摄拍摄</p>
    </div>
    <div class="item-video">
      <h2>
        60帧超慢动作摄影<br />
        慢慢回味每一瞬间的精彩
      </h2>
      <p>
        后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />
        更能AI 精准分析视频内容，15个场景智能匹配背景音效。
      </p>
      <div class="video-bg" @click="videoFlag = true">
        <div class="overlay" v-if="videoFlag">
          <div class="video-box" :class="{ 'video-show': videoFlag }">
            <span class="icon-close" @click.stop="videoFlag = false"></span>
            <video controls :src="require('../../public/imgs/product/video.mp4')" autoplay muted></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductHeader from '../components/ProductHeader.vue'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Pagination, Autoplay])
export default {
  components: { ProductHeader, Swiper, SwiperSlide },
  name: 'product',
  data() {
    return {
      videoFlag: false,
      productInfo: {},
      productId: this.$route.params.id,
    }
  },
  created() {
    this.getProductInfo()
  },
  mounted() {},
  methods: {
    getProductInfo() {
      this.axios.get('/products/' + this.productId).then(res => {
        this.productInfo = res
      })
    },
    buy() {
      this.$router.push(`/detail/${this.productId}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.product {
  width: 100%;
  height: 100%;
  .item-bg {
    @include bgimage(100%, 718px, '../../public/imgs/product/product-bg-1.png');
    .product_info {
      text-align: center;
      h1 {
        font-size: 80px;
        padding-top: 55px;
      }
      h5 {
        font-size: 24px;
        letter-spacing: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: $colorB;
        }
        span {
          margin: 0 15px;
        }
      }
      .price {
        font-size: 30px;
        color: $colorB;
      }
    }
  }
  .item-bg2 {
    @include bgimage(100%, 480px, '../../public/imgs/product/product-bg-2.png');
  }
  .item-bg3 {
    @include bgimage(100%, 638px, '../../public/imgs/product/product-bg-3.png');
  }
  .item-swiper {
    width: 100%;
    margin: 36px auto 52px;
    .swiper-slide {
      width: 600.667px;
      margin-right: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      text-align: center;
      font-size: 18px;
    }
  }
  .item-video {
    width: 100%;
    height: 1044px;
    background-color: #070708;
    margin-bottom: 76px;
    color: #fff;
    text-align: center;
    h2 {
      font-size: 60px;
      padding-top: 82px;
      margin-bottom: 47px;
    }
    p {
      font-size: 24px;
      margin-bottom: 58px;
    }
    .video-bg {
      @include bgimage(1226px, 540px, '../../public/imgs/product/gallery-1.png');
      margin: 0 auto 120px;
      cursor: pointer;
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: $colorB, $alpha: 0.5);
        z-index: 10;
        .video-box {
          position: absolute;
          left: 50%;
          top: -50%;
          opacity: 0;
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 536px;
          transition: all 0.6s;
          &.video-show {
            top: 50%;
            opacity: 1;
          }
          .icon-close {
            position: absolute;
            top: 11px;
            right: 16px;
            @include bgimage(30px, 30px, '../../public/imgs/icon-close.png', 50%);
            background-color: #eee;
            border-radius: 50%;
            z-index: 20;
          }
          video {
            width: 100%;
            height: 100%;
            //覆盖掉原生样式
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }
}
</style>
