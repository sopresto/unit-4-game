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

//Setting global varibles
var characterBandicoot;
var characterCoco;
var characterTikiHead;
var characterTeam;
var wins = 0;
var losses = 0;
var totalSoFar;

// // //The game begins with a random number displayed on screen.
// // //users will need to match this random number in order to win if not they will lose.

//global variable for random number
var randomNumber;
//begin game with reset
reset();
//global variable for characters
var characters;

function reset() {
    characterBandicoot = Math.floor(Math.random() * 12) + 1;
    characterCoco = Math.floor(Math.random() * 12) + 1;
    characterTikiHead = Math.floor(Math.random() * 12) + 1;
    characterTeam = Math.floor(Math.random() * 12) + 1;

    totalSoFar = 0;
    var divTotal = $('#totalScore').text(totalSoFar);
    $("userNum").append(divTotal);

    randomNumber = Math.floor(Math.random() * 102) + 19;
    var random = $('#randoNum').text(randomNumber);
    $("randomNumber").append(random);

    characters = {
        coco: characterCoco,
        tiki: characterTikiHead,
        team: characterTeam,
        bandicoot: characterBandicoot,
    }

}

// console.log(reset())

// // //User must click on a button to display score within totalScoreBox.
// // //this function will assign a random number to a button when clicked.
// // //Once a button has been clicked their value will be added to that of the other button.
$('button').on('click', function (event) {
    totalSoFar += characters[event.target.name];
    $('#totalScore').text(totalSoFar);

    winsLoss();
})

function winsLoss() {
    var finalScore = randomNumber;

    if (totalSoFar === randomNumber) {
        wins++;
        var addText = $("#wins").text(wins);
        $('#wins').append(addText);
        console.log('win')
        reset();

    } else if (totalSoFar > randomNumber) {
        losses++;
        var addLoss = $("#losses").text(losses)
        $('#losses').append(addLoss);
        console.log('lose')
        reset();
    }
}