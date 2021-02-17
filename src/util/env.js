let baseURL
//node.js指示点process.env.NODE_ENV  可以获取到package中--mode=后面的参数(该参数不能随便写) ，获取node进程环境变量
switch (
  process.env.NODE_ENV //只支持CORS和JSONP跨域，代理的话配置这个没用，只能去vue.config配置
) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break

  default:
    break
}

export default {
  baseURL,
}
