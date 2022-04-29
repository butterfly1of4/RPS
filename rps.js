
//THE PLAYERS
const RPS = ["Lapis", "Papyrus", "Scalpellus"];
let player = " ";
let computer = " ";
let flag = " ";
let winner = " "

const win = document.querySelector("#win");
win.innerHTML = "Winner: " ;

const computerToken = document.querySelector(".computerToken");
computerToken.innerHTML = "Computer:  " + computer;

const playerToken = document.querySelector(".playerToken");
playerToken.innerHTML = "Human:  " + player;

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
	playerToken.innerHTML = "Human: " + player;
	computerToken.innerHTML = "Computer: " + computer;
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

	switch(flag){
		case "tie":
			winner = "Tie"
		break
		case "loss":
			winner = "Human"
		break
		case "win":
			winner = "Computer"
	}
		return (win.innerHTML="Winner: "+ winner);
	}


