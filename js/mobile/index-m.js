$(function(){
	var $screen    = $('.screen'),
		$subWrap   = $('.subWrap'),
		$btn_menu  = $('.btn-menu'),
		$filter    = $('.filter'),
		$midWrap   = $screen.find('.midWrap'),
		$btn_theme = $subWrap.find('.btn-theme'),
		$arrow     = $midWrap.find('.arrow'),
		$logo      = $midWrap.find('.logo'),
		$works     = $midWrap.find('.works'),
		$signature = $logo.find('.signature'),
		_cdnUrl    = 'https://cdn.rawgit.com/brian224/portfolio/master/',
		_url       = window.location.href.split('index')[0],
		_idx       = 0,
		_str       = [];

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
		$arrow.removeAttr('style');
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

		openDetail($(this).data('id'), 0);
	});

	// 上一頁下一頁
	$arrow.on('click', function(){
		if ($(this).hasClass('prev')) {
			_idx = _idx - 1;
		}
		if ($(this).hasClass('next')) {
			_idx = _idx + 1;
		}
		openDetail(0, _idx);
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
			_Str.push('	<img src="' + _cdnUrl + 'img/mobile/works/' + _data[i].CoverImg + '" alt="' + _data[i].CaseName + '">');
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
	function openDetail(_id, _index){
		var _data = Datas.Data['front_end'];

		// 由上下頁點擊切換
		if (_id === 0) {
			detailView(_data[_index]);

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
		// 由首頁進入
		} else {
			for (var i = 0; i < _data.length; i++) {
				if (_data[i].CaseID === _id.toString()) {
					detailView(_data[i]);
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

		$('.mainWrap.detail').html(_str.join(''));
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

	function detailView(data){
		var _url  = '',
			_list = '';

		if (data.webLink !== '') {
			_url = '<span class="info-desc url">網址：<a class="link" href="' + data.webLink + '" target="_blank">' + data.webLink.split('://')[1] + '</a></span>';
		} else {
			_url = '<span class="info-desc url">網址：專案尚未上線，不便公開</span>';
		}

		for (var j = 0; j < parseInt(data.PhotoCount, 10); j++) {
			_list += '<li class="list"><img src="' + _cdnUrl + 'img/mobile/detail/work' + data.CaseID + '_0' + (j + 1) + '.png" alt="' + data.CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></li>';
		}

		_str = [
				'<span class="img_bg"><img src="', _cdnUrl, 'img/mobile/detail/work', data.CaseID, '_bg.png" alt="', data.CaseName, '"><span class="load-Wrap"><em class="text">- loading -</em></span></span>',
				'<div class="project-info">',
					'<h2 class="project-name">', data.CaseName, '</h2>',
					'<span class="info-desc">專案時間：<em class="time">', data.Time, '</em></span>',
					'<span class="info-desc">特色說明：<em class="tech">', data.SpecialTech, '</em></span>',
					_url,
					'<ul class="photo-list">',
						_list,
					'</ul>',
				'</div>'
			];
	}
});