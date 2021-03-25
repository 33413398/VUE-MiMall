<template>
  <div class="order-header">
    <div class="content clearfix">
      <div class="header-log">
        <a href="#/index"> </a>
      </div>
      <h2>{{ title }}<slot name="tip"></slot></h2>
      <a href="javascript:;" class="username">{{ username }}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'order-Header',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState(['username']),
  },
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.order-header {
  height: 117px;
  padding: 30px 0;
  border-bottom: 2px solid #f60;
  box-sizing: border-box;
  .content {
    @include content();
    .header-log {
      float: left;
      height: 55px;
      width: 55px;
      line-height: 55px;
      background-color: $colorA;
      overflow: hidden;
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
    h2 {
      float: left;
      height: 55px;
      line-height: 55px;
      font-size: 28px;
      color: #333;
      margin-left: 55px;
      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999;
        font-weight: 200;
      }
    }
    .username {
      line-height: 55px;
      float: right;
      color: #666;
      font-size: 16px;
    }
  }
}
</style>
