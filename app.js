var express = require('express');  
var bodyParser = require('body-parser');  
var app = express();  
app.all('*', function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Content-Type", "application/x-www-form-urlencoded ;charset=utf-8");
  // next();
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/', function(request, response){  
  // 输出 JSON 格式  
   data = {  
       'first_name':'roby',  
       'last_name':'zhou'  
   };  
   console.log(data);  
  //  response.end(JSON.stringify(data));  
   response.json(data);  
});  
  
// 创建 application/x-www-form-urlencoded 编码解析  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
  
app.post('/post', urlencodedParser, function(request, response){  
  // 输出 JSON 格式  
   data = {  
       'name':request.body.name,  
       'gender':request.body.gender  
   };  
   console.log(data);  
   //response.end(JSON.stringify(data));  
 response.json(data);  
});  
  
app.get('/roby', function(request, response){  
  var hostName = request.hostname;  
  console.log("hostName: %s", hostName);  
  response.send("I got you!");  
});  
  
var server = app.listen(8081, function(){  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log("address: %s, port: %d", host, port);  
});  