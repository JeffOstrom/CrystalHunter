$(document).ready(function(){

	console.log("game.js loaded");

	var wins = 0;
	var losses = 0;
	var match = 0;
	var totalScore = 0;

	match = randomNumber(19, 120);
	$("#random").html(match); // displays to screen


	$("#crystalA").attr("data-points", randomNumber(1,12));
	$("#crystalB").attr("data-points", randomNumber(1,12));
	$("#crystalC").attr("data-points", randomNumber(1,12));
	$("#crystalD").attr("data-points", randomNumber(1,12));


	//RANDOM NUMBER FUNCTION
	function randomNumber(min , max)
	{
		return Math.round( (Math.random()*(max-min)) + min);     
	}

	function reStart(){
		
		match = randomNumber(19, 120);
		$("#random").html(match);

		totalScore = 0;
		$("#totalScore").html(totalScore);	


		$("#crystalA").attr("data-points", randomNumber(1,12));
		$("#crystalB").attr("data-points", randomNumber(1,12));
		$("#crystalC").attr("data-points", randomNumber(1,12));
		$("#crystalD").attr("data-points", randomNumber(1,12));		

	}


	// attaches on "click" event handler to every element with class ".crystal"
	$(".crystal").on("click", function(){

		var points = parseInt($(this).attr("data-points"));

		totalScore = totalScore + points;
		$("#yourScore").html(totalScore);

		//compare to total score to match
		if(totalScore === match)
		{
			wins = wins + 1;
			$("wins").html(wins);
			// update wins on screen
			reStart();
		}

		if(totalScore > match)
		{
			console.log("you lost, restart");
			losses = losses + 1;
			// display you losses 
			// update loses on screen
			reStart();
		}

	});
});

