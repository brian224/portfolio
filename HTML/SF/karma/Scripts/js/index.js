(function (window, document, jQuery, undefined) {
	'use strict';

	var index = new page();

	function page() {
		this._select    = '.jQ-select';
		this._lightbox  = '.l-lightbox';
		this._playTime  = 0;
		this._shineTime = 0;
		this._openBox   = window.location.href.split('openBox=')[1];
	};

	page.prototype.doPlay = function() {
		$(common._lBody).attr('data-play', 'play');

		index._playTime = (parseInt($(index._select + ' .wording').css('animation-duration'), 10) * 2 + parseInt($(index._select + ' .wording').css('animation-delay'), 10)) * 1000;

		$(common._lBody).delay(index._playTime).queue(function(){
			index.doshine();
			$(common._lBody).dequeue();
		});
	}

	page.prototype.doshine = function() {
		$(common._lBody).attr('data-play', 'shine');

		index._shineTime = (parseFloat($(common._lBody + '[data-play="shine"] .deco .ghost').css('animation-duration'), 10) * 4 + parseFloat($(common._lBody + '[data-play="shine"] .deco .ghost').css('animation-delay'), 10) + 2) * 1000;

		$(common._lBody).delay(index._shineTime).queue(function(){
			index.doPlay();
			$(common._lBody).dequeue();
		});
	}

	projects.$w.load(function(){
		$(common._lBody).delay(1000).queue(function(){
			index.doPlay();
			$(common._lBody).dequeue();
		});
	});

	projects.$d.ready(function(){
		if ( index._openBox == '1') {
			$(common._lBody).addClass('show-box');
			$(index._lightbox).on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$(this).addClass('light-on');
			});
		}

		$(index._select).on('click', function(){
			$(common._lBody).addClass('show-box');
			$(index._lightbox).on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$(this).addClass('light-on');
			});
		});

		$(common._close).on('click', function(){
			$(index._lightbox).on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$(this).removeClass('light-on');
			});
		});
	});

	projects.$w.on('scroll', function(){
	});

	projects.$w.resize(function(){});

	if ( ! window.index ) {
		window.index = index;
	}
}(window, document, $));