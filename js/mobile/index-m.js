$(function(){
	var $btn_menu  = $('.btn-menu'),
		$btn_theme = $('.btn-theme'),
		$filter    = $('.filter'),
		$subWrap   = $('.subWrap'),
		$logo      = $('.logo'),
		$midWrap   = $('.midWrap'),
		$screen    = $('.screen'),
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
		$subWrap.toggleClass('trigger');
		$screen.toggleClass('scale');
		$filter.toggleClass('show');
	});

	// 切換主題
	$btn_theme.on('click', function(){
		$midWrap.attr('class', 'midWrap ' + $(this).data('menu'));
		$subWrap.attr('class', 'subWrap');
		$('.menu .list').removeClass('curr');
		$(this).parent().addClass('curr');
		$('body').scrollTop(0);
		$screen.removeClass('scale');
		$filter.removeClass('show');
	});

	// 點擊背景關閉選單
	$filter.on('click', function(){
		$subWrap.attr('class', 'subWrap');
		$screen.removeClass('scale');
		$filter.removeClass('show');
	});

	// 切換至PC版
	$(window).resize(function(){
		if ($(window).width() > 860) {
			window.location.href = _url + 'index.html';
		}
	});

	function appendItem(){
		var _data = Datas.Data['front_end'],
			_Str  = [];

		for (var i = 0; i < _data.length; i++) {
			_Str.push('<li class="list">');
			_Str.push('	<img src="https://cdn.rawgit.com/brian224/portfolio/master/img/mobile/' + _data[i].CoverImg + '" alt="' + _data[i].CaseName + '">');
			_Str.push('	<em class="case-name">' + _data[i].CaseName + '</em>');
			_Str.push('	<span class="load-Wrap"><em class="text">- loading -</em></span>');
			_Str.push('</li>');
		}

		$works.html(_Str.join(''));

		$('img', $works).one('load', function() {
			$('.load-Wrap', $(this).parents('.list')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});
	}
});