(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new page();

	function page() {
		this._menu     = '.jQ-menu';
		this._btnClose = '.jQ-close';
		this._lBody    = '.l-body';
		this._share    = '.jQ-share';
	};

	// 點擊目標區域以外的地方可關閉目標區域
	page.prototype.offClick = function(_target) {
		projects.$d.off('click').on('click' , function(e){
			e.stopPropagation();

			if (_target === 'menu') {
				if (!$(e.target).is('.menu-list, .menu-list *, ' + common._menu + ', ' + common._menu + ' *')) {
					e.stopPropagation();
					$(common._menu).removeClass('is-active');
				}
			} else if (_target === 'lightbox') {
				if (!$(e.target).is('.m-lightbox, .m-lightbox *, ' + product._btnShow + ', ' + product._btnShow + ' *')) {
					common.closeBoxEvent();
				}
			}
		});
	}

	page.prototype.closeBoxEvent = function() {
		$(common._lBody).addClass('fade-out').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			$(common._lBody).removeClass('show-lightbox fade-out').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
		});
	}

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

	projects.$w.load(function(){
	});

	projects.$d.ready(function(){
		// common.offClick();

		if (projects.device() === 'Mobile' && navigator.userAgent.match('CriOS') !== null) {
			$(common._lBody).addClass('ios-chrome');
		}

		$(common._share).on('click', function(e){
			var $self = $(this);
			e.preventDefault();
			common.openWin($self);
			SFGa.push($self.attr('ga_cat') , $self.attr('ga_event') , $self.attr('ga_label'));
		});

		$(common._menu).on('click', function(){
			$(this).toggleClass('is-active');
			common.offClick('menu');
		});

		$('.m-nav').on('click', function(e){
			if (!$(e.target).is('.menu-list, .menu-list > *')) {
				e.stopPropagation();
				$(common._menu).removeClass('is-active');
			}
		});

		$(common._btnClose).on('click', function(){
			common.closeBoxEvent();
		});
	});

	projects.$w.on('scroll', function(){});

	projects.$w.resize(function(){});

	if ( ! window.common ) {
		window.common = common;
	}
}(window, document, $));