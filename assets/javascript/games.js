// // Each crystal should have a random hidden value between 1 - 12.
// // The random number shown at the start of the game should be between 19 - 120.
// //What needs to happen:
// //Each character needs a random value, when clicked score will reveal.
// //random number will show inside of (randomNumber) box on page.
// //When characters are clicked their values will show within (totalScoreBox)
// //If score matches that within (randomNumber) user will gain one win point. If (randomNumber)does not match
// //score, loss will increase.
// //Game will (reset) including wins and losses and therefore characters begin with a new value and (randomNumber)
// //has a new value.

// // These are our global variables
var characterBandicoot;
var characterCoco;
var characterTikiHead;
var characterTeam;
var wins = 0;
var losses = 0;
var totalSoFar;



// //The game begins with a random number displayed on screen.
// //users will need to match this random number in order to win if not they will lose.
var randomNumber;

// //this will execute the reset function at the beginning of the game.
reset();


// //these are our objects of which we will use to store values within these names.
var characters;



// //User must click on a button to display score within totalScoreBox.
// //this function will assign a random number to a button when clicked.
// //Once a button has been clicked their value will be added to that of the other button.
$('.button').on('click', function () {
    totalSoFar += characters[event.target.name];
    $('#totalScoreBox').text(totalSoFar);

    winsLoss();
})


// //if the (totalSoFar === randomNumber) we will set a parameter that the user gains a point.
// //if the totalSoFar =! randomNumber then the user will lose a point.

function reset() {
    characterBandicoot = Math.floor(Math.random() * 12) + 1;
    characterCoco = Math.floor(Math.random() * 12) + 1;
    characterTikiHead = Math.floor(Math.random() * 12) + 1;
    characterTeam = Math.floor(Math.random() * 12) + 1;

    totalSoFar = 0;
    $('#totalScoreBox').text(totalSoFar);

    randomNumber = Math.floor(Math.random() * 102) + 19;
    $('#randomNumber').text(randomNumber);

    characters = {
        coco: characterCoco,
        tiki: characterTikiHead,
        team: characterTeam,
        bandicoot: characterBandicoot,
    }

}

function winsLoss() {
    var finalScore = randomNumber;

    if (totalSoFar === randomNumber) {
        wins++;
        $('#wins').append(wins);
        reset();

    } else if (totalSoFar > randomNumber) {
        losses++;
        $('#losses').append(losses);
        reset();
    }
}









