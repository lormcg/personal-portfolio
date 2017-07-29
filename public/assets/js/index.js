$(document).ready(function() {

//make the navbar disappaear upon scroll down, and re-appear again on scroll up.
	var lastScrollTop = 0;
	
	$(window).scroll(function() {
		var currentScrollTop = $(this).scrollTop();

		if (currentScrollTop <= lastScrollTop) {
			$('.navbar').fadeIn();
			// $('.navbar').addClass('hidden');
			// $('.navbar').slideDown(400);

		} else {
			$('.navbar').fadeOut();
			// $('.navbar').removeClass('hidden');
			// $('.navbar').slideUp(400);
			lastScrollTop = currentScrollTop;
			
		}
	});
	
//changeColor selects from a set of pre-seleced colors at random upon page load.
	function changeColor() {
		var gradientColors = ['khaki', 'lightsalmon', 'hotpink', 'tomato', 'orchid', 'palegreen', 'turquoise', 'mistyrose', 'lightslategray'];

		var newColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
		//select the end color of the drip gradient on the index.
		$('#bottom-color').attr('stop-color', newColor);
	};

	changeColor();

	$('.drips').on('click', changeColor());

//jQ for paint by numbers

	// $('.palette').on ('click', function() {
	// 	currentColor = $(this).css('background-color');

	// 	$('.current').css('background-color', currentColor);
	// });


	// $('.canvas').on('click', function() {
	// 	$(this).css('background-color', currentColor);
	// });



});
