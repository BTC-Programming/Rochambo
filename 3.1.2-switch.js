alert("Play Rock Paper Scissors with me! Choose q for quit.");
playAgain="y";
do {
choice=prompt("Enter rock, paper or scissors.");
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
    default:
        ("No. Enter rock, paper or scissors.")
    }
}
while (playAgain == "y");
alert ("Thanks for playing.");


