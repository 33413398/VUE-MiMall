<template>
  <div class="product-header clearfix" :class="{ 'is-fixed': isFixed }">
    <div class="content">
      <div class="left">
        {{ phoneName }}
      </div>
      <div class="right">
        <a href="javascript:;" class="title">概述</a> <span class="line">|</span> <a href="javascript:;" class="title">参数</a> <span class="line">|</span>
        <a href="javascript:;" class="title">用户评价</a>
        <a href="javascript:;" class="btn" @click="$emit('buy')">立即购买</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    }
  },
  props: ['phoneName'],
  created() {},
  mounted() {
    window.addEventListener('scroll', this.ininHeight)
  },
  methods: {
    ininHeight() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152 ? true : false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.product-header {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  .content {
    @include content();
    .left {
      float: left;
      font-size: 18px;
      color: $colorB;
      font-weight: 700;
    }
    .right {
      float: right;
      font-size: 14px;
      .title {
        color: $colorC;
      }
      .line {
        margin: 0 10px;
      }
      .btn {
        display: inline-block;
        width: 110px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        background-color: $colorA;
        margin-left: 10px;
        text-align: center;
      }
    }
  }
}
.is-fixed {
  position: fixed !important;
  top: 0 !important;
  height: 70px;
  line-height: 70px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid $colorH;
  box-shadow: 0 5px 5px rgba($color: #333, $alpha: 0.2);
}
</style>
