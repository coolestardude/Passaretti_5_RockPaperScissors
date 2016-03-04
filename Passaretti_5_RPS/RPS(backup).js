       function doStuff() {
          document.getElementById("look").style.backgroundColor = "#000033";
          }
       function doStuff2() {
          document.getElementById("look").style.backgroundColor = "#CCCCFF";
          }


var cpu = Math.floor(Math.random()*3);

if (cpu == 0) {
 document.write("<img src=rock.png>");
} else if (cpu == 1) {
 document.write("<img src=paper.png>");
} else if (cpu == 2) {
 document.write("<img src=scissor.png>");
}



function maChoice(a){
 if (a == 0) {
 document.getElementById("d").innerHTML = "<img src=rock.png>";
 } else if (a == 1) {
 document.getElementById("d").innerHTML = "<img src=paper.png>";
 } else if (a == 2) {
 document.getElementById("d").innerHTML = "<img src=scissor.png>";
 }
}


