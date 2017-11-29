(function(){

	new WOW({
		mobile: false
	}).init();

	var burger = $('.burger'),
			nav = $('.navi ul'),
			close = $('.btnClose');

	burger.on('click', function(e){
		nav.addClass('open');
		return false;
	});

	close.on('click', function(e){
		nav.removeClass('open');
		return false;
	});

	// $('header').swipe({
	// 	swipeDown: function(){
	// 		$(this).find('.navi ul').addClass('open');
	// 	},
	// 	threshold: 0
	// });

})();