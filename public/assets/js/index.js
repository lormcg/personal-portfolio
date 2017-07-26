$(document).ready(function() {

	var gradientColors = ['khaki', 'lightsalmon', 'hotpink', 'tomato', 'orchid', 'palegreen', 'turquoise', 'mistyrose', 'lightslategray'];

	function changeColor() {
		var newColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];

		$('#bottom-color').attr('stop-color', newColor);
	};



	$(document).on('load', changeColor());

	// $('.drips').on('click', changeColor());




	// $('.palette').on ('click', function() {
	// 	currentColor = $(this).css('background-color');

	// 	$('.current').css('background-color', currentColor);
	// });


	// $('.canvas').on('click', function() {
	// 	$(this).css('background-color', currentColor);
	// });
});
