$(function(){
	var $screen    = $('.screen'),
		$subWrap   = $('.subWrap'),
		$btn_menu  = $('.btn-menu'),
		$filter    = $('.filter'),
		$midWrap   = $screen.find('.midWrap'),
		$btn_theme = $subWrap.find('.btn-theme'),
		$arrow     = $midWrap.find('.arrow'),
		_cdnUrl    = 'https://cdn.rawgit.com/brian224/portfolio/master/',
		_url       = window.location.href.split('index')[0],
		_idx       = 0,
		_mainView  = ['<div class="mainWrap front-end">',
						'<div class="logo">',
							'<h1 class="logo-img"><img src="', _cdnUrl, 'img/mobile/signature.png" alt="Brian Lin signature"></h1>',
						'</div>',
						'<h2 class="title">DESIGN &amp; CREATIVE PORTFOLIO</h2>',
						'<ul class="works"></ul>',
					'</div>'],
		_aboutView = ['<div class="mainWrap about">',
						'<span class="head-shot"><img src="', _cdnUrl, 'img/mobile/head-shot.png" alt="Brian Lin`s photo"></span>',
						'<h2 class="name">Brian Lin</h2>',
						'<h3 class="sub-title">Experience</h3>',
						'<ul class="expConp">',
							'<li class="list"><span class="time">2013.04~NOW</span>永慶房產集團</li>',
							'<li class="list"><span class="time">2012.08~2013.03</span>安捷達顧問</li>',
							'<li class="list"><span class="time">2012.03~2012.07</span>學學文創志業</li>',
							'<li class="list"><span class="time">2009.12~2012.03</span>華藝數位</li>',
							'<li class="list"><span class="time">2009.03~2009.07</span>玉馬門創意設計</li>',
							'<li class="list"><span class="time">2008.05~2009.01</span>詩米亞媒體</li>',
						'</ul>',
						'<h3 class="sub-title">Autobiography</h3>',
						'<div class="brief">',
							'<p class="bio">從空間設計、平面設計到網頁設計，然後再鑽研介面設計與前端技術；從業務、專案負責人、設計再到開發者。</p>',
							'<p class="bio">七年的職涯裡，我嘗試在各領域提升自己、尋找喜好與定位，並一步步調整工作的方向與發展目標。</p>',
							'<p class="bio">2012年，透過進修、接案與求職，得到不少同行朋友的分享與前輩的指導下，不僅在網頁程式的專業能力有大幅成長，也在職涯方向獲得許多建議，因而確認出我的職涯新目標--前端工程師。</p>',
						'</div>',
					'</div>',],
		_skillView = ['<div class="mainWrap skills">',
						'<h3 class="sub-title">Specialty &amp; Skill</h3>',
						'<ul class="skill-list">',
							'<li class="category">程式撰寫</li>',
							'<li class="list">Html</li>',
							'<li class="list">CSS</li>',
							'<li class="list">JavaScript</li>',
							'<li class="list">jQuery</li>',
							'<li class="list">AngularJS</li>',
							'<li class="list">JSON</li>',
							'<li class="list">AJAX</li>',
							'<li class="list">SCSS</li>',
							'<li class="list">SVG</li>',
							'<li class="category">網頁技術應用</li>',
							'<li class="list">Git / SVN</li>',
							'<li class="list">Compass</li>',
							'<li class="list">Facebook API</li>',
							'<li class="list">Google Map API</li>',
							'<li class="list">HighCharts</li>',
							'<li class="list">Lazy-load</li>',
							'<li class="list">User Experience</li>',
							'<li class="list">User Interface</li>',
							'<li class="list">Bootstrap</li>',
							'<li class="list">Google Analytics</li>',
							'<li class="list">CSS sprites</li>',
							'<li class="list">Web fonts</li>',
							'<li class="category">開發軟體</li>',
							'<li class="list">SublimeText</li>',
							'<li class="list">SourceTree / TortoiseSVN</li>',
							'<li class="list">Chrome Developer Tools</li>',
							'<li class="list">Photoshop</li>',
							'<li class="list">Apache</li>',
							'<li class="list">Illustrator</li>',
							'<li class="category">實際應用經驗</li>',
							'<li class="list">網頁設計(單頁式網頁 / 無障礙網頁 / 手機網頁 / 自適應網頁)</li>',
							'<li class="list">網站優化(檔案合併 / 文檔最小化 / CDN)</li>',
							'<li class="list">搜尋引擎最佳化 SEO</li>',
							'<li class="list">跨瀏覽器製作</li>',
							'<li class="list">行動裝置 Apps 協助開發</li>',
						'</ul>',
					'</div>'];

	// 切換至PC版
	if ($(window).width() > 860) {
		window.location.replace(_url + 'index.html');
	} else {
		appendItem();
	}

	// 開關選單
	$btn_menu.on('click', function(){
		$subWrap.toggleClass('trigger');
		$btn_menu.toggleClass('no-bg');
		$screen.toggleClass('scale');
		$filter.toggleClass('show');
	});

	// 切換主題
	$btn_theme.on('click', function(){
		var _theme = $(this).data('menu');

		$midWrap.attr('class', 'midWrap ' + _theme);
		$('.mainWrap').remove();
		$subWrap.attr('class', 'subWrap');
		$arrow.removeAttr('style');
		$('.menu .list').removeClass('curr');
		$(this).parent().addClass('curr');
		$screen.removeClass('scale');
		$filter.removeClass('show');
		$btn_menu.removeClass('no-bg');

		$screen.delay(10).queue(function(){
			if (_theme === 'front-end') {
				$midWrap.prepend(_mainView.join(''));
				appendItem();
			} else if (_theme === 'about') {
				$midWrap.prepend(_aboutView.join(''));
			} else if (_theme === 'skills') {
				$midWrap.prepend(_skillView.join(''));
			}
			$(this).dequeue();
		});
	});

	// 點擊背景關閉選單
	$filter.on('click', function(){
		$subWrap.attr('class', 'subWrap');
		$screen.removeClass('scale');
		$filter.removeClass('show');
		$btn_menu.removeClass('no-bg');
	});

	// 觀看作品詳細資料
	$midWrap.on('click', '.works .list', function(){
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
			_Str.push('	<img src="' + _cdnUrl + 'img/mobile/works/' + _data[i].CoverImg + '" alt="' + _data[i].CaseName + '">');
			_Str.push('	<em class="case-name">' + _data[i].CaseName + '</em>');
			_Str.push('	<span class="load-Wrap"><em class="text">- loading -</em></span>');
			_Str.push('</li>');
		}

		$('.works').html(_Str.join(''));

		$('img', $('.works')).one('load', function() {
			$('.load-Wrap', $(this).parents('.list')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});
	}

	// 作品詳細內容
	function detailView(_id, _index){
		var _data = Datas.Data['front_end'],
			_Str  = [];

		// 由上下頁點擊切換
		if (_id === 0) {
			_Str.push('<span class="img_bg"><img src="' + _cdnUrl + 'img/mobile/detail/work' + _data[_index].CaseID + '_bg.png" alt="' + _data[_index].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></span>');
			_Str.push('<div class="project-info">');
			_Str.push('	<h2 class="project-name">' + _data[_index].CaseName + '</h2>');
			_Str.push('	<span class="info-desc">專案時間：<em class="time">' + _data[_index].Time + '</em></span>');
			_Str.push('	<span class="info-desc">特色說明：<em class="tech">' + _data[_index].SpecialTech + '</em></span>');
			
			if (_data[_index].webLink !== '') {
				_Str.push('	<span class="info-desc url">網址：<a class="link" href="' + _data[_index].webLink + '" target="_blank">' + _data[_index].webLink.split('://')[1] + '</a></span>');
			} else {
				_Str.push('	<span class="info-desc url">網址：專案尚未上線，不便公開</span>');
			}

			_Str.push('	<ul class="photo-list">');

			for (var j = 0; j < parseInt(_data[_index].PhotoCount, 10); j++) {
				_Str.push('		<li class="list"><img src="' + _cdnUrl + 'img/mobile/detail/work' + _data[_index].CaseID + '_0' + (j + 1) + '.png" alt="' + _data[_index].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></li>');
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
		// 由首頁進入
		} else {
			for (var i = 0; i < _data.length; i++) {
				if (_data[i].CaseID === _id.toString()) {
					_Str.push('<span class="img_bg"><img src="' + _cdnUrl + 'img/mobile/detail/work' + _data[i].CaseID + '_bg.png" alt="' + _data[i].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></span>');
					_Str.push('<div class="project-info">');
					_Str.push('	<h2 class="project-name">' + _data[i].CaseName + '</h2>');
					_Str.push('	<span class="info-desc">專案時間：<em class="time">' + _data[i].Time + '</em></span>');
					_Str.push('	<span class="info-desc">特色說明：<em class="tech">' + _data[i].SpecialTech + '</em></span>');

					if (_data[i].webLink !== '') {
						_Str.push('	<span class="info-desc url">網址：<a class="link" href="' + _data[i].webLink + '" target="_blank">' + _data[i].webLink.split('://')[1] + '</a></span>');
					} else {
						_Str.push('	<span class="info-desc url">網址：此專案尚未上線，不便公開</span>');
					}

					_Str.push('	<ul class="photo-list">');

					for (var j = 0; j < parseInt(_data[i].PhotoCount, 10); j++) {
						_Str.push('		<li class="list"><img src="' + _cdnUrl + 'img/mobile/detail/work' + _data[i].CaseID + '_0' + (j + 1) + '.png" alt="' + _data[i].CaseName + '"><span class="load-Wrap"><em class="text">- loading -</em></span></li>');
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

		$('.mainWrap').remove();
		$screen.delay(10).queue(function(){
			$midWrap.prepend('<div class="mainWrap detail">' + _Str.join('') + '</div>');

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
			$(this).dequeue();
		});
	}
});