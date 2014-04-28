$(document).ready(function() {
	$('.accordian-section-title').click(function(e) {
		e.preventDefault();
	});

	$('.accordian-section-title').click(function(e) {
		var currentAttrValue = $(this).attr('href');

		if($(e.target).is('.active')) {
			$('.accordian .accordian-section-title').removeClass('active');
			$('.accordian .accordian-section-content.open').hide().removeClass('open');
		}else {
			$('.accordian .accordian-section-title').removeClass('active');
			$(this).addClass('active');
			$('.accordian .accordian-section-content').hide().removeClass('open');
			$('.accordian ' + currentAttrValue).show().addClass('open');
		}		
	});
});