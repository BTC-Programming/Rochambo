/* Final Code */ 
var rpsWords = ["rock", "paper", "scissors"];
var player = ["You","I"];
var setWinner = [[0,1,1], [0,2,0], [1,0,0], [1,2,1], [2,1,0], [2,0,1]];

main();

function main(){
	var outOf = prompt("Best out of (odd number)?");
	if (outOf % 2 == 0) {
		alert("Choose an odd number!")
		main();
	}
	var turns = 0;
	var scoreKeeper = [0,0];
	for (var turn = 0; turn < outOf; turn ++) {
		var pChoice = userTurn();
		if (pChoice == "q") {
			turn = outOf;
		}
		else {
			var cChoice = cpuTurn();
		}
		if (pChoice == cChoice) {
			alert("We both chose " + rpsWords[cChoice]);
			turn--;
		}
		else {
			var winner = turnWinner(cChoice, pChoice);
			alert(player[winner]+" won that round!");
			updateScore(winner);
		}
	}
	gameWinner();

	function userTurn() {
		pChoice = prompt ("You're up: [r] ock, [p] aper or [s] cissors, or [q] to quit.");
		var rpsWords = ["rock", "paper", "scissors"];
		// add validation: make sure it's only one of these three
		if (pChoice == "q") {
			return "q";
		}
		else {
			return letter2Number(pChoice);
		}
	}

	function letter2Number(letter){
		var rpsWords = ["rock", "paper", "scissors"];
		for (var i = 0; i < rpsWords.length; i++){
			if (letter == rpsWords[i][0]) {
				return i;
			}
		}
		alert("Bad input. Resubmit.");
		userTurn();
		return -1;
	}

	function cpuTurn() {
		cChoice = Math.floor(Math.random() * 3);
		alert("CPU chose " + rpsWords[cChoice]);
		return cChoice;
	}

	function turnWinner(cChoice, pChoice) {
		for (let index = 0; index < 6; index ++) {
			if (setWinner[index][0] == pChoice && setWinner[index][1] == cChoice) {
				return setWinner[index][2];
			}
		}
		return -1;
	}

	function updateScore(winner) {
		scoreKeeper[winner]++;
	}

	function gameWinner() {
		alert("You won "+scoreKeeper[0]+" rounds and I won "+scoreKeeper[1]+" rounds.");
		if (scoreKeeper[0] < scoreKeeper[1]) {
			alert("I won!");
		}
		else alert ("You won!");
		if (confirm("Play again?") == true) main();
	}
}
