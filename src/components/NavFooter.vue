<template>
  <div class="footer">
    <div class="footer-log">
      <img src="../../public/imgs/logo-footer.png" alt="logo-footer" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://blog.csdn.net/h33413398?spm=1000.2115.3001.5343&type=blog" target="_blank">作者博客</a><span>|</span> <a href="https://github.com/33413398" target="_blank">GitHub</a
      ><span>|</span>
      <a href="javaScript:;">作者邮箱</a>
    </div>
    <div class="copyright">Copyright ©2021 <span class="domain">f.mi.com</span> 基于vue3.0开发.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-fotter',
}
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #f60;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-log {
    margin: 0 auto;
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: #999;
      display: inline-block;
      padding: 0 10px;
    }
    span {
      color: #999;
      font-size: 16px;
      text-align: center;
    }
  }
  .copyright {
    color: #999;
    font-size: 16px;
    text-align: center;
    .copyright {
      color: #f60;
    }
  }
}
</style>
