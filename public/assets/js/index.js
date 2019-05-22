$(document).ready(function() {

//make the navbar disappaear upon scroll down, and re-appear again on scroll up.
	var lastScrollTop = 0;
	
	$(window).scroll(function() {
		var currentScrollTop = $(this).scrollTop();

		if (currentScrollTop <= lastScrollTop) {
			$('.navbar').fadeIn();
		} else {
			$('.navbar').fadeOut();
			lastScrollTop = currentScrollTop;
		}
	});
	

	function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
	}


//changeColor selects from a set of pre-seleced colors at random upon page load.
	function changeColor() {

		//select the end color of the drip gradient on the index.
		$('#top-color').attr('stop-color', getRandomColor());
		$('#bottom-color').attr('stop-color', getRandomColor());
	};

	// changeColor();
	
//jQ for paint by numbers

	// $('.palette').on ('click', function() {
	// 	currentColor = $(this).css('background-color');

	// 	$('.current').css('background-color', currentColor);
	// });

	// $('.canvas').on('click', function() {
	// 	$(this).css('background-color', currentColor);
	// });



});
