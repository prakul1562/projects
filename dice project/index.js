var randomnumber1;
randomnumber1=Math.floor(6*(Math.random(randomnumber1)))+1;
//alert(randomnumber1);
var randomimagesource = "images\\dice" + randomnumber1 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);


var randomnumber2;

randomnumber2=Math.floor(6*(Math.random(randomnumber2)))+1;

var randomimagesource2 = "images\\dice" + randomnumber2 +".png"

var image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagesource2);


if(randomnumber1>randomnumber2){
    document.querySelector('h1').innerHTML='Player 1 wins';
}
else if(randomnumber1<randomnumber2){
    document.querySelector('h1').innerHTML='Player 2 wins'
}
else{
    document.querySelector('h1').innerHTML='Draw'

}