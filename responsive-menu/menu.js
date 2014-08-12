jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function() {
		jQuery(this).toggleClass('active');
		jQuery('.menu ul').toggleClass('active');
	});
});