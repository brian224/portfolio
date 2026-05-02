(function (window, document, jQuery, undefined) {
	'use strict';

	var game = new page();
	var canvas, stage, shape, lastPt, oldMidPt, color, stroke, lastPt, image, bitmap,
		isMouseDown = false;

	function page() {
		this._hushtag   = window.location.href.split('#')[1];
		this._num       = Math.floor(Math.random()*2) + Math.floor(Math.random()*2) + 1;
		this._selection = '.jQ-selection';
		this._finish    = '.jQ-finish';
		this._timer     = null;
		this._img       = new Image();
		this._charmText = new Image();
		this._color     = '';
		this._array     = {
			'boss'   : {
				'poetry' : ['面面相覷何時了', '竟然同行捷運站'],
				'title'  : '電梯遇老闆',
				'name'   : '向左走向右走符'
			},
			'brain'  : {
				'poetry' : ['嘴砲豪小你最屌', '全場就你最無腦'],
				'title'  : '賣老不用腦',
				'name'   : '客戶趕快退休符'
			},
			'bug'    : {
				'poetry' : ['藍屏錯誤４０４', 'Ｂｕｇ回報落落等'],
				'title'  : '電腦不乖乖',
				'name'   : '乖~怪拐拐拐符'
			},
			'eat'    : {
				'poetry' : ['中午吃飯沒人揪', '好想被問吃什麼'],
				'title'  : '吃飯自己吃',
				'name'   : '同事都在@你符'
			},
			'idea'   : {
				'poetry' : ['Ｉｄｅａ先拿幾個來', '抱歉你們下次再來'],
				'title'  : '提案先修班',
				'name'   : '設計稿一次到位符'
			},
			'money'  : {
				'poetry' : ['要你做事天天來', '換他付錢搞消失'],
				'title'  : '請款請半年',
				'name'   : '收款收到手軟符'
			},
			'off'    : {
				'poetry' : ['大家都是父母生', '其實不用太認真'],
				'title'  : '客戶不下班',
				'name'   : '客戶去接小孩符'
			},
			'talk'   : {
				'poetry' : ['沒事刷個存在感', '幹話屁話一籮筐'],
				'title'  : '只會講幹話',
				'name'   : '內建自動消音符'
			},
			'tired'  : {
				'poetry' : ['若我沒有在ＬＩＮＥ上', '就在回ＬＩＮＥ的路上'],
				'title'  : '過勞我專業',
				'name'   : '六點離開公司符'
			},
			'travel' : {
				'poetry' : ['不能搭機去歐洲', '只能騎車去蘆洲'],
				'title'  : '沒錢去旅行',
				'name'   : '行李箱用得到符'
			}
		};
	};

	page.prototype.setTime = function() {
		game._timer = setTimeout(function() {$(common._lBody).addClass('show-box');}, 15000);
	}

	page.prototype.setCharmStyle = function() {
		if ( game._num === 1 ) {
			game._img.src       = '../../Content/img/game/charm-g.jpg';
			game._color         = '#fffa65';
			game._charmText.src = '../../Content/img/game/canvas/' + game._hushtag + '.png';
		} else if ( game._num === 2 ) {
			game._img.src       = '../../Content/img/game/charm-r.jpg';
			game._color         = '#ee5277';
			game._charmText.src = '../../Content/img/game/canvas/' + game._hushtag + '.png';
		} else {
			game._img.src       = '../../Content/img/game/charm-y.jpg';
			game._color         = '#eb0303';
			game._charmText.src = '../../Content/img/game/canvas/' + game._hushtag + '-r.png';
		}
	}

	page.prototype.charm = function() {
		var $newCanvas = $('<canvas>')[0],
			$canvas2d  = $newCanvas.getContext('2d'),
			$img       = new Image(),
			$redCharm  = $('<canvas>')[0];

		$newCanvas.width = $redCharm.width = 640;
		$newCanvas.height = 1136;
		$redCharm.height = 512;
		$canvas2d.font = '30px 微軟正黑體';
		$img.src = canvas.toDataURL('image/png', 1);

		setTimeout(function() {
			$redCharm.getContext('2d').drawImage($img, 0, 0, $redCharm.width, $redCharm.height);

			if ( game._num === 3 ) {
				var _imageData = $redCharm.getContext('2d').getImageData(0, 0, $redCharm.width, $redCharm.height),
					_data      = _imageData.data;

				for (var i = 0; i < _imageData.data.length; i += 4) {
					_data[i] = 203;
					_data[i + 1] = 5;
					_data[i + 2] = 5;
				}

				$redCharm.getContext('2d').putImageData(_imageData, 0, 0);
			}
		}, 100);

		setTimeout(function() {
			$canvas2d.drawImage(game._img, 0, 0, $newCanvas.width, $newCanvas.height);
			$canvas2d.globalAlpha = 0.1;
			$canvas2d.drawImage($redCharm, 0, 274, $newCanvas.width, 512);
			$canvas2d.globalAlpha = 1;
			$canvas2d.drawImage(game._charmText, 276, 172, 88, 742);
			$canvas2d.fillStyle = game._color;
			game.setPoetry($canvas2d, game._array[game._hushtag].poetry[0], 30, 430, 45);
			game.setPoetry($canvas2d, game._array[game._hushtag].poetry[1], 580, 430, 45);
		}, 200);

		setTimeout(function() {
			game.api($newCanvas.toDataURL('image/png', 1));
		}, 300);
	}

	page.prototype.setPoetry = function(_canvas, _text, x, y, lineHeight) {
		var _newText = _text.split('');

		for(var n = 0; n < _newText.length; n++) {
			_canvas.fillText(_newText[n], x, y + (lineHeight * n));
		}
	}

	page.prototype.api = function(element) {
		localStorage.setItem('img', element);
		localStorage.setItem('alt', game._array[game._hushtag].name);

		window.location.href = 'result.html';

		// $.ajax({
		// 	type     : 'POST',
		// 	url      : $(common._finish).data('url'),
		// 	data     : {
		// 		'image' : element.split('data:image/png;base64,')[1],
		// 		'title' : game._array[game._hushtag].name
		// 	},
		// 	dataType : 'json',
		// 	success  : function(data) {
		// 	},
		// 	error    : function (jqXHR, textStatus, errorThrown) {
		// 		console.log(jqXHR.responseText + ',' + jqXHR.status + ',' + jqXHR.readyState + ',' + jqXHR.statusText);
		// 	},
		// 	complete : function(data) {
		// 		window.location.href = data.responseJSON.url;
		// 	}
		// });
	}

	function handleComplete() {
		canvas = document.getElementById('canvas');

		stage  = new createjs.Stage(canvas);
		shape  = new createjs.Shape();
		bitmap = new createjs.Bitmap(image);

		shape.cache(0, 0, canvas.width, canvas.height);
		bitmap.cache(0, 0, canvas.width, canvas.height);

		createjs.Touch.enable(stage);

		var overShape = new createjs.Shape();
		
		stage.addChild(overShape, bitmap);
		stage.addChild(shape);
		stage.update();	

		stage.addEventListener('stagemousedown', handleMouseDown);
		stage.addEventListener('stagemousemove', handleMouseMove);
		stage.addEventListener('stagemouseup', handleMouseUp);

		window.addEventListener('contextmenu', function() {
			isMouseDown = false;
		});
	}

	function handleMouseDown(event) {
		isMouseDown = true;
		color       = '#ffffff';
		stroke      = 10;
		lastPt      = new createjs.Point(stage.mouseX, stage.mouseY);
		oldMidPt    = lastPt.clone();

		clearTimeout(game._timer);
		$(game._selection).addClass('hide-hint');
	}

	function handleMouseMove(event) {
		if ( !isMouseDown ) { return; };

		var nowMidPt = new createjs.Point(
			lastPt.x + stage.mouseX >> 1, 
			lastPt.y + stage.mouseY >> 1
		);

		shape.graphics.setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo( nowMidPt.x, nowMidPt.y ).curveTo(lastPt.x, lastPt.y, oldMidPt.x, oldMidPt.y);
		shape.updateCache('source-over');
		shape.graphics.clear();

		lastPt.x = stage.mouseX;
		lastPt.y = stage.mouseY;

		oldMidPt.x = nowMidPt.x;
		oldMidPt.y = nowMidPt.y;

		stage.update();
	}

	function handleMouseUp(event) {
		isMouseDown = false;
		game.setTime();
	}

	projects.$w.load(function(){
		if( isMouseDown === false ) {
			game.setTime();
		}
	});

	projects.$d.ready(function(){
		if (game._hushtag !== undefined) {
			$(game._selection).attr('data-selection', game._hushtag);
		}

		game.setCharmStyle();

		$(common._close).on('click', function(){
			game.setTime();
		});

		$(game._finish).on('click', function(){
			game.charm();
		});
	});

	projects.$w.on('scroll', function(){
	});

	document.addEventListener('DOMContentLoaded', handleComplete);

	projects.$w.resize(function(){});

	if ( ! window.game ) {
		window.game = game;
	}
}(window, document, $));