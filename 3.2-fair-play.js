// initialize variables
var hands=["rock","paper","scissors","stop"]; // array of values
var cpuNum=0;
var userNum=0;
var winner="";
var index=0;
var goodHand=false;
var userHand="";

// run program
do {
	cpuNum=Math.round(Math.random()*2); // computer picks 0-2
	userNum=getUserHand(hands);// user picks 0-2
	winner=evaluateHand(hands,cpuNum,userNum); // compare hands, like 01,20
	if (winner=="draw") {
		alert("Draw. Again!");
		}
	else if (winner=="you" || winner=="I"){
		alert("You picked "+hands[userNum]+". I picked "+hands[cpuNum]+" so "+winner+" won!");
		}
}
while (winner!="stop"); // until user enters stop.
alert("Thank you for playing!");

// get user input function
function getUserHand(hands) {
	goodHand=false;
	do {
		userHand=prompt("rock, paper, scissors, GO!");
		for(index=0;index<hands.length;index++){
			if (userHand==hands[index]) {
				goodHand=true;
				userNum=index;
			}
		}
		if (goodHand===false) {
			alert("invalid entry");
		}
	}
	while (goodHand===false);
	return userNum;
}

// evaluate winner function
function evaluateHand(hands,cpuNum,userNum){
	if (userNum==cpuNum){
		winner="draw";
	}
	else if (hands[userNum]=="stop"){
		winner="stop";
	}
	else {
		var hand=cpuNum.toString()+userNum.toString();
		switch (hand) {
			case "01":
				winner="you";
				break;
			case "02":
				winner="I";
				break;
			case "10":
				winner="I";
				break;
			case "12":
				winner="you";
				break;
			case "20":
				winner="you";
				break;
			case "21":
				winner="I";
				break;
		}
	}
	return winner;
}