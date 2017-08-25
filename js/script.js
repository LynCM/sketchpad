// Define variable for grid width (in squares)
var gridSize = 16;

// Define function to make grid
function makeGrid(size) {
	for(var i = 1; i <= size*size ; i++) {
		$('#container').append("<div class='grid'></div>");
	}
	$(".grid").height(500/size);
	$(".grid").width(500/size);
}

$(document).ready(function() {
	makeGrid(gridSize);
	// Change colour of square when hovered over
	$('.grid').mouseenter(function() {
		$(this).addClass("hovered");
	});
});