jQuery ('document').ready(function($){

	var	menuBtn = $('.menu.icon'),
		menu = $('.navegation ul');

	menuBtn.click(function() {

		if (menu.hasClass('show')) {
			menu.removeClass('show');	
		} else {
		menu.addClass('show');			
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 0 ) {
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});
});