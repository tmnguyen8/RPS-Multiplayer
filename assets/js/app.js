// player enters their name
// players see available players
// click play to initiate the game
// player 1 select rock, paper or scissors
// notify player 1 has selected
// player 2 select rock, paper or scissors
// notify player 2 has selected
// display result of who wins
// keep track of how many each player wins (winCount)
// players see available players

// GLOBAL VARIABLES
// ***************************************************
// initialize firebase
var config = {
    apiKey: "AIzaSyBh8P6xa6Ln7RQnjfJBFH8caczJg2IIQmc",
    authDomain: "rpg-multiple-player.firebaseapp.com",
    databaseURL: "https://rpg-multiple-player.firebaseio.com",
    projectId: "rpg-multiple-player",
    storageBucket: ""
};

firebase.initializeApp(config);
// Create a variable to reference the database
var database = firebase.database();

// global object of player template
class player {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }
    doSomething () {
        console.log(`${this.name} is working`)
    }
};

// currentGame 

// FUNCTIONS
// ***************************************************
function displayPlayer(player) {
    var newPlayer = $(`
        <div class="player" data-name"${player.name}">${player.name}</div>
        <button class="play-game btn btn-secondary">Play</button>
    `);
    $(".available-player").append(newPlayer);
}

// EVENTS / EXECUTION
// ***************************************************
$(document).on("click", "#submit-btn", function(event){
    event.preventDefault();
    var newPlayer = new player($("#player-name").val().trim(), "available");
    displayPlayer(newPlayer)
});