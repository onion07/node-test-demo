var SFCOMM = (function () {
	var APP = {
			// 评论模块
			comment: {
				watchTextArea: function () {
					var $comment_area = $('#comment-area');
					var $publish = $('#publish');
					//发表按钮
					$comment_area.on('input propertychange', function() {
						if ( $('#comment-area').val() ) {
							$publish.addClass('ready');
						}
						else {
							$publish.removeClass('ready');
						}
					});
				}
			},
			// 扫一扫&顶部按钮模块
			feedback: {
				icodeHover: function (argument) {
					var $feedbkTop = $('.feedbk-top');
					var $feedbackBox = $('.feedback-box');
					//显示隐藏二维码
					$feedbkTop.hover(function () {
						$feedbkTop.addClass('hovered');
					});
					$feedbackBox.mouseleave(function(event) {
						$feedbkTop.removeClass('hovered');
					});
				},
				scrollTop: function () {
					var $fekBottom = $('.feedbk-bottom');
					//显示隐藏按钮
					$(window).scroll(function () {
							// console.info($(document).scrollTop());
						if ( $(document).scrollTop() >= 800) {
							$('.feedback-box').addClass('shown');
						}
						else {
							$('.feedback-box').removeClass('shown');
						}
					});
					//回到顶部
					$fekBottom.click(function(event) {
						$('html,body').stop().animate({scrollTop: 0}, 600);
					});

				}
			}
	};

	return APP;
})();




/********* 入口 *********/
$(function () {

	SFCOMM.init = function () {
		var _ts = this;
		
		 //评论区域
		_ts.comment.watchTextArea();
		// 扫一扫&顶部按钮
		_ts.feedback.icodeHover(); 
		_ts.feedback.scrollTop(); 
	}

	SFCOMM.init();
});