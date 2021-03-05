console.log("hello!");

//catching the DOM for future use
const userScore=0;
const computerScore=0;

const userScore_span =document.getElementById('user-score');
const computerScore_span =document.getElementById('computer-score');

scoreBoard_div = document.querySelector('.score-board');
scoreBoard_div = document.querySelector('.result');

const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');

//generate r,p,s randomly from computer
function getComputerChoice(){
    const choices=['r','p','s']; 
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
console.log(getComputerChoice);

//making a game function to feth both scores
function game (userChoice){
    const computerChoice=getComputerChoice();

    switch (userChoice+computerChoice) {

        case "rs":
        case "pr":
        case "sp":
            console.log("you win")  
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("you lost")
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Its a Draw !!!")
            break;
    }

}

//adding click event listener
function main(){
    rock_div.addEventListener('click', function (){
    game ('r');
});

    paper_div.addEventListener('click', function (){
    game ('p');
});

    scissor_div.addEventListener('click', function (){
    game ('s');
});
}
main();