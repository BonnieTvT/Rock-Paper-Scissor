// define variables
var player=document.querySelector('.player');
var computer=document.querySelector('.computer');
var winner=document.querySelector('.winner');
var pPoint=document.querySelector('.pPoint');
var cPoint=document.querySelector('.cPoint');
var computerChoice, random;
var pCount=0;
var cCount=0;
// ++, --
// check
console.log(player);
console.log(computer);
console.log(winner);
console.log(pPoint);
console.log(cPoint);
// action
function play(playerChoice){
	// alert(playerChoice);
	player.innerText="Player choice:"+playerChoice;
	// computer -> random -> 1==scissor,2==rock,3==paper
	random=Math.floor(Math.random()*3)+1;
	console.log(random);
	if(random==1){
		computerChoice="Scissor";
		computer.innerText="Computer choice: Scissor";
	}else if(random==2){
		computerChoice="Rock";
		computer.innerText="Computer choice: Rock";
	}else if (random==3){
		computerChoice="Paper";
		computer.innerText="Computer choice: Paper";
	}
	// player -> rock==scissor,paper==rock,scissor==paper
	if((playerChoice=="Rock" && computerChoice=="Scissor") || (playerChoice=="Paper" && computerChoice=="Rock") || (playerChoice=="Scissor" && computerChoice=="Paper")){
		winner.innerText="Winner:Player";
		pCount++;
		pPoint.innerText="Player:"+pCount;
	}else if(playerChoice==computerChoice){
		winner.innerText="Winner:Tie";
	}else{
		winner.innerText="Winner:Computer";
		cCount++;
		cPoint.innerText="Computer:"+cCount;
	}
}
function restart(){
	cPoint.innerText="Computer:0";
	cCount=0;
	pPoint.innerText="Player:0";
	pCount=0;
	player.innerText="Player choice:";
	computer.innerText="Computer choice:";
	winner.innerText="Winner:";
}