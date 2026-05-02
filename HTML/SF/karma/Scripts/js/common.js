(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new page();

	function page() {
		this._lBody    = '.l-body';
		this._close    = '.jQ-close';
		this._isIPhone = navigator.platform.match(/iPhone/i) ? true : false;
	};

	projects.$w.load(function(){
	});

	projects.$d.ready(function(){
		if (projects.device() === 'Mobile' && common._isIPhone === true && navigator.userAgent.match('CriOS') === null) {
			$(common._lBody).addClass('ios-safari');
		}

		$(common._close).on('click', function(){
			$(common._lBody).removeClass('show-box');
		});
	});

	projects.$w.on('scroll', function(){
	});

	projects.$w.resize(function(){});

	if ( ! window.common ) {
		window.common = common;
	}
}(window, document, $));