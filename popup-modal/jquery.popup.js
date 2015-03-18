$(function() {
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');

		$('[data-popup="' + targeted_popup_class + '"]').addClass('popup-open');

		e.preventDefault();
	});
});