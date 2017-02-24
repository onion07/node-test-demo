var fs = require("fs");
var data = '陈进胜';

// 创建一个可以写入的流，写入到文件 a.txt 中
var writerStream = fs.createWriteStream('a.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");