(function (window, document, jQuery, undefined) {
	'use strict';

	var result = new page();

	function page() {
		this._charm   = '.jQ-charm';
		this._share   = '.jQ-share';
		this._shareBg = new Image();
		this._src     = localStorage.getItem('img');
		this._alt     = localStorage.getItem('alt');
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

	page.prototype.shareImg = function() {
		var $newCanvas = $('<canvas>')[0],
			$canvas2d  = $newCanvas.getContext('2d');

		$newCanvas.width = 1200;
		$newCanvas.height = 630;

		$canvas2d.drawImage(result._shareBg, 0, 0, 1200, 630);
		$canvas2d.drawImage($(result._charm)[0], 222, 34, 355, 630);

		setTimeout(function() {
			$('.img-wrap').attr('href', $newCanvas.toDataURL('image/png', 1))
		}, 100);
	}

	projects.$w.load(function(){
	});

	projects.$d.ready(function(){
		result._shareBg.src = '../../Content/img/share.jpg';

		if (result._src !== null) {
			$(result._charm).attr({
				'src': result._src,
				'alt': result._alt
			});

			$('.icon-download').attr('href', result._src);
		}

		$(result._share).on('click', function(e){
			var $self = $(this);

			e.preventDefault();
			result.openWin($self);
			// SFGa.push($self.attr('ga_cat') , $self.attr('ga_event') , $self.attr('ga_label'));
		});

		$('.icon-download').on('click', function(){
			result.shareImg();
		});
	});

	projects.$w.on('scroll', function(){
	});

	projects.$w.resize(function(){});

	if ( ! window.result ) {
		window.result = result;
	}
}(window, document, $));