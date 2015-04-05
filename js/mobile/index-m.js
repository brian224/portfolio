$(function(){
	var $btn_menu  = $('.btn-menu'),
		$btn_theme = $('.btn-theme'),
		$header    = $('.header'),
		$logo      = $('.logo'),
		$midWrap   = $('.midWrap'),
		$signature = $('.signature'),
		$works     = $('.works'),
		_url       = window.location.href.split('index')[0];

	// 切換至PC版
	if ($(window).width() > 860) {
		window.location.replace(_url + 'index.html');
	} else {
		appendItem();
	}

	// 移除SVG（思考是否有存在必要）
	$midWrap.delay(5000).queue(function(){
		$signature.remove();
	});

	// 開關選單
	$btn_menu.on('click', function(){
		$header.toggleClass('trigger');
	});

	// 切換主題
	$btn_theme.on('click', function(){
		$midWrap.attr('class', 'midWrap ' + $(this).data('menu'));
		$header.attr('class', 'header');
		$btn_theme.removeClass('curr');
		$(this).addClass('curr');
		$('body').scrollTop(0);
	});

	// 切換至PC版
	$(window).resize(function(){
		if ($(window).width() > 860) {
			window.location.href = _url + 'index.html';
		}
	});

	// 切換menu顏色
	$(window).scroll(function(){
		if($(window).scrollTop() > $('.works').offset().top && $midWrap.hasClass('index')) {
			$header.addClass('show');
		} else if ($(window).scrollTop() > $('.name').offset().top && $midWrap.hasClass('about')) {
			$header.addClass('blue');
		} else {
			$header.removeClass('show blue');
		}
	});

	function appendItem(){
		var _data = Datas.Data['front_end'],
			_Str  = [];

		for (var i = 0; i < _data.length; i++) {
			_Str.push('<li class="list">');
			_Str.push('	<img src="img/mobile/' + _data[i].CoverImg + '" alt="' + _data[i].CaseName + '">');
			_Str.push('	<em class="case-name">' + _data[i].CaseName + '</em>');
			_Str.push('</li>');
		}

		$works.html(_Str.join(''));
	}
});