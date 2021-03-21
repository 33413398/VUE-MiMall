module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // 部署应用时的基本 URL
  // publicPath: './',
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  // outputDir: 'dist',
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir: 'static',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // indexPath: 'index.html',
  // 是否开启eslint校验
  // lintOnSave:false,
  // 是否新增map文件浏览器可视化源码，关闭后别人将无法访问源码
  productionSourceMap:false,// false看不到源码，true可以看到
  // webpack配置项
  // 真正实现路由懒加载，配合路由import使用
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}