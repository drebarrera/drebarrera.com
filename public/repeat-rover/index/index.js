function redirect(url){
	$('#page').fadeOut(500, function(){
		location.href = url;
	});
}

function drop(tile, ind) {
	setTimeout(function(){
		$('.tile_stack').eq(tile).animate({
			top: '0px'
		}, 100);
	}, 100 * ind);
}

$(document).ready(function(){
	$('#page').fadeIn(1000);
	$('.tile_stack').css('top','-1000px');
	var numTiles = $('.tile_stack').length;
	var tileStack = [...Array(numTiles).keys()];
	for(var ind = numTiles; ind > 0; ind--){
		var tileSelect = ind - 1; //Math.floor(Math.random() * ind);
		var tile = tileStack[tileSelect];
  		tileStack.splice(tileSelect, 1);
		drop(tile, numTiles - ind);
	}

	$('.tile_stack, .tile_slide, .dummy_tile_stack').not('#about-tile').not('#github-tile').not('#team-tile').not('#contact-tile').not('#documents-tile').not('#477-tile').hover(function(){
		$('#title').text('Repeat Rover');
		$('#subtitle').text('Welcome. Click on a blue tile to begin.');
	});

	$('#about-tile').hover(function(){
		$('#title').text('About the Project');
		$('#subtitle').text('Click to learn more about the Repeat Rover project.');
	});

	$('#github-tile').hover(function(){
		$('#title').text('Project Repository');
		$('#subtitle').text('Click for the Repeat Rover project GitHub repository.');
	});

	$('#team-tile').hover(function(){
		$('#title').text('Team Members');
		$('#subtitle').text('Click to learn about the Repeat Rover team.');
	});

	$('#documents-tile').hover(function(){
		$('#title').text('Project Documents');
		$('#subtitle').text('Click for Repeat Rover project documentation.');
	});

	$('#477-tile').hover(function(){
		$('#title').text('ECE 477 Webpage');
		$('#subtitle').text('Click to visit the Purdue Univeristy Digital Systems Senior Design website.');
	});

	$('#contact-tile').hover(function(){
		$('#title').text('Contact and Inquiry');
		$('#subtitle').text('Click to contact the Repeat Rover team.');
	});
	setTimeout(function() {
		$('#rover').animate({
			bottom: "135px",
			marginLeft: "375px"
		}, 1500);
	}, 800);
});

