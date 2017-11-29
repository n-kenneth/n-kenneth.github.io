jQuery(function($){
	
	$('.select-header').click(function(){
		var drop = $(this).siblings('.dropDown-radio'),
				selectText = $(this).find('span');
		drop.slideToggle('fast');
		drop.find('.radio-title').click(function(){
				selectText.text($(this).text());
				drop.slideUp();
		});
	});

});