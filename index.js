var a=Math.floor(Math.random() * 6)+1;
var b="images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",b);
var c=Math.floor(Math.random() * 6)+1;
var d="images/dice"+c+".png";
document.querySelectorAll("img")[1].setAttribute("src",d);
if(a>c){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(a<c){document.querySelector("h1").textContent="Player 2 wins";}
else document.querySelector("h1").textContent="TIE😂";