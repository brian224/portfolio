﻿$(function(){
	var $btn_menu  = $('.btn-menu'),
		$btn_theme = $('.menu .list'),
		$header    = $('.header'),
		$midWrap   = $('.midWrap'),
		$signature = $('.signature'),
		_url       = window.location.href.split('index')[0];

	if ($(window).width() > 860) {
		window.location.replace(_url + 'index.html');
	}

	$midWrap.delay(5000).queue(function(){
		$signature.attr('class', 'signature');
	});

	$btn_menu.on('click', function(){
		$header.toggleClass('trigger');
	});

	$btn_theme.on('click', function(){
		$midWrap.attr('class', 'midWrap ' + $(this).data('menu'));
		$header.attr('class', 'header');
		$('body').scrollTop(0);
		// $('body').animate({
		// 	scrollTop : 0
		// }, 500);
	});

	$(window).resize(function(){
		if ($(window).width() > 860) {
			window.location.href = _url + 'index.html';
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > $('.works').offset().top && $midWrap.hasClass('index')) {
			$header.addClass('show');
		} else if ($(window).scrollTop() > $('.name').offset().top && $midWrap.hasClass('about')) {
			$header.addClass('blue');
		} else {
			$header.removeClass('show blue');
		}
	});
});