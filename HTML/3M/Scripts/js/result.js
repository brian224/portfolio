(function (window, document, jQuery, undefined) {
	'use strict';

	var result = new page();

	function page() {
	};

	projects.$w.load(function(){
	});

	projects.$d.ready(function(){
		if (localStorage.getItem('img') !== null) {
			$('.img-wrap img').attr('src', localStorage.getItem('img'));
			$('.icon-save').attr('href', localStorage.getItem('img'));
		}
	});

	projects.$w.on('scroll', function(){});

	if ( ! window.result ) {
		window.result = result;
	}
}(window, document, $));