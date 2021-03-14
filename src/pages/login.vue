<template>
  <div class="login">
    <div class="header">
      <div class="content">
        <a href="#/index"> <img :src="require('../../public/imgs/login-logo.png')" alt=""/></a>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <div class="login-form">
          <h3><span class="checked">帐号登录</span><span class="line">|</span> 扫码登录</h3>
          <div class="inputbox">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="inputbox">
            <input type="text" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="but">
            <a href="javascript:;" @click="login">登录</a>
          </div>
          <div class="tips">
            <a href="javascript:;" @click="register">手机短信登录/注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="content">
        <div class="footer-link">
          <a href="javaScript:;" target="_blank">作者博客</a><span>|</span> <a href="javaScript:;" target="_blank">GitHub</a><span>|</span>
          <a href="javaScript:;" target="_blank">作者邮箱</a>
        </div>
        <div class="copyright">Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'vue-cookie'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      let { username, password } = this
      this.axios
        .post('/user/login', {
          username,
          password,
        })
        .then(res => {
          this.$router.push({
            name: 'index',
            params: {
              from: 'login',
            },
          })
          let { id, username } = res
          cookie.set('userId', id, { expires: 'Session' })
          this.$store.commit('saveUserName', username)
          this.$message.success('登录成功！')
        })
        .catch(res => {
          this.$message.error(res)
          return Promise.reject(res)
        })
    },
    register() {
      this.axios
        .post('/user/register', {
          username: 'admin1',
          password: 'admin1',
          email: 'admin1@163.com',
        })
        .then(() => {
          this.$message.success('用户注册成功')
        })
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.login {
  .header {
    height: 113px;
    & > .content {
      @include content();
      a {
        display: inline-block;
        width: auto;
        height: 100%;
        img {
          width: auto;
          height: 100%;
        }
      }
    }
  }
  .main {
    padding: 0;
    margin: 0;
    @include bgimage(100%, 576px, '../../public/imgs/login-bg.jpg', center, 50%);
    & > .content {
      position: relative;
      @include content();
      height: 100%;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        bottom: 29px;
        right: 0px;
        z-index: 20;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: $colorA;
          }
          .line {
            margin: 0 32px;
          }
        }
        .inputbox {
          height: 50px;
          width: 348px;
          border: 1px solid rgb(229, 229, 229);
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            padding: 18px;
            line-height: 100%;
            border-style: none;
            outline: none;
            box-sizing: border-box;
          }
        }
        .but {
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
          background-color: $colorA;
          a {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            color: $colorG;
          }
        }
        .tips {
          margin-top: 14px;
          a {
            color: $colorA;
            cursor: pointer;
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999;
    font-size: 16px;
    text-align: center;
    .content {
      @include content();
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
  }
}
</style>
