$(function(){
	var $btn_menu = $('.btn-menu'),
		$header   = $('.header'),
		_viewHei  = $('.works').offset().top,
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
		if($(window).scrollTop() > _viewHei) {
			$header.addClass('show');
		} else {
			$header.removeClass('show');
		}
	});
});