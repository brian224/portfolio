$(function(){
	var $btn_menu = $('.btn-menu'),
		$header   = $('.header'),
		$midWrap  = $('.midWrap'),
		_url      = window.location.href.split('index')[0];

	if ($(window).width() > 860) {
		window.location.replace(_url + 'index.html');
	}

	$btn_menu.on('click', function(){
		$(this).toggleClass('trigger');
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