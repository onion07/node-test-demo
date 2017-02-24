var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event_test', function(e) { 
	console.log('some_event_test 事件触发'); 
	console.log(e); 
}); 
setTimeout(function() { 
	event.emit('some_event_test','abc'); 
}, 1000); 

// var buf = new Buffer('www.runoob.com');
// var json = buf.toJSON('utf-8',buf);

// console.log(json);