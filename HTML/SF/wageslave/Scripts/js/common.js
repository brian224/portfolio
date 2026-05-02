(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new commonFn();

	function commonFn() {
		this._btnMenu  = '.jQ-menu';
		this._isIPhone = navigator.platform.match(/iPhone/i) ? true : false;
	};

	// 偵測不支援的狀況
	commonFn.prototype.detectBrowser = function(){
		var _regex = {
				messenger : /\bFB[\w_]+\/(Messenger|MESSENGER)/,
				facebook  : /\bFB[\w_]+\//,
				twitter   : /\bTwitter/i,
				line      : /\bLine\//i,
				wechat    : /\bMicroMessenger\//i,
				instagram : /\bInstagram/i,
				chrome    : /\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,
				safari    : /Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,
				ie        : /IEMobile|MSIEMobile/,
				firefox   : /fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/
			},
			_browser = {},
			 _regex2 = {
				samsung   : /\bSamsungBrowser/i,
				oppo      : /\bOPR/i,
				htc       : /\bHTC/i,
				xiaomi    : /\bXiaoMi/i,
				puffin    : /\bPuffin/i
			},
			_device = {};

		// app & browser 判斷
		for (var _key in _regex) {
			_browser[_key] = _regex[_key].exec(navigator.userAgent);
		}

		// device 判斷
		for (var _key2 in _regex2) {
			_device[_key2] = _regex2[_key2].exec(navigator.userAgent);
		}

		for (var _key in _browser) {
			if ((_key !== 'chrome' && _key !== 'safari' && _browser[_key]) || (_key === 'chrome' && _browser[_key] && common._isIPhone === true)) {
				projects.$b.addClass('in-app');
			}
		}

		for (var _key2 in _device) {
			if ( _key2 === 'samsung' || _key2 === 'oppo' || _key2 === 'xiaomi' || _key2 === 'puffin' || (_key2 === 'htc' && navigator.userAgent.match('Version') !== null)) {
				if ( _device[_key2] ) {
					projects.$b.addClass('in-app');
					if ($('.l-in-app').css('height') === '0px') {
						$('.l-in-app').css('height', '100vh');
					}
				}
			}
		}
	};

	projects.$d.ready(function(){
		common.detectBrowser();
		projects.$b.attr('style', '--height: ' + projects.$w.height() + 'px');

		$(common._btnMenu).on('click', function(){
			$(this).toggleClass('is-active');
		});

		$('.link-wrap').on('click', function(){
			$(common._btnMenu).removeClass('is-active');
		});
	});

	projects.$w.on('resize', function(){
		projects.$b.attr('style', '--height: ' + projects.$w.height() + 'px');
		if (projects.$w.width() > projects.$w.height()) {
			projects.$w.scrollTop(0);
		}
});

	if ( ! window.common ) {
		window.common = common;
	}
}(window, document, $));