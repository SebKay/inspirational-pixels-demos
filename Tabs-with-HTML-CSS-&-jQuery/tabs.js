$(document).ready(function() {
	// Standard
	$('.tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});

	// Animated Fade
	$('.tabs.animated-fade .tab-links a').on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();

		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});

	// Animated Slide 1
	$('.tabs.animated-slide-1 .tab-links a').on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).siblings().slideUp(400);
		$('.tabs ' + currentAttrValue).delay(400).slideDown(400);

		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});

	// Animated Slide 2
	$('.tabs.animated-slide-2 .tab-links a').on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});