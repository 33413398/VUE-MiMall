<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>
          预约维修服务
        </li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.service {
  padding: 33px 0;
  color: #666;
  font-size: 16px;
  .container {
    position: relative;
    @include content();
    li {
      display: inline-block;
      width: 24.9%; //防止不同浏览器百分比不同
      text-align: center;
      border-right: 1px solid #e5e5e5;
      cursor: pointer;
    }
    .icon-setting {
      @include bgimage(20px, 20px, '../../public/imgs/icon-setting.png');
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-7day {
      @include bgimage(20px, 20px, '../../public/imgs/icon-7day.png');
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-15day {
      @include bgimage(20px, 20px, '../../public/imgs/icon-15day.png');
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-post {
      @include bgimage(20px, 20px, '../../public/imgs/icon-post.png');
      vertical-align: middle;
      margin-right: 8px;
    }
  }
}
</style>
