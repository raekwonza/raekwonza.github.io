$(function() {
	$('.toggles button').click(function(){
		let get_id = this.id;
		let get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
});

$(document).ready(function(){
 	if ($(window).width() < 800) {
		$(".owl-carousel").owlCarousel({
			items:4
		})
	}

	$(".owl-carousel").owlCarousel({
  	items:8
  	});
});





