(function (window, document, jQuery, undefined) {
	'use strict';

	var product = new page();

	function page() {
		this._date      = new Date;
		this._urlAnchor = (projects._HREF.split('#')[1] !== undefined) ? true : false;
		this._btnShow   = '.jQ-show';
		this._switchImg = '.jQ-switch-img';
		this._btnArrow  = '.jQ-arrow';
	};

	projects.$w.load(function(){
		projects.mediaInit();
	});

	projects.$d.ready(function(){
		if (product._date.getMonth() >= 5) {
			$('.gift-info').remove();
		}

		if (product._urlAnchor) {
			projects.$hb.animate({
				'scrollTop' : localStorage.getItem('top')
			}, 0);
		}

		$('.link-list .btn-link').on('click', function(){
			localStorage.setItem('top', $(window).scrollTop());
		});

		$(product._btnShow).on('click', function(){
			$(common._lBody).addClass('show-lightbox');
			common.offClick('lightbox');

			$(product._switchImg).attr({
				'src' : $(this).data('url'),
				'alt' : $(this).find('.text').text(),
				'data-index' : $(this).data('index'),
				'data-length' : $(this).data('length')
			});

			if ($(this).data('index') !== 1) {
				$('.btn-prev').addClass('is-show');
			} else {
				$('.btn-prev').removeClass('is-show');
			}

			if ($(this).data('index') !== $(this).data('length')) {
				$('.btn-next').addClass('is-show');
			} else {
				$('.btn-next').removeClass('is-show');
			}
		});

		$(product._btnArrow).on('click', function(){
			var $this;

			if ($(this).hasClass('btn-prev')) {
				$this =  $(product._btnShow + '[data-index="' + (parseInt($(product._switchImg).attr('data-index'), 10) - 1) + '"][data-length="' + $(product._switchImg).attr('data-length') + '"]');
			} else if ($(this).hasClass('btn-next')) {
				$this =  $(product._btnShow + '[data-index="' + (parseInt($(product._switchImg).attr('data-index'), 10) + 1) + '"][data-length="' + $(product._switchImg).attr('data-length') + '"]');
			}

			$(product._switchImg).attr({
				'src' : $this.data('url'),
				'alt' : $this.find('.text').text(),
				'data-index' : $this.data('index'),
				'data-length' : $this.data('length')
			});

			if (parseInt($(product._switchImg).attr('data-index'), 10) !== 1) {
				$('.btn-prev').addClass('is-show');
			} else {
				$('.btn-prev').removeClass('is-show');
			}

			if ($(product._switchImg).attr('data-index') !== $(product._switchImg).attr('data-length')) {
				$('.btn-next').addClass('is-show');
			} else {
				$('.btn-next').removeClass('is-show');
			}
		});
	});

	projects.$w.on('scroll', function(){});

	if ( ! window.product ) {
		window.product = product;
	}
}(window, document, $));