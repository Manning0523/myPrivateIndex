var express = require('express');
var router = express.Router();

var email   = require("emailjs");
var server  = email.server.connect({
    user:    "jsjjwmn@163.com",      // 你的用户
    password:"wmn147741",           // 授权码
    host:    "smtp.163.com",         // 主机，不改
    ssl:     true                   // 使用ssl
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var tele = req.body.tele;
  var info = req.body.info;
  var message = req.body.message;
  var sendContent = ' 发件人 : ' + name  + "\n  联系方式 ： " + tele + "\n  消息主题 ： " + info + "\n  详细内容 ： " + message ;
  //开始发送邮件
  server.send({
    text:    sendContent,       //邮件内容
    from:    "jsjjwmn@163.com",        //谁发送的
    to:      "919537053@qq.com",       //发送给谁的
    subject: "个人网页消息"          //邮件主题
  }, function(err, message) {
    //回调函数
    if(err){
      res.send("发送失败");
    }
    else{
      res.send("发送成功");
    }
  });
  
});

module.exports = router;
