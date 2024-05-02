//random numbers to generate
function generateRandomNumber(){

    let number = Math.floor(Math.random()* 6) + 1;
    return number;

}
let randomNumber = generateRandomNumber(); 
console.log(randomNumber); // generates for left img random number 

let randomNumber2 = generateRandomNumber(); 
console.log(randomNumber2); // generates for right img random number 

//for left dice img to change when value is set btw 1 to 6

let leftImg = document.querySelector(".img1"); // console.dir(leftImg); //Test Purpose
let leftImgSet =`./images/dice${randomNumber}.png`;

leftImg.setAttribute("src",leftImgSet);

// //for right dice img to change when value is set btw 1 to 6

let rightImg = document.querySelector(".img2"); // console.dir(leftImg); //Test Purpose
let rightImgSet =`./images/dice${randomNumber2}.png`;

rightImg.setAttribute("src",rightImgSet);

// who wins
let winner = document.querySelector("h1");
// console.dir(winner);
if(randomNumber > randomNumber2)
{
    winner.innerText = "Player 1 Wins";
}
else if(randomNumber < randomNumber2)
{
    winner.innerText = "Player 2 Wins";
}
else
{
    winner.innerText = "Draw!";
}

let button = document.querySelector("button");

button.addEventListener("click",()=>{
    location.reload();
});