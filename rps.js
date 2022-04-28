
//THE PLAYERS

//the player = the value of the button pressed
const thrownChoice = ["Lapis", "Papyrus", "Scalpellus"];
let player = " ";

const computer = computerChooses();

let winner = " ";


function throwRock(){
	let useRock = document.getElementById("rock").innerText;
	player = useRock;
	// console.log(typeof(player))
	document.querySelector(".playerToken").innerHTML = "Human:  " + player;
	mainProgram()
}

document.getElementById("rock").onclick = throwRock;

function throwPaper(){
	let usePaper = document.getElementById("paper").innerText;
	player = usePaper;
	// console.log(typeof(player))
	document.querySelector(".playerToken").innerHTML = "Human:  " + player;
	mainProgram()
}

document.getElementById("paper").onclick = throwPaper;


function throwScissors(){
	let useScissors = document.getElementById("scissors").innerText;
	//console.log(useScissors);
	//result = document.querySelector(".result");
	player = useScissors;
	// console.log(typeof(player))
	document.querySelector(".playerToken").innerHTML = "Human:  " + player;
	mainProgram();
}

document.getElementById("scissors").onclick = throwScissors;


//The random index generated
function computerChooses() {
	randNum = Math.floor(Math.random() * thrownChoice.length);
	return thrownChoice[randNum];
}
computerChooses();

//Print the choices
document.querySelector(".computerToken").innerHTML = "Computer:  " + computer;
document.querySelector(".playerToken").innerHTML = "Human:  " + player;

//Comparison function
let flag = "";
function compareChoices(computer,player,thrownChoice){
	//If the computer is Rock
if (computer === thrownChoice[0]) {
	if (player === thrownChoice[1]) {
		flag = "loss";
	} else if (player === thrownChoice[2]) {
		flag ="win";
	} else if (computer === player){
		flag = "tie";
	}
}
//If the computer is Paper
else if (computer === thrownChoice[1]) {
	if (player === thrownChoice[0]) {
		flag = "win";
	} else if (player === thrownChoice[2]) {
		flag = "loss";
	}else if (computer=== player){
		flag = "tie";
	}
	}
//If the computer is Scissors
else if (computer === thrownChoice[2]) {
	if (player === thrownChoice[0]) {
		flag ="loss";
	} else if (player === thrownChoice[1]) {
		flag = "win";
	} else if (computer === player){
		flag = "tie";
	}
	}return (flag)
}

//Compare to see winner
function mainProgram(){
compareChoices(computer,player,thrownChoice);
if (flag === "win") {
	document.("#win").innerHTML =  "Winner: The Computer";
} else if (flag === "loss") {
	document.querySelector("#win").innerHTML = "Winner: The Human";
} else if (flag === "tie") {
	document.querySelector("#win").innerHTML = "There was a tie";
}
}

