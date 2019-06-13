alert("Play Rock Paper Scissors with me! Choose q for quit.");
playAgain="y";
while (playAgain == "y"){
choice=prompt("Enter rock, paper or scissors.");
rps(choice);
}
alert("Thank you for playing!");

function rps (choice){
switch(choice) {
    case "rock":
        alert("paper. I win!")
        break;
    case "paper":
        alert("scissors. I win!")
        break;
    case "scissors":
        alert("rock. I win!")
        break;
	case "q":
	playAgain="n";
	break;
	default:
		alert("No. Enter rock, paper or scissors.");
	}
}


