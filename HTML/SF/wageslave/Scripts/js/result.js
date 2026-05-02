(function (window, document, jQuery, undefined) {
	'use strict';

	var result = new page();

	function page() {
		this._share  = '.jQ-share';
		this._prey   = localStorage.getItem('prey');
		this._result = localStorage.getItem('result');
	};

	page.prototype.openWin = function(element) {
		var _top      = element.data('height') ? 
						( ( window.screen.availHeight - element.data('height') ) / 2 ) : 
						( ( window.screen.availHeight - 600 ) / 2 ),
			_left     = element.data('width') ? 
						( ( window.screen.availLeft || window.screenX ) + ( projects.$d.width() / 2 ) ) - ( element.data('width') / 2 ) : 
						( ( window.screen.availLeft || window.screenX ) + ( projects.$d.width() / 2 ) ) - ( 600 / 2 ),
			_width    = element.data('width') || 600,
			_height   = element.data('height')  || 600,
			_menubar  = element.data('menu-bar')  || 'no',
			_titlebar = element.data('title-bar') || 'no',
			_status   = element.data('status') || 'no';
		var _href     = element.attr('href') || element.data('href');

		window.open(''+_href+'' , '' , 'top='+_top+', left='+_left+', width='+_width+', height='+_height+', menubar='+_menubar+', titlebar='+_titlebar+', status='+_status+'' , false);
	};

	projects.$d.ready(function(){
		document.querySelector('.l-bd').setAttribute('data-prey', result._prey);
		document.querySelector('.l-bd').setAttribute('data-result', result._result);

		$(result._share).on('click', function(e){
			var $self = $(this);

			e.preventDefault();
			result.openWin($self);
		});
	});

	if ( ! window.result ) {
		window.result = result;
	}
}(window, document, $));