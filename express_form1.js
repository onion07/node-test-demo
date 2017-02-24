var express = require('express');
var app = express();

// app.use(express.static('public'));

app.get('/form1.html', function (req, res) {
   res.sendFile( __dirname + "/" + "form1.html" );
})

app.get('/process_get', function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name22:req.query.first_name,
       last_name22:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})