<<<<<<< HEAD
﻿$(window).load(function(){
	var $easterEgg = $('.easter-egg'),
		$showTime  = $('.showTime'),
		$footer    = $showTime.find('.footer'),
		$header    = $showTime.find('.header'),
		$midWrap   = $showTime.find('.midWrap'),
		$mainLink  = $header.find('.main_menu .link'),
		$mainWrap  = $midWrap.find('.mainWrap'),
		$arrow     = $mainWrap.find('.arrow'),
		$box       = $mainWrap.find('.box'),
		$photoImg  = $mainWrap.find('.photo > img'),
		$slideShow = $mainWrap.find('.slideShow'),
		$subLink   = $mainWrap.find('.submenu .link'),
		$tab       = $mainWrap.find('.tab'),
		_amount    = 14, // 一頁幾筆作品
		_Array     = [],
		_cdnUrl    = 'https://cdn.rawgit.com/brian224/portfolio/master/',
		_host      = '',
		_ls_loaded = '',
		_ls_return = '',
		_ls_theme  = '',
		_src       = $photoImg.attr('src'),
		_version   = '?v=' + new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString() + new Date().getDate().toString() + Math.floor((Math.random() * 10000).toString()),
		easter_egg = new Konami(function() {svgSign()}),
		is_firefox = navigator.userAgent.indexOf("Firefox") > -1,
		is_safari  = navigator.userAgent.indexOf("Safari") > -1,
		is_chrome  = navigator.userAgent.indexOf('Chrome') > -1;

	// 由本機開啟檔案
	if (window.location.href.split('http')[1] === undefined) {
		_host = 'http://brianlin224.theweb.tw/';
	}

	// 判斷是否為手機 / 平板
	if ( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && $(window).width() < 860 ) {
		window.location.replace(_host + 'index-m.html');
	} else {
		// IE 本地端無法使用 localStorage
		if (window.localStorage !== undefined) {
			_ls_loaded = window.localStorage.getItem('loadAnimate');
			_ls_return = window.localStorage.getItem('returnPage');
			_ls_theme  = window.localStorage.getItem('theme');
		} else {
			_ls_return = 'front_end';
			_ls_theme  = 'design';
		}

		// 是否已讀取過動畫
		if (_ls_loaded === 'loaded') {
			$header.addClass('show');
		} else {
			if (window.localStorage !== undefined) {
				window.localStorage.setItem('loadAnimate', 'loaded');
			}

			$('.header, .midWrap, .footer').hide();
			$header.css({'top' : '188px'});
			$('body').append('<div class="idx_anim"></div>');

			$('.idx_anim').delay(7561).fadeOut(1000);
			$header.delay(8561).fadeIn(1000).animate({
				top : 488
			}, 500);
			$midWrap.delay(10061).fadeIn(1000);
			$footer.delay(10061).fadeIn(1000);
		}
	}

	// 記錄最後主題
	if (_ls_theme === 'design' || _ls_theme === 'about' || _ls_theme === 'skill') {
		$('.mainWrap.' + _ls_theme).addClass('curr');
		$('.main_menu .list').find('.' + _ls_theme).addClass('curr');

		if (_ls_theme === 'about') {
			$photoImg.attr('src', _src + _version);
		}
	} else {
		$mainWrap.eq(0).addClass('curr');
		$('.main_menu .list').eq(0).find('.link').addClass('curr');
		if (window.localStorage !== undefined) {
			window.localStorage.setItem('theme', $('.main_menu .list').eq(0).find('.link').data('theme'));
		}
	}

	// 記錄最後的作品種類
	if (_ls_return === 'front_end' || _ls_return === 'web_design' || _ls_return === 'ad_design' || _ls_return === 'other_design') {
		$subLink.removeClass('curr');
		
		$('.submenu .link').each(function(){
			if ($(this).data('type') === _ls_return) {
				$(this).addClass('curr');
			}
		});
	} else {
		$subLink.eq(0).addClass('curr');
		if (window.localStorage !== undefined) {
			window.localStorage.setItem('returnPage', 'front_end');
		}
	}

	appendItem();
	console.log('    ██╗      ██╗      ██       ██      ██╗        ██╗    ██╗        ██╗  ██████╗  █████╗ \n  ██████╗  ██████╗    ██║      ██║    ██╔╝        ╚██╗  ██╔╝        ╚██╗ ██╔══██╗██╔══██╗\n ██╔██║██╗██╔██║██╗██╗██║██╗██╗██║██╗████████╗████████╗████████╗████████╗██████╔╝███████║\n ╚═╝██║╚═╝╚═╝██║╚═╝╚██████╔╝╚██████╔╝╚██╔════╝╚════██╔╝╚██╔════╝╚════██╔╝██╔══██╗██╔══██║\n    ██║      ██║     ╚██╔╝    ╚██╔╝   ╚██╗        ██╔╝  ╚██╗        ██╔╝ ██████╔╝██║  ██║\n    ╚═╝      ╚═╝      ╚═╝      ╚═╝     ╚═╝        ╚═╝    ╚═╝        ╚═╝  ╚═════╝ ╚═╝  ╚═╝');

	// 主題切換
	$mainLink.on('click', function(){
		if (!$(this).hasClass('.curr')) {
			var _theme = $(this).data('theme');

			$mainLink.removeClass('curr');
			$(this).addClass('curr');
			$('.mainWrap.' + _theme).addClass('curr').siblings().removeClass('curr');
			if (window.localStorage !== undefined) {
				window.localStorage.setItem('theme', _theme);
			}
		}
	});

	// 作品種類切換
	$subLink.on('click', function(){
		if (!$(this).hasClass('.curr')) {
			var _type = $(this).data('type'),
				_num;

			$(this).addClass('curr').parent('.list').siblings().find('.link').removeClass('curr');

			for (var i = 0; i < _Array.length; i++) {
				if (_Array[i].type === _type) {
					_num = i;
				}
			}

			if (_num !== undefined) {
				$slideShow.html(_Array[_num].str);

				$('.works').each(function(){
					$(this).find('.list_item').eq(_amount / 2).addClass('both');
				});
				$('.loading').hide();
				cycle();
			} else {
				appendItem();
			}

			if (window.localStorage !== undefined) {
				window.localStorage.setItem('returnPage', _type);
				window.localStorage.setItem('work_idx', 0);
			} else {
				_ls_return = _type;
			}
		}
	});

	// 進入詳目頁
	$midWrap.on('click', '.list_item', function(){
		if (!$(this).hasClass('empty')) {
			if (window.localStorage !== undefined) {
				_ls_return = window.localStorage.getItem('returnPage');
				window.localStorage.setItem('work_idx', $('.works:visible').index());
			}

			$mainWrap.removeClass('curr');
			$('.mainWrap.detail').addClass('curr');
			detailView($(this).data('id'));
		}
	});

	// 切換至M版
	$(window).on('resize', _.debounce(function(){
		if ($(window).width() < 860) {
			window.location.href = _host + 'index-m.html';
		}
	}, 100));

	// 作品的view
	function appendItem(){
		var _type  = $('.submenu .curr').data('type'),
			_count = Math.ceil(Datas.Data[_type].length / _amount),
			_Str   = [],
			_obj   = {};

		for (var i = 0 , k = 0 ; i < _count ; i ++ ) {
			_Str.push('<ul class="works">');

			for ( var j = 0 ; j < _amount ; j ++ , k ++ ) {
				if ( k >= 0 && k < Datas.Data[_type].length ) {
					_Str.push('<li class="list_item" data-id="' + Datas.Data[_type][k].CaseType + '_' + Datas.Data[_type][k].CaseID + '">');
					_Str.push('	<span class="pic middleSet">');
					_Str.push('		<img src="' + _cdnUrl + 'img/pc/' + Datas.Data[_type][k].CaseType + '/' + Datas.Data[_type][k].CoverImg + '" alt="' + Datas.Data[_type][k].CaseName + '">');
					_Str.push('		<div class="loading"></div>');
					_Str.push('	</span>');
					_Str.push('	<h3 class="name">' + Datas.Data[_type][k].CaseName + '</h3>');
					_Str.push('</li>');
				} else {
					_Str.push('<li class="list_item empty">');
					_Str.push('	<span class="cross"></span>');
					_Str.push('</li>');
				}
			}
			_Str.push('</ul>');
		}
		$slideShow.html(_Str.join(''));

		_obj.type = _type;
		_obj.str = _Str.join('');
		_Array.push(_obj);

		$('.works').each(function(){
			$(this).find('.list_item').eq(_amount / 2).addClass('both');
		});

		$('img', '.list_item').one('load', function() {
			$('.loading', $(this).parents('.pic')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});

		cycle();
	}

	// slideshow plugIn
	function cycle(){
		var _start = 0;

		if (window.localStorage !== undefined && window.localStorage.getItem('work_idx') !== 0 && window.localStorage.getItem('work_idx') !== null) {
			_start = window.localStorage.getItem('work_idx');
		}

		if ($slideShow.find('ul.works').length > 1) {
			$slideShow.cycle('destroy').cycle({
				after         : setIndex,
				fx            : 'scrollHorz',
				timeout       : 9999999,
				speed         : 500,
				startingSlide : _start,
				next          : '.arrow.right',
				prev          : '.arrow.left',
				pager         : null,
				pause         : 1
			});
			$arrow.show();
		} else {
			$arrow.hide();
		}
	}

	// 記錄左右鍵後前往的slideshow index
	function setIndex(curr, next, opts){
		window.localStorage.setItem('work_idx', opts.currSlide);
	}

	// 作品詳細內容
	function detailView(_id){
		var _tab  = ['<li class="back">BACK</li>'],
			_list = [];

		for (var i = 0; i < Datas.Data[_ls_return].length; i++) {
			if (Datas.Data[_ls_return][i].CaseType + '_' + Datas.Data[_ls_return][i].CaseID === _id) {
				for (var j = 1; j <= parseInt(Datas.Data[_ls_return][i].PhotoCount, 10); j++) {
					_tab.push('<li class="tag">' + j + '</li>');
					_list.push('<li class="list middleSet"><img src="' + _cdnUrl + 'img/pc/' + Datas.Data[_ls_return][i].CaseType + '/detail/' + Datas.Data[_ls_return][i].CaseType + Datas.Data[_ls_return][i].CaseID + '_0' + j + '.png?v=20150214" alt="' + Datas.Data[_ls_return][i].webDesc + '"><div class="loading"></div></li>');
				}

				if (Datas.Data[_ls_return][i].webLink !== '' && Datas.Data[_ls_return][i].webDesc !== '') {
					var _webLink = Datas.Data[_ls_return][i].webLink.split(','),
						_webDesc = Datas.Data[_ls_return][i].webDesc.split(',');

					for (var k = 0; k < _webLink.length; k++) {
						_list.push('<li class="link"><a class="webUrl" href="' + _webLink[k] + '" target="_blank">' + _webDesc[k] + '</a></li>');
					}
				} else if (Datas.Data[_ls_return][i].webLink === '' && Datas.Data[_ls_return][i].webDesc !== '') {
					_list.push('<li class="link"><span class="hint">' + Datas.Data[_ls_return][i].webDesc + '</span></li>');
				}
			}
		}
		$tab.html(_tab.join(''));
		$box.html(_list.join(''));

		$('.back').animate({
			top : '0'
		}, 200);

		$box.find('.list').eq(0).show();
		$box.find('.link').eq(0).show();

		$('.tag').each(function(){
			if ($(this).index() === 1) {
				$(this).delay(300).queue(function(){
					$(this).addClass('curr');
				});
			} else {
				$(this).delay(300).queue(function(){
					$(this).addClass('move');
				});
			}
		});

		$('img', '.list').one('load', function() {
			$('.loading', $(this).parents('.list')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});

		// 切換圖片
		$('.tag').on('click', function(){
			var _idx = $(this).index() - 1;

			$(this).addClass('curr').removeClass('move').siblings('.tag').addClass('move').removeClass('curr');

			$('.box .list').eq(_idx).show().siblings('.list').hide();

			if ($('.box .link').length !== 1) {
				if ($('.box .link').eq(_idx).length !== 0) {
					$('.box .link').eq(_idx).show().siblings('.link').hide();
				} else {
					$('.box .link').hide();
				}
			}
		});

		// 回上層
		$('.back').on('click', function(){
			$mainWrap.removeClass('curr');
			$('.mainWrap.design').addClass('curr');
		});
	}

	// 彩蛋
	function svgSign(){
		if (is_chrome || is_safari || is_firefox) {
			var _svg = [
				'<svg version="1.1" id="sign" class="signature flipInY animated" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">',
					'<circle class="bg" fill-rule="evenodd" clip-rule="evenodd" fill="#D7DF00" cx="499.114" cy="506.532" r="428"/>',
					'<path class="shadow" d="M609.171,920.141c228.43-60.783,364.334-295.235,303.551-523.666c-4.739-17.81-10.534-35.056-17.299-51.691l-110.444-64.021l-105.63-10.17L622.5,301.667l227.512,131.882l-29.338,82.746l-110.341-63.961l-27.857,35.086L653,470.333l-25.549,82.173L568.5,518.334l-29.676,6.117L467.75,483.25l-20.25,22l58.951,34.173l7.873,50.83L456.096,556.5l-12.81,36.372l-58.951-34.173l-4.26-2.748L309,514.75l-50.897,22.282L219,574.75l58.951,34.173l2.042,36.839L187.25,592l-15.428,68.001l6.527,73.706L523.72,933.908C552.064,932.247,580.665,927.726,609.171,920.141z"/>',
					'<path class="stroke path1" stroke-miterlimit="10" d="M225.729,562.327c51.821-90.645,146.218-4.415,40.206,25.843c95.042,107.606-166.627,239.427-86.395,16.343"/>',
					'<path class="stroke path2" stroke-miterlimit="10" d="M243.842,666.184c-1.709,18.932,58.815,49.183,125.682-94.479c-39.945,175.574,85.75,43.702,78.708-2.584c-15.712,61.443,18.275,76.753,36.978,59.764"/>',
					'<path class="stroke path3" stroke-miterlimit="10" d="M565.783,535.562c-18.794-21.976-45.723,2.336-52.928,26.619c-18.746,42.647,24.906,86.071,50.565-1.256c14.474,100.81,74.927-27.819,83.444-77.106c0,0,20.119,38.708,14.349,84.466c16.882-40.131,33.244-91.247,41.747-103.141c-6.232,59.945,22.318,102.383,58.276,92.591c178.888-74.979,64.619-361.071-131.688-269.124"/>',
					'<circle class="dot" cx="457" cy="493" r="16"/>',
				'</svg>'];

			$showTime.attr('class', 'showTime flipOutY animated');
			$easterEgg.finish().delay(1000).queue(function(){
				$easterEgg.append(_svg.join(''));
			});
			$('body').finish().delay(8000).queue(function(){
				$showTime.attr('class', 'showTime flipInY animated');
				$easterEgg.empty();
			});
		} else {
			alert('請使用 Chrome 或 Safari 或 Firefox 來操作');
		}
	}
=======
﻿$(window).load(function(){
	var $easterEgg = $('.easter-egg'),
		$showTime  = $('.showTime'),
		$footer    = $showTime.find('.footer'),
		$header    = $showTime.find('.header'),
		$midWrap   = $showTime.find('.midWrap'),
		$mainLink  = $header.find('.main_menu .link'),
		$mainWrap  = $midWrap.find('.mainWrap'),
		$arrow     = $mainWrap.find('.arrow'),
		$box       = $mainWrap.find('.box'),
		$photoImg  = $mainWrap.find('.photo > img'),
		$slideShow = $mainWrap.find('.slideShow'),
		$subLink   = $mainWrap.find('.submenu .link'),
		$tab       = $mainWrap.find('.tab'),
		_amount    = 14, // 一頁幾筆作品
		_Array     = [],
		_cdnUrl    = 'https://cdn.rawgit.com/brian224/portfolio/master/',
		_host      = '',
		_ls_loaded = '',
		_ls_return = '',
		_ls_theme  = '',
		_src       = $photoImg.attr('src'),
		_version   = '?v=' + new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString() + new Date().getDate().toString() + Math.floor((Math.random() * 10000).toString()),
		easter_egg = new Konami(function() {svgSign()}),
		is_firefox = navigator.userAgent.indexOf("Firefox") > -1,
		is_safari  = navigator.userAgent.indexOf("Safari") > -1,
		is_chrome  = navigator.userAgent.indexOf('Chrome') > -1;

	// 由本機開啟檔案
	if (window.location.href.split('http')[1] === undefined) {
		_host = 'http://brianlin224.theweb.tw/';
	}

	// 判斷是否為手機 / 平板
	if ( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && $(window).width() < 860 ) {
		window.location.replace(_host + 'index-m.html');
	} else {
		// IE 本地端無法使用 localStorage
		if (window.localStorage !== undefined) {
			_ls_loaded = window.localStorage.getItem('loadAnimate');
			_ls_return = window.localStorage.getItem('returnPage');
			_ls_theme  = window.localStorage.getItem('theme');
		} else {
			_ls_return = 'front_end';
			_ls_theme  = 'design';
		}

		// 是否已讀取過動畫
		if (_ls_loaded === 'loaded') {
			$header.addClass('show');
		} else {
			if (window.localStorage !== undefined) {
				window.localStorage.setItem('loadAnimate', 'loaded');
			}

			$('.header, .midWrap, .footer').hide();
			$header.css({'top' : '188px'});
			$('body').append('<div class="idx_anim"></div>');

			$('.idx_anim').delay(7561).fadeOut(1000);
			$header.delay(8561).fadeIn(1000).animate({
				top : 488
			}, 500);
			$midWrap.delay(10061).fadeIn(1000);
			$footer.delay(10061).fadeIn(1000);
		}
	}

	// 記錄最後主題
	if (_ls_theme === 'design' || _ls_theme === 'about' || _ls_theme === 'skill') {
		$('.mainWrap.' + _ls_theme).addClass('curr');
		$('.main_menu .list').find('.' + _ls_theme).addClass('curr');

		if (_ls_theme === 'about') {
			$photoImg.attr('src', _src + _version);
		}
	} else {
		$mainWrap.eq(0).addClass('curr');
		$('.main_menu .list').eq(0).find('.link').addClass('curr');
		if (window.localStorage !== undefined) {
			window.localStorage.setItem('theme', $('.main_menu .list').eq(0).find('.link').data('theme'));
		}
	}

	// 記錄最後的作品種類
	if (_ls_return === 'front_end' || _ls_return === 'web_design' || _ls_return === 'ad_design' || _ls_return === 'other_design') {
		$subLink.removeClass('curr');
		
		$('.submenu .link').each(function(){
			if ($(this).data('type') === _ls_return) {
				$(this).addClass('curr');
			}
		});
	} else {
		$subLink.eq(0).addClass('curr');
		if (window.localStorage !== undefined) {
			window.localStorage.setItem('returnPage', 'front_end');
		}
	}

	appendItem();
	console.log('    ██╗      ██╗      ██       ██      ██╗        ██╗    ██╗        ██╗  ██████╗  █████╗ \n  ██████╗  ██████╗    ██║      ██║    ██╔╝        ╚██╗  ██╔╝        ╚██╗ ██╔══██╗██╔══██╗\n ██╔██║██╗██╔██║██╗██╗██║██╗██╗██║██╗████████╗████████╗████████╗████████╗██████╔╝███████║\n ╚═╝██║╚═╝╚═╝██║╚═╝╚██████╔╝╚██████╔╝╚██╔════╝╚════██╔╝╚██╔════╝╚════██╔╝██╔══██╗██╔══██║\n    ██║      ██║     ╚██╔╝    ╚██╔╝   ╚██╗        ██╔╝  ╚██╗        ██╔╝ ██████╔╝██║  ██║\n    ╚═╝      ╚═╝      ╚═╝      ╚═╝     ╚═╝        ╚═╝    ╚═╝        ╚═╝  ╚═════╝ ╚═╝  ╚═╝');

	// 主題切換
	$mainLink.on('click', function(){
		if (!$(this).hasClass('.curr')) {
			var _theme = $(this).data('theme');

			$mainLink.removeClass('curr');
			$(this).addClass('curr');
			$('.mainWrap.' + _theme).addClass('curr').siblings().removeClass('curr');
			if (window.localStorage !== undefined) {
				window.localStorage.setItem('theme', _theme);
			}
		}
	});

	// 作品種類切換
	$subLink.on('click', function(){
		if (!$(this).hasClass('.curr')) {
			var _type = $(this).data('type'),
				_num;

			$(this).addClass('curr').parent('.list').siblings().find('.link').removeClass('curr');

			for (var i = 0; i < _Array.length; i++) {
				if (_Array[i].type === _type) {
					_num = i;
				}
			}

			if (_num !== undefined) {
				$slideShow.html(_Array[_num].str);

				$('.works').each(function(){
					$(this).find('.list_item').eq(_amount / 2).addClass('both');
				});
				$('.loading').hide();
				cycle();
			} else {
				appendItem();
			}

			if (window.localStorage !== undefined) {
				window.localStorage.setItem('returnPage', _type);
				window.localStorage.setItem('work_idx', 0);
			} else {
				_ls_return = _type;
			}
		}
	});

	// 進入詳目頁
	$midWrap.on('click', '.list_item', function(){
		if (!$(this).hasClass('empty')) {
			if (window.localStorage !== undefined) {
				_ls_return = window.localStorage.getItem('returnPage');
				window.localStorage.setItem('work_idx', $('.works:visible').index());
			}

			$mainWrap.removeClass('curr');
			$('.mainWrap.detail').addClass('curr');
			detailView($(this).data('id'));
		}
	});

	// 切換至M版
	$(window).on('resize', _.debounce(function(){
		if ($(window).width() < 860) {
			window.location.href = _host + 'index-m.html';
		}
	}, 100));

	// 作品的view
	function appendItem(){
		var _type  = $('.submenu .curr').data('type'),
			_count = Math.ceil(Datas.Data[_type].length / _amount),
			_Str   = [],
			_obj   = {};

		for (var i = 0 , k = 0 ; i < _count ; i ++ ) {
			_Str.push('<ul class="works">');

			for ( var j = 0 ; j < _amount ; j ++ , k ++ ) {
				if ( k >= 0 && k < Datas.Data[_type].length ) {
					_Str.push('<li class="list_item" data-id="' + Datas.Data[_type][k].CaseType + '_' + Datas.Data[_type][k].CaseID + '">');
					_Str.push('	<span class="pic middleSet">');
					_Str.push('		<img src="' + _cdnUrl + 'img/pc/' + Datas.Data[_type][k].CaseType + '/' + Datas.Data[_type][k].CoverImg + '" alt="' + Datas.Data[_type][k].CaseName + '">');
					_Str.push('		<div class="loading"></div>');
					_Str.push('	</span>');
					_Str.push('	<h3 class="name">' + Datas.Data[_type][k].CaseName + '</h3>');
					_Str.push('</li>');
				} else {
					_Str.push('<li class="list_item empty">');
					_Str.push('	<span class="cross"></span>');
					_Str.push('</li>');
				}
			}
			_Str.push('</ul>');
		}
		$slideShow.html(_Str.join(''));

		_obj.type = _type;
		_obj.str = _Str.join('');
		_Array.push(_obj);

		$('.works').each(function(){
			$(this).find('.list_item').eq(_amount / 2).addClass('both');
		});

		$('img', '.list_item').one('load', function() {
			$('.loading', $(this).parents('.pic')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});

		cycle();
	}

	// slideshow plugIn
	function cycle(){
		var _start = 0;

		if (window.localStorage !== undefined && window.localStorage.getItem('work_idx') !== 0 && window.localStorage.getItem('work_idx') !== null) {
			_start = window.localStorage.getItem('work_idx');
		}

		if ($slideShow.find('ul.works').length > 1) {
			$slideShow.cycle('destroy').cycle({
				after         : setIndex,
				fx            : 'scrollHorz',
				timeout       : 9999999,
				speed         : 500,
				startingSlide : _start,
				next          : '.arrow.right',
				prev          : '.arrow.left',
				pager         : null,
				pause         : 1
			});
			$arrow.show();
		} else {
			$arrow.hide();
		}
	}

	// 記錄左右鍵後前往的slideshow index
	function setIndex(curr, next, opts){
		window.localStorage.setItem('work_idx', opts.currSlide);
	}

	// 作品詳細內容
	function detailView(_id){
		var _tab  = ['<li class="back">BACK</li>'],
			_list = [];

		for (var i = 0; i < Datas.Data[_ls_return].length; i++) {
			if (Datas.Data[_ls_return][i].CaseType + '_' + Datas.Data[_ls_return][i].CaseID === _id) {
				for (var j = 1; j <= parseInt(Datas.Data[_ls_return][i].PhotoCount, 10); j++) {
					_tab.push('<li class="tag">' + j + '</li>');
					_list.push('<li class="list middleSet"><img src="' + _cdnUrl + 'img/pc/' + Datas.Data[_ls_return][i].CaseType + '/detail/' + Datas.Data[_ls_return][i].CaseType + Datas.Data[_ls_return][i].CaseID + '_0' + j + '.png?v=20150214" alt="' + Datas.Data[_ls_return][i].webDesc + '"><div class="loading"></div></li>');
				}

				if (Datas.Data[_ls_return][i].webLink !== '' && Datas.Data[_ls_return][i].webDesc !== '') {
					var _webLink = Datas.Data[_ls_return][i].webLink.split(','),
						_webDesc = Datas.Data[_ls_return][i].webDesc.split(',');

					for (var k = 0; k < _webLink.length; k++) {
						_list.push('<li class="link"><a class="webUrl" href="' + _webLink[k] + '" target="_blank">' + _webDesc[k] + '</a></li>');
					}
				} else if (Datas.Data[_ls_return][i].webLink === '' && Datas.Data[_ls_return][i].webDesc !== '') {
					_list.push('<li class="link"><span class="hint">' + Datas.Data[_ls_return][i].webDesc + '</span></li>');
				}
			}
		}
		$tab.html(_tab.join(''));
		$box.html(_list.join(''));

		$('.back').animate({
			top : '0'
		}, 200);

		$box.find('.list').eq(0).show();
		$box.find('.link').eq(0).show();

		$('.tag').each(function(){
			if ($(this).index() === 1) {
				$(this).delay(300).queue(function(){
					$(this).addClass('curr');
				});
			} else {
				$(this).delay(300).queue(function(){
					$(this).addClass('move');
				});
			}
		});

		$('img', '.list').one('load', function() {
			$('.loading', $(this).parents('.list')).hide();
		}).each(function() {
			if(this.complete) $(this).load();
		});

		// 切換圖片
		$('.tag').on('click', function(){
			var _idx = $(this).index() - 1;

			$(this).addClass('curr').removeClass('move').siblings('.tag').addClass('move').removeClass('curr');

			$('.box .list').eq(_idx).show().siblings('.list').hide();

			if ($('.box .link').length !== 1) {
				if ($('.box .link').eq(_idx).length !== 0) {
					$('.box .link').eq(_idx).show().siblings('.link').hide();
				} else {
					$('.box .link').hide();
				}
			}
		});

		// 回上層
		$('.back').on('click', function(){
			$mainWrap.removeClass('curr');
			$('.mainWrap.design').addClass('curr');
		});
	}

	// 彩蛋
	function svgSign(){
		if (is_chrome || is_safari || is_firefox) {
			var _svg = [
				'<svg version="1.1" id="sign" class="signature flipInY animated" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">',
					'<circle class="bg" fill-rule="evenodd" clip-rule="evenodd" fill="#D7DF00" cx="499.114" cy="506.532" r="428"/>',
					'<path class="shadow" d="M609.171,920.141c228.43-60.783,364.334-295.235,303.551-523.666c-4.739-17.81-10.534-35.056-17.299-51.691l-110.444-64.021l-105.63-10.17L622.5,301.667l227.512,131.882l-29.338,82.746l-110.341-63.961l-27.857,35.086L653,470.333l-25.549,82.173L568.5,518.334l-29.676,6.117L467.75,483.25l-20.25,22l58.951,34.173l7.873,50.83L456.096,556.5l-12.81,36.372l-58.951-34.173l-4.26-2.748L309,514.75l-50.897,22.282L219,574.75l58.951,34.173l2.042,36.839L187.25,592l-15.428,68.001l6.527,73.706L523.72,933.908C552.064,932.247,580.665,927.726,609.171,920.141z"/>',
					'<path class="stroke path1" stroke-miterlimit="10" d="M225.729,562.327c51.821-90.645,146.218-4.415,40.206,25.843c95.042,107.606-166.627,239.427-86.395,16.343"/>',
					'<path class="stroke path2" stroke-miterlimit="10" d="M243.842,666.184c-1.709,18.932,58.815,49.183,125.682-94.479c-39.945,175.574,85.75,43.702,78.708-2.584c-15.712,61.443,18.275,76.753,36.978,59.764"/>',
					'<path class="stroke path3" stroke-miterlimit="10" d="M565.783,535.562c-18.794-21.976-45.723,2.336-52.928,26.619c-18.746,42.647,24.906,86.071,50.565-1.256c14.474,100.81,74.927-27.819,83.444-77.106c0,0,20.119,38.708,14.349,84.466c16.882-40.131,33.244-91.247,41.747-103.141c-6.232,59.945,22.318,102.383,58.276,92.591c178.888-74.979,64.619-361.071-131.688-269.124"/>',
					'<circle class="dot" cx="457" cy="493" r="16"/>',
				'</svg>'];

			$showTime.attr('class', 'showTime flipOutY animated');
			$easterEgg.finish().delay(1000).queue(function(){
				$easterEgg.append(_svg.join(''));
			});
			$('body').finish().delay(8000).queue(function(){
				$showTime.attr('class', 'showTime flipInY animated');
				$easterEgg.empty();
			});
		} else {
			alert('請使用 Chrome 或 Safari 或 Firefox 來操作');
		}
	}
>>>>>>> master
});