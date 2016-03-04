function doStuff() {
 document.getElementById("look").style.backgroundColor = "#000033";
}
function doStuff2() {
 document.getElementById("look").style.backgroundColor = "#CCCCFF";
}

var playerWins = 0;
var cpuWins = 0;
var ties = 0;

var cpu = [];

function enemy(cpu){
// var cpu = Math.floor(Math.random()*3);
 if (cpu == 0) {
  document.getElementById("q").innerHTML = "<br><img src=rock.png><br><br>";
  return cpu;
 } else if (cpu == 1) {
  document.getElementById("q").innerHTML = "<br><img src=paper.png><br><br>";
  return cpu;
 } else if (cpu == 2) {
  document.getElementById("q").innerHTML = "<br><img src=scissor.png><br><br>";
 return cpu;
 }
}


function maChoice(a){
 var mow = Math.floor(Math.random()*3);
 enemy(mow);

 if (a == 0 && mow == 0){
 document.getElementById("d").innerHTML = "<br><img src=rock.png><br>";
 document.getElementById("e").innerHTML = "<p>You Tied!</p>";
 ties += 1;
 document.getElementById("ties").innerHTML = "Ties:" + ties;

 }
 else if (a == 1 && mow == 0){
 document.getElementById("d").innerHTML = "<br><img src=paper.png><br>";
 document.getElementById("e").innerHTML = "<p>You Win!</p>";
 playerWins += 1;
 document.getElementById("playerWins").innerHTML = "Your Wins:" + playerWins;
 }
 else if (a == 2 && mow == 0){
 document.getElementById("d").innerHTML = "<br><img src=scissor.png><br>";
 document.getElementById("e").innerHTML = "<p>You Lose!</p>";
 cpuWins += 1;
 document.getElementById("cpuWins").innerHTML = "Enemy Wins:" + cpuWins;
 }
 else if (a == 0 && mow == 1){
 document.getElementById("d").innerHTML = "<br><img src=rock.png><br>";
 document.getElementById("e").innerHTML = "<p>You Lose!</p>";
 cpuWins += 1;
 document.getElementById("cpuWins").innerHTML = "Enemy Wins:" + cpuWins;
 }
 else if (a == 1 && mow == 1){
 document.getElementById("d").innerHTML = "<br><img src=paper.png><br>";
 document.getElementById("e").innerHTML = "<p>You Tied!</p>";
 ties += 1;
 document.getElementById("ties").innerHTML = "Ties:" + ties;
 }
 else if (a == 2 && mow == 1){
 document.getElementById("e").innerHTML = "<p>You Win!</p>";
 document.getElementById("d").innerHTML = "<br><img src=scissor.png><br>";
 playerWins += 1;
 document.getElementById("playerWins").innerHTML = "Your Wins:" + playerWins;
 }
 else if (a == 0 && mow == 2){
 document.getElementById("d").innerHTML = "<br><img src=rock.png><br>";
 document.getElementById("e").innerHTML = "<p>You Win!</p>";
 playerWins += 1;
 document.getElementById("playerWins").innerHTML = "Your Wins:" + playerWins;
 }
 else if (a == 1 && mow == 2){
 document.getElementById("d").innerHTML = "<br><img src=paper.png><br>";
 document.getElementById("e").innerHTML = "<p>You Lose!</p>";
 cpuWins += 1;
 document.getElementById("cpuWins").innerHTML = "Enemy Wins:" + cpuWins;
 }
 else if (a == 2 && mow == 2){
 document.getElementById("e").innerHTML = "<p>You Tied!</p>";
 document.getElementById("d").innerHTML = "<br><img src=scissor.png><br>";
 ties += 1;
 document.getElementById("ties").innerHTML = "Ties:" + ties;
 }
}

//function checkWin(){
// if (cpu == 0 && a == 0){
// document.getElementById("e").innerHTML = "<p>You Tied!</p>";
// }else if (cpu == 0 && a == 1){
// document.getElementById("e").innerHTML = "<p>You Win!</p>";
// }else if (cpu == 0 && a == 2){
// document.getElementById("e").innerHTML = "<p>You Lose!</p>";
// }else if (cpu == 1 && a == 0){
// document.getElementById("e").innerHTML = "<p>You Lose!</p>";
// }else if (cpu == 1 && a == 1){
// document.getElementById("e").innerHTML = "<p>You Tied!</p>";
// }else if (cpu == 1 && a == 2){
// document.getElementById("e").innerHTML = "<p>You Win!</p>";
// }else if (cpu == 2 && a == 0){
// document.getElementById("e").innerHTML = "<p>You Win!</p>";
// }else if (cpu == 2 && a == 1){
// document.getElementById("e").innerHTML = "<p>You Lose!</p>";
// }else if (cpu == 2 && a == 2){
// document.getElementById("e").innerHTML = "<p>You Tied!</p>";
// }
//}

