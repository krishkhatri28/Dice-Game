var p1=Math.floor(Math.random()*6+1);
var p2=Math.floor(Math.random()*6+1);

while(p1===p2){
    p1=Math.floor(Math.random()*6+1);
}
if(p1==1){
    document.querySelector(".img1").src='images/dice1.png';
}
if(p1==2){
    document.querySelector(".img1").src='images/dice2.png';
}
if(p1==3){
    document.querySelector(".img1").src='images/dice3.png';
}
if(p1==4){
    document.querySelector(".img1").src='images/dice4.png';
}
if(p1==5){
    document.querySelector(".img1").src='images/dice5.png';
}
if(p1==6){
    document.querySelector(".img1").src='images/dice6.png';
}


if(p2==1){
    document.querySelector(".img2").src='images/dice1.png';
}
if(p2==2){
    document.querySelector(".img2").src='images/dice2.png';
}
if(p2==3){
    document.querySelector(".img2").src='images/dice3.png';
}
if(p2==4){
    document.querySelector(".img2").src='images/dice4.png';
}
if(p2==5){
    document.querySelector(".img2").src='images/dice5.png';
}
if(p2==6){
    document.querySelector(".img2").src='images/dice6.png';
}

var temp=document.querySelector("h1");
if(p1>p2){
    temp.innerHTML="Player 1 Wins";
}
else{
    temp.innerHTML="Player 2 Wins";
}