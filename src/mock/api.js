import Mock from 'mockjs'
//第一个参数是接口路径，第二个为返回值(数据为JSON格式)
Mock.mock('/api/user/login', {
  "status":0,
  "data":{
    "id|10001-11000":0,
    "username":"@cname",
  }
})
