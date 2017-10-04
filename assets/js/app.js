
    var wins = 0;
    var losses = 0;
    var match = 0;
    var totalScore = 0;
//Move var outside document ready function!
$(document).ready(function(){
    
    match = randomNumber(19, 120);
    $("#random").html(match); // displays to screen
    
    //sets the images for the crystal buttons
    for(var i = 1; i <= 4; i++){
        $("#crystal"+i).html("<img src='assets/Images/crystal"+i+".png' alt='picture of a crystal'>");
    };

    //sets the crystal's value
    randomCrystalValues();

    // attaches on "click" event handler to every element with class ".crystal"
    $(".crystal").on("click", function(){
        var points = parseInt($(this).attr("data-points"));
        totalScore = totalScore + points;
        $("#yourScore").html(totalScore);
        //compare to total score to match
        if(totalScore === match)
        {
            // I need to fix this to reset once win!
            wins = wins + 1;
            //I need to figure out how to enter alert Wins/Loss
            console.log("You win!");
        
            $("#wins").html(wins + "<p>You win!</p>");
            // update wins on screen
            reStart();
            //Restarts
        } else if(totalScore > match) {
            //I need to reset this when lose.
            losses = losses + 1;
            // display you losses 
              $("#loses").html(losses + "<p>You Lost!</p>");
            // update loses on screen
            reStart();
            //Restarts
        }
    });
});

//set random values to the crystals
function randomCrystalValues(){
    for(var i = 1; i <= 4; i++){
        $("#crystal"+i).attr("data-points", randomNumber(1,12));
    };
}

//RANDOM NUMBER FUNCTION
function randomNumber(min , max)
{
    return Math.round( (Math.random()*(max-min)) + min);     
}

function reStart(){
    
    match = randomNumber(19, 120);
    $("#random").html(match);
    console.log(random);
    totalScore = 0;
    $("#totalScore").html(totalScore);    
    
    randomCrystalValues();     
}