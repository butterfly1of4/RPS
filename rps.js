
//THE PLAYERS
const RPS = ["Lapis", "Papyrus", "Scalpellus"];
let player = " ";
let computer = " ";
let flag = " ";
let winner = " "
let pscore = 0;
let cscore = 0;
const win = document.querySelector("#win");
win.innerHTML = "Winner: " ;

const computerToken = document.querySelector(".computerToken");
computerToken.innerHTML = "Computer:  " + computer;

const playerToken = document.querySelector(".playerToken");
playerToken.innerHTML = "Human:  " + player;

const playScore = document.getElementById("playScore");
const compScore = document.getElementById("compScore");
playScore.innerHTML = "Score: " + pscore;
compScore.innerHTML = "Score: " + cscore;

//Choose Rock
const throwRock = ()=> {
	player = RPS[0]
	playerToken.innerHTML = "Human: " + player.toString();
	winCompare()
	return player
}
document.getElementById("rock").onclick = throwRock;

//Choose Paper
const throwPaper = ()=> {
	player = RPS[1]
	playerToken.innerHTML = "Human: " + player.toString();
	winCompare()
	return player
}
document.getElementById("paper").onclick = throwPaper;

//Choose Scissors
const throwScissors = ()=> {
	player = RPS[2]
	playerToken.innerHTML = "Human: " + player.toString();
	winCompare()
	return player
}
document.getElementById("scissors").onclick = throwScissors;

//Reset all
const reset = () => {
	player = " "
	computer = " "
	pscore = 0
	cscore = 0
	playerToken.innerHTML = "Human: " + player;
	computerToken.innerHTML = "Computer: " + computer;
	playScore.innerHTML = "Score: " + pscore;
	compScore.innerHTML = "Score: " + cscore;
}
document.getElementById("reset").onclick = reset;

//The random index generated
const computerChooses = () => {
	let randNum = Math.floor(Math.random() * RPS.length);
	computer = RPS[randNum]
	computerToken.innerHTML = "Computer: " + computer.toString();
	return computer
}


//Comparison function


//If the computer is Rock
const compareChoices = () => {
	// console.log(computer,player, flag)
	if (computer===player){
		flag= "tie"
	}
//If the computer is Rock
	if (computer === RPS[0]) {
		if (player === RPS[1]) {
			flag = "loss";
	} 	
		if (player === RPS[2]) {
			flag ="win";
	}   
}
//If the computer is Paper
else if (computer === RPS[1]) {
	if (player === RPS[0]) {
		flag = "win";
	} 
	if (player === RPS[2]) {
		flag = "loss";
	}
}
//If the computer is Scissors
else if (computer === RPS[2]) {
	if (player === RPS[0]) {
		flag ="loss";
	} 
	if (player === RPS[1]) {
		flag = "win";
	} 
	}
	return (flag, winner)	
}


//Compare to see winner
const winCompare = ()=> {
	computerChooses()
	compareChoices()
console.log(player,computer,winner)
	switch(flag){
		case "loss":
			winner = "Human"
			pscore+=1
		break
		case "win":
			winner = "Computer"
			cscore+=1 
			break
		case "tie":
			winner = "Tie"

	}
	console.log(pscore,cscore,winner)
return (	(win.innerHTML = "Winner: "+ winner),
(playScore.innerHTML = "Score: " + pscore),
(compScore.innerHTML = "Score: "+ cscore))
}




