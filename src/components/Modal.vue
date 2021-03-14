<template>
  <div class="modal">
    <div class="mask">
      <transition name="slide">
        <div class="modal-dialog">
          <div class="modal-header">
            {{ title }}
            <span class="cancel-icon" @click="$emit('cancel')"></span>
          </div>
          <div class="modal-body">{{ content }}</div>
          <div class="modal-footer ">
            <a v-if="!btnnum" href="javascript:;" :class="'btn' + ' ' + btn.type" @click="$emit('submit')">{{ btn.title }}</a>
            <div class="btn-group" v-if="btnnum">
              <a href="javascript:;" :class="'btn' + ' ' + btn.type" @click="$emit('submit')">{{ btn.title }}</a>
              <a href="javascript:;" class="btn cancelBtn" @click="$emit('cancel')">取消</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: 'title',
    },
    content: {
      type: String,
      default: 'content',
    },
    btnnum: {
      type: Boolean,
      default: false,
    },
    btn: {
      type: Object,
      default: new Object({
        title: '确定',
        type: '',
      }),
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    .modal-dialog {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 660px;
      height: 257px;
      transition: all 0.5s;
      background-color: #fff;
      .slide-enter-active {
        top: 20%;
      }
      .slide-leave-active {
        top: -100%;
      }
      .slide-enter {
        top: -100%;
      }
      .modal-header {
        position: relative;
        height: 60px;
        background-color: #f5f5f5;
        padding: 0 25px;
        line-height: 60px;
        font-size: 16px;
        .cancel-icon {
          position: absolute;
          top: 23px;
          right: 25px;
          cursor: pointer;
          @include bgimage(14px, 14px, '../../public/imgs/icon-close.png', contain);
          transition: transform 0.5s;
          &:hover {
            transform: scale(1.5);
          }
        }
      }
      .modal-body {
        padding: 42px 40px 54px;
        font-size: 14px;
      }
      .modal-footer {
        height: 82px;
        line-height: 82px;
        text-align: center;
        background-color: #f5f5f5;
        .btn {
          display: inline-block;
          width: 110px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background-color: $colorA;
          color: $colorG;
          border: none;
        }
        .cancelBtn {
          background-color: #b0b0b0;
          color: $colorG;
        }
        .btn-large {
          width: 202px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
        }
        .btn-huge {
          width: 300px;
          height: 54px;
          line-height: 54px;
          font-size: 16px;
        }
        .btn-group {
          .btn {
            margin-right: 20px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
