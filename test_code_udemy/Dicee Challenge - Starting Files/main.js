var randomNo1=Math.ceil(Math.random()*6);
console.log(randomNo1)
var imgStringSource1 = "./images/" + "dice"+randomNo1+".png"
document.querySelectorAll("img")[0].setAttribute("src", imgStringSource1)

var randomNo2=Math.ceil(Math.random()*6);
console.log(randomNo2)
var imgStringSource2 = "./images/" + "dice"+randomNo2+".png"
document.querySelectorAll("img")[1].setAttribute("src", imgStringSource2)

// Show who wins
if (randomNo1>randomNo2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNo1===randomNo2) {
    document.querySelector("h1").innerHTML = "Tie!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
