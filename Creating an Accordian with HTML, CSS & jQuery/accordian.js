$(document).ready(function() {
	function close_accordian_section() {
		$('.accordian .accordian-section-title').removeClass('active');
		$('.accordian .accordian-section-content').hide().removeClass('open');
	}

	$('.accordian-section-title').click(function(e) {
		var currentAttrValue = $(this).attr('href');

		if($(e.target).is('.active')) {
			close_accordian_section();
		}else {
			close_accordian_section();

			$(this).addClass('active');
			$('.accordian ' + currentAttrValue).show().addClass('open');
		}

		e.preventDefault();
	});
});