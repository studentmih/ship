var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while(isSunk == false){
	guess = prompt("Ready,aim,fire!(enter a number from 0-6:");
	if(guess < 0 || guess > 6){
		alert("please enter a valid cell number");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			alert("击杀!");
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				alert("boom!");
			}
		}else{
			alert("MISS");
		}
	}
}
var stats = "你使用了" + guesses + "击沉了这艘船" + "你的概率是" + (3/guesses);
alert(stats); 