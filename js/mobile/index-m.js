$(function(){
	var $arrow     = $('.arrow'),
		$btn_menu  = $('.btn-menu'),
		$btn_theme = $('.btn-theme'),
		$filter    = $('.filter'),
		$subWrap   = $('.subWrap'),
		$logo      = $('.logo'),
		$midWrap   = $('.midWrap'),
		$screen    = $('.screen'),
		$signature = $('.signature'),
		$works     = $('.works'),
		_url       = window.location.href.split('index')[0],
		_idx       = 0;

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
		$btn_menu.toggleClass('no-bg');
		$screen.toggleClass('scale');
		$filter.toggleClass('show');
	});

	// 切換主題
	$btn_theme.on('click', function(){
		$midWrap.attr('class', 'midWrap ' + $(this).data('menu'));
		$subWrap.attr('class', 'subWrap');
		$('.menu .list').removeClass('curr');
		$(this).parent().addClass('curr');
		$screen.removeClass('scale');
		$filter.removeClass('show');
		$btn_menu.removeClass('no-bg');
		$('body').scrollTop(0);
	});

	// 點擊背景關閉選單
	$filter.on('click', function(){
		$subWrap.attr('class', 'subWrap');
		$screen.removeClass('scale');
		$filter.removeClass('show');
		$btn_menu.removeClass('no-bg');
	});

	// 觀看作品詳細資料
	$('.works .list').on('click', function(){
		$midWrap.attr('class', 'midWrap detail');
		$('.menu .list').removeClass('curr');

		detailView($(this).data('id'), 0);
	});

	// 上一頁下一頁
	$arrow.on('click', function(){
		if ($(this).hasClass('prev')) {
			_idx = _idx - 1;
		}

		if ($(this).hasClass('next')) {
			_idx = _idx + 1;
		}

		detailView(0, _idx);
	});

	// 切換至PC版
	$(window).resize(function(){
		if ($(window).width() > 860) {
			window.location.href = _url + 'index.html';
		}
	});

	// 組成作品集列表
	function appendItem(){
		var _data = Datas.Data['front_end'],
			_Str  = [];

		for (var i = 0; i < _data.length; i++) {
			_Str.push('<li class="list" data-id="' + _data[i].CaseID + '">');
			_Str.push('	<img src="img/mobile/works/' + _data[i].CoverImg + '" alt="' + _data[i].CaseName + '">');
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

	// 作品詳細內容
	function detailView(_id, _index){
		var _data = Datas.Data['front_end'],
			_Str  = [];

		if (_id === 0) {
			_Str.push('<span class="img_bg"><img src="img/mobile/detail/work' + _data[_index].CaseID + '_bg.png" alt="' + _data[_index].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></span>');
			_Str.push('<div class="project-info">');
			_Str.push('	<h2 class="project-name">' + _data[_index].CaseName + '</h2>');
			_Str.push('	<span class="info-desc">專案時間：<em class="time">' + _data[_index].Time + '</em></span>');
			_Str.push('	<span class="info-desc">特色說明：<em class="tech">' + _data[_index].SpecialTech + '</em></span>');
			
			if (_data[_index].webLink != '') {
				_Str.push('	<span class="info-desc url">網址：<a class="link" href="' + _data[_index].webLink + '" target="_blank">' + _data[_index].webLink.split('://')[1] + '</a></span>');
			} else {
				_Str.push('	<span class="info-desc url">網址：專案尚未上線，不便公開</span>');
			}

			_Str.push('	<ul class="photo-list">');

			for (var j = 0; j < parseInt(_data[_index].PhotoCount, 10); j++) {
				_Str.push('		<li class="list"><img src="img/mobile/detail/work' + _data[_index].CaseID + '_0' + (j + 1) + '.png" alt="' + _data[_index].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></li>');
			}

			_Str.push('	</ul>');
			_Str.push('</div>');

			if (_index === 0) {
				$('.arrow.prev').hide();
			} else {
				$('.arrow.prev').show();
			}
			if (_index === _data.length - 1) {
				$('.arrow.next').hide();
			} else {
				$('.arrow.next').show();
			}
		} else {
			for (var i = 0; i < _data.length; i++) {
				if (_data[i].CaseID == _id) {
					_Str.push('<span class="img_bg"><img src="img/mobile/detail/work' + _data[i].CaseID + '_bg.png" alt="' + _data[i].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></span>');
					_Str.push('<div class="project-info">');
					_Str.push('	<h2 class="project-name">' + _data[i].CaseName + '</h2>');
					_Str.push('	<span class="info-desc">專案時間：<em class="time">' + _data[i].Time + '</em></span>');
					_Str.push('	<span class="info-desc">特色說明：<em class="tech">' + _data[i].SpecialTech + '</em></span>');

					if (_data[i].webLink != '') {
						_Str.push('	<span class="info-desc url">網址：<a class="link" href="' + _data[i].webLink + '" target="_blank">' + _data[i].webLink.split('://')[1] + '</a></span>');
					} else {
						_Str.push('	<span class="info-desc url">網址：專案尚未上線，不便公開</span>');
					}

					_Str.push('	<ul class="photo-list">');

					for (var j = 0; j < parseInt(_data[i].PhotoCount, 10); j++) {
						_Str.push('		<li class="list"><img src="img/mobile/detail/work' + _data[i].CaseID + '_0' + (j + 1) + '.png" alt="' + _data[i].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></li>');
					}

					_Str.push('	</ul>');
					_Str.push('</div>');
					_idx = i;

					if (i === 0) {
						$('.arrow.prev').hide();
					} else {
						$('.arrow.prev').show();
					}
					if (i === _data.length - 1) {
						$('.arrow.next').hide();
					} else {
						$('.arrow.next').show();
					}
				}
			}
		}
		$('.mainWrap.detail').html(_Str.join(''));
		$('body').scrollTop(0);

		$('img', '.photo-list').one('load', function() {
			$('.load-Wrap', $(this).parents('.photo-list')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});

		$('img', '.img_bg').one('load', function() {
			$('.load-Wrap', $(this).parents('.img_bg')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});
	}
});