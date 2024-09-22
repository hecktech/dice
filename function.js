
var input1=prompt("Enter player 1 name ");
var player1name=input1||"Player 1"
document.querySelector(".one>h4").innerHTML=player1name;
var player2name=prompt("Enter player 2 name ");
document.querySelector(".two>h4").innerHTML=player2name;


function game(){

var player1 ="./images/dice"+(Math.floor(Math.random()*6)+1)+".png";
document.querySelector("img").setAttribute("src",player1);

var player2 ="./images/dice"+(Math.floor(Math.random()*6)+1)+".png";
document.querySelector(".dice2>img").setAttribute("src",player2);


if(player1>player2){
    document.querySelector("h1").innerHTML=" 🎉 "+player1name;
}
else if(player2>player1){
    document.querySelector("h1").innerHTML= player2name +" 🎉";
}
else{
    document.querySelector("h1").innerHTML=" Draw! ";
}

}
document.querySelector("button").addEventListener("click",game);