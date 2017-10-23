jQuery(function($){
	$('.select-header').click(function(){
		var drop = $('.dropDown-radio'),
				selectText = $(this).find('span');
		drop.slideToggle('fast');
		drop.find('.radio-title').click(function(){
				selectText.text($(this).text());
				drop.hide();
		});
	});
});