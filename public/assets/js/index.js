$(document).ready(function() {



	console.log('I work!');

	var dynamicColor = $('#bottom-color');

	$('.drips').on('click', function() {
		var gradientColors = ['peachpuff', 'lightsalmon', 'hotpink', 'tomato', 'plum', 'palegreen', 'turquoise', 'honeydew', 'mistyrose', 'lightslategray'];

		var newColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];

		$('#bottom-color').attr('stop-color', newColor);
	});


	// $('.palette').on ('click', function() {
	// 	currentColor = $(this).css('background-color');

	// 	$('.current').css('background-color', currentColor);
	// });


	// $('.canvas').on('click', function() {
	// 	$(this).css('background-color', currentColor);
	// });
});
