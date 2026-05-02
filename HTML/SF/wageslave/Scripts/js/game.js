(function (window, document, jQuery, undefined) {
	'use strict';

	var game = new page();
	var ctrack = new clm.tracker();

	function page() {
		this._counter;
		this._counterNext;
		this._Lbd        = '.l-bd';
		this._owl        = '.jQ-owl';
		this._hunt       = '.jQ-hunt';
		this._boxBtn     = '.jQ-box-btn';
		this._cvs        = '.jQ-conversation';
		this._player     = '.jQ-player';
		this._opp        = '.jQ-opponent';
		this._reciprocal = '.jQ-reciprocal';
		this._minX       = 0;
		this._minY       = 0;
		this._maxX       = 0;
		this._maxY       = 0;
		this._minX2      = 0;
		this._maxX2      = 0;
		this._dTime      = false;
		this._wordArr    = {
			'boss': {
				'level1': '哈哈哈！加班吧你！',
				'level2': '我可以偷懶，你不行！',
				'level3': '年輕人就是要懂的吃苦～',
				'level4': '大家一起忍辱負重！&共體時艱！'
			},
			'client': {
				'level1': '明天早上九點要收到改過的版本&呵呵呵',
				'level2': '最喜歡在完稿的時候大改了💛',
				'level3': '這個 project 的 schedule 有問題&但 problem 絕對是在 you',
				'level4': '再提個兩版給我謝謝囉^^'
			},
			'colleague': {
				'level1': 'UCCU～',
				'level2': '那這些案子就麻煩你囉&呵呵呵！',
				'level3': '辛苦惹^___^',
				'level4': 'ㄌㄩㄝ～'
			}
		}
	};

	// 沒有互動的偵測
	page.prototype.reactDetect = function() {
		var _laughing = game._wordArr[$(game._Lbd).attr('data-target')][$(game._Lbd).attr('data-level')],
			_txtIdx   = 1;

		$(game._Lbd).attr({
			'data-laugh'  : 'true',
			'data-dialog' : 'true',
			'data-hurt'   : 'true',
			'data-part'   : 1,
			'data-result' : 'lose'
		});

		if ($(game._Lbd).attr('data-level') === 'level1') {
			$(game._Lbd).attr({
				'data-zoom' : 'out'
			});
		}

		$(game._player).attr('data-blood', parseInt($(game._player).attr('data-blood'), 10) + 1);

		function typingLoop() {
			setTimeout(function() {
				$(game._cvs).html(_laughing.slice(0, _txtIdx).replace('&', '<br>'));

				if (_laughing.length > _txtIdx) {
					typingLoop();
				} else {
					game.nextStep();
					game._dTime = false;
				}
				_txtIdx += 1;
			}, 80);
		}

		game.detectHurt();
		typingLoop();
		// ctrack.stop();
	}

	// 計算輸贏
	page.prototype.calcRs = function() {
		game._counter = setTimeout(function() {
			// ctrack.stop();
			game._dTime = false;

			if ($(game._Lbd).attr('data-level') === 'level1') {
				// 點頭搖頭
				if (game._maxX - game._minX > game._maxY - game._minY) {
					game.winReact(1);
				} else {
					game.reactDetect();
				}
			} else if ($(game._Lbd).attr('data-level') === 'level2') {
				// 翻白眼
				if (game._maxY - game._minY > 35) {
					game.winReact(4);
				} else if (game._maxY - game._minY > 25) {
					game.winReact(3);
				} else if (game._maxY - game._minY > 15) {
					game.winReact(2);
				} else if (game._maxY - game._minY > 10) {
					game.winReact(1);
				} else {
					game.reactDetect();
				}
				// console.log(game._maxY - game._minY);
			} else if ($(game._Lbd).attr('data-level') === 'level3') {
				// 開口
				if (game._maxY - game._minY > 60) {
					game.winReact(4);
				} else if (game._maxY - game._minY > 40) {
					game.winReact(3);
				} else if (game._maxY - game._minY > 20) {
					game.winReact(2);
				} else if (game._maxY - game._minY > 5) {
					game.winReact(1);
				} else {
					game.reactDetect();
				}
				// console.log(game._maxY - game._minY);
			} else if ($(game._Lbd).attr('data-level') === 'level4') {
				// 笑
				if (game._maxX2 - game._minX > game._minX2 - game._maxX) {
					if (game._maxY - game._minY > 60) {
						game.winReact(4);
					} else if (game._maxY - game._minY > 40) {
						game.winReact(3);
					} else if (game._maxY - game._minY > 20) {
						game.winReact(2);
					} else {
						game.winReact(1);
					}
				} else {
					game.reactDetect();
				}
				// alert(game._maxY - game._minY);
			}
			clearTimeout(game._counter);
		}, 3000);
	}

	// 贏了之後做啥
	page.prototype.winReact = function(rate) {
		$(game._Lbd).attr({
			'data-result' : 'win',
			'data-part'   : rate,
			'data-injury' : (parseInt($(game._Lbd).attr('data-injury'), 10) + rate) >= 5 ? 5 : parseInt($(game._Lbd).attr('data-injury'), 10) + rate
		});

		if ($(game._Lbd).attr('data-level') === 'level1') {
			$(game._Lbd).attr({
				'data-zoom' : 'in'
			});
		}

		$(game._opp).attr('data-blood', parseInt($(game._opp).attr('data-blood'), 10) + rate);
		game.nextStep();

		if (rate == 2 && ($(game._Lbd).attr('data-level') !== 'level3' && $(game._Lbd).attr('data-target') !== 'colleague') && ($(game._Lbd).attr('data-level') !== 'level4' && $(game._Lbd).attr('data-target') !== 'colleague')) {
			$('.prey-wrap').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
				$('.prey-wrap').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend')
				$(game._Lbd).attr('data-result', '').delay(10).queue(function(){
					$(this).attr('data-result', 'win').dequeue();
				});
			});
		}
	}

	// 等待進行下一關
	page.prototype.nextStep = function() {
		var _lv  = parseInt($(game._Lbd).attr('data-level').split('level')[1], 10) + 1,
			_opp = $(game._Lbd).attr('data-target'),
			_res = $(game._Lbd).attr('data-result');

		game._counterNext = setTimeout(function() {
			if (_lv < 5) {
				$(game._Lbd).attr({
					'data-box'    : 'show',
					'data-laugh'  : '',
					'data-dialog' : '',
					'data-result' : '',
					'data-zoom'   : '',
					'data-level'  : 'level' + _lv
				});
				$('.player-area').css('transition', 'all linear 1s');

				game._minX = 0;
				game._minY = 0;
				game._maxX = 0;
				game._maxY = 0;
				$(game._cvs).html('');
			} else {
				game.callApi();
			}

			clearTimeout(game._counterNext);
		}, (_opp === 'client' && _res === 'lose') ? 7000 : 5000);
	}

	// 偵測反饋
	page.prototype.detectHurt = function() {
		$(game._Lbd +'[data-hurt="true"] .player-run > *').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			$(game._Lbd).attr({
				'data-hurt' : ''
			});
		});
	}

	// 倒數
	page.prototype.reciprocal = function() {
		setTimeout(function(){
			if ($(game._reciprocal).text() === 'GO!') {
				$(game._Lbd).attr({
					'data-box': '',
					'data-countdown': ''
				});
				$(game._reciprocal).text('');
				game.calcRs();
				game._dTime = true;
			} else if ($(game._reciprocal).text() === '') {
				$(game._reciprocal).text('3').addClass('count-down-ani');
				game.reciprocal();
			} else if ($(game._reciprocal).text() === '1') {
				$(game._reciprocal).text('GO!').addClass('count-down-ani');
				game.reciprocal();
			} else if ($(game._reciprocal).text() === '2' || $(game._reciprocal).text() === '3') {
				$(game._reciprocal).text(parseInt($(game._reciprocal).text(), 10) - 1).addClass('count-down-ani');
				game.reciprocal();
			}
		}, 1000);

		$(game._reciprocal).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			$(this).off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend').removeClass('count-down-ani');
		});
	}

	// 闖關結束
	page.prototype.callApi = function() {
		var _prey   = $(game._Lbd).attr('data-target'),
			_result = parseInt($(game._player).attr('data-blood'), 10) < parseInt($(game._opp).attr('data-blood'), 10) ? 'success' : 'fail',
			_type   = 0;

		localStorage.setItem('result', _result);
		localStorage.setItem('prey', _prey);

		if (_prey === 'boss') {
			_type = 2;
		} else if (_prey === 'client') {
			_type = 1;
		} else if (_prey === 'colleague') {
			_type = 3;
		}

		window.location.href = 'Result.html?type=' + _type + '&result=' + (parseInt($(game._player).attr('data-blood'), 10) < parseInt($(game._opp).attr('data-blood'), 10) ? 'w' : 'l');
	}

	page.prototype.camera = function() {
		var vid         = document.getElementById('videoel'),
			overlay     = document.getElementById('overlay'),
			$cameraWrap = $('.camera-wrap'),
			vid_width   = vid.width,
			vid_height  = vid.height,
			overlayCC   = overlay.getContext('2d');

		function adjustVideoProportions() {
			var proportion = vid.videoWidth/vid.videoHeight;
			vid_width = Math.round(vid_height * proportion);
			vid.width = vid_width;
			overlay.width = vid_width;
		}

		function gumSuccess(stream) {
			if ("srcObject" in vid) {
				vid.srcObject = stream;
			} else {
				vid.src = (window.URL && window.URL.createObjectURL(stream));
			}
			vid.onloadedmetadata = function() {
				adjustVideoProportions();
				vid.play();
			}
			vid.onresize = function() {
				adjustVideoProportions();
				if (trackingStarted) {
					ctrack.stop();
					ctrack.reset();
					ctrack.start(vid);
				}
			}
			$(game._Lbd).attr('data-countdown', 'true');
			game.reciprocal();
			$cameraWrap.css('opacity', 1);
		}

		function gumFail() {
			var _prey = $(game._Lbd).attr('data-target'),
				_type = 0;

			localStorage.setItem('result', 'fail');
			localStorage.setItem('prey', $(game._Lbd).attr('data-target'));

			if (_prey === 'boss') {
				_type = 2;
			} else if (_prey === 'client') {
				_type = 1;
			} else if (_prey === 'colleague') {
				_type = 3;
			}

			alert('無法取用相機');
			window.location.href = 'Result?type=' + _type + '&result=' + (parseInt($(game._player).attr('data-blood'), 10) < parseInt($(game._opp).attr('data-blood'), 10) ? 'w' : 'l');
		}

		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

		if (navigator.mediaDevices) {
			navigator.mediaDevices.getUserMedia({video : true}).then(gumSuccess).catch(gumFail);
		} else if (navigator.getUserMedia) {
			navigator.getUserMedia({video : true}, gumSuccess, gumFail);
		} else {
			gumFail();
		}

		ctrack.init();
		var trackingStarted = false;

		function startVideo() {
			vid.play();
			ctrack.start(vid);
			trackingStarted = true;
			drawLoop();
		}

		function drawLoop() {
			requestAnimFrame(drawLoop);
			overlayCC.clearRect(0, 0, vid_width, vid_height);

			if (ctrack.getCurrentPosition()) {
				ctrack.draw(overlay);
				$cameraWrap.css('opacity', 1);
				if (game._dTime === true) {
					if ($(game._Lbd).attr('data-level') === 'level1') {
						// 點頭搖頭
						if (game._minX === 0 && game._minY === 0 && game._maxX === 0 && game._maxY === 0) {
							game._minX = parseInt(ctrack.getCurrentPosition()[62][0], 10);
							game._minY = parseInt(ctrack.getCurrentPosition()[62][1], 10);
							game._maxX = parseInt(ctrack.getCurrentPosition()[62][0], 10);
							game._maxY = parseInt(ctrack.getCurrentPosition()[62][1], 10);
						} else {
							if (parseInt(ctrack.getCurrentPosition()[62][0], 10) < game._minX) {
								game._minX = parseInt(ctrack.getCurrentPosition()[62][0], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[62][1], 10) < game._minY) {
								game._minY = parseInt(ctrack.getCurrentPosition()[62][1], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[62][0], 10) > game._maxX) {
								game._maxX = parseInt(ctrack.getCurrentPosition()[62][0], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[62][1], 10) > game._maxY) {
								game._maxY = parseInt(ctrack.getCurrentPosition()[62][1], 10);
							}
						}
					} else if ($(game._Lbd).attr('data-level') === 'level2') {
						// 翻白眼
						if (game._minX === 0 && game._minY === 0 && game._maxX === 0 && game._maxY === 0) {
							game._minY = parseInt(ctrack.getCurrentPosition()[27][1], 10);
							game._maxY = parseInt(ctrack.getCurrentPosition()[27][1], 10);
						} else {
							if (parseInt(ctrack.getCurrentPosition()[27][1], 10) < game._minY) {
								game._minY = parseInt(ctrack.getCurrentPosition()[27][1], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[27][1], 10) > game._maxY) {
								game._maxY = parseInt(ctrack.getCurrentPosition()[27][1], 10);
							}
						}
					} else if ($(game._Lbd).attr('data-level') === 'level3') {
						// 開口，上唇 60，下唇 57
						if (game._minX === 0 && game._minY === 0 && game._maxX === 0 && game._maxY === 0) {
							game._minY = parseInt(ctrack.getCurrentPosition()[57][1], 10);
							game._maxY = parseInt(ctrack.getCurrentPosition()[60][1], 10);
						} else {
							if (parseInt(ctrack.getCurrentPosition()[57][1], 10) < game._minY) {
								game._minY = parseInt(ctrack.getCurrentPosition()[57][1], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[60][1], 10) > game._maxY) {
								game._maxY = parseInt(ctrack.getCurrentPosition()[60][1], 10);
							}
						}
					} else if ($(game._Lbd).attr('data-level') === 'level4') {
						// 笑，左嘴角 44，右嘴角 50，上唇 60，下唇 57
						if (game._minX === 0 && game._minX2 === 0 && game._maxX === 0 && game._maxX2 === 0) {
							game._minX = parseInt(ctrack.getCurrentPosition()[44][0], 10);
							game._maxX = parseInt(ctrack.getCurrentPosition()[44][0], 10);
							game._minY = parseInt(ctrack.getCurrentPosition()[57][1], 10);
							game._maxY = parseInt(ctrack.getCurrentPosition()[60][1], 10);
							game._minX2 = parseInt(ctrack.getCurrentPosition()[50][0], 10);
							game._maxX2 = parseInt(ctrack.getCurrentPosition()[50][0], 10);
						} else {
							if (parseInt(ctrack.getCurrentPosition()[44][0], 10) < game._minX) {
								game._minX = parseInt(ctrack.getCurrentPosition()[44][0], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[44][0], 10) > game._maxX) {
								game._maxX = parseInt(ctrack.getCurrentPosition()[44][0], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[57][1], 10) < game._minY) {
								game._minY = parseInt(ctrack.getCurrentPosition()[57][1], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[60][1], 10) > game._maxY) {
								game._maxY = parseInt(ctrack.getCurrentPosition()[60][1], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[50][0], 10) < game._minX2) {
								game._minX2 = parseInt(ctrack.getCurrentPosition()[50][0], 10);
							}
							if (parseInt(ctrack.getCurrentPosition()[50][0], 10) > game._maxX2) {
								game._maxX2 = parseInt(ctrack.getCurrentPosition()[50][0], 10);
							}
						}
					}
				}
			} else {
				$cameraWrap.css('opacity', 0);
			}
		}
		
		startVideo();
	}

	page.prototype.callback = function() {
		$(game._owl).delay(500).queue(function(){
			$(this).trigger('to.owl.carousel', [1, 500]).dequeue().delay(500).queue(function(){
				$(this).trigger('to.owl.carousel', [0, 500]).dequeue();
			});
		});
	}

	projects.$d.ready(function(){
		projects.owlCarousel(game._owl, game.callback);

		$(game._hunt).on('click', function(){
			$(game._Lbd).attr({
				'data-target' : $('.active .prey-intro').data('prey'),
				'data-curr'   : 'game'
			});

			$('.player-area').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
				$(game._Lbd).attr({
					'data-box'   : 'show',
					'data-run'   : '',
					'data-level' : localStorage.getItem('readed') === 'true' ? 'level1' : 'hint1'
				});

				$('.player-area').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend')

				localStorage.setItem('readed', 'true');
			});
		});

		$(game._boxBtn).on('click', function(){
			var _target = $(this).data('next'),
				_camera = $(this).data('camera');

			if (_target === 'countdown') {
				if (_camera === 'open') {
					game.camera();
				} else {
					$(game._Lbd).attr('data-countdown', 'true');
					game.reciprocal();
				}
			} else {
				$(game._Lbd).attr('data-level', _target);
			}
		});

		$('.elevator').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			$(this).parent().attr('data-continue', 'true');
			$('.elevator').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend')
		});
	});

	if ( ! window.game ) {
		window.game = game;
	}
}(window, document, $));