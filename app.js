// console.log("hello!");

//1. catching the DOM for future use
var userScore=0;
var computerScore=0;

const userScore_span =document.getElementById('user-score');
const computerScore_span =document.getElementById('computer-score');

scoreBoard_div = document.querySelector('.score-board');
result_p = document.querySelector('.result >p');

const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');

//3. generate r,p,s randomly from computer
function getComputerChoice(){
    const choices=['r','p','s']; 
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
//6. making meaningful result statement
    function convertToWord(letter){
        if(letter==="r") return "Rock" ;
        if (letter==="p")return "Paper" ;
        return "Scissor"
    }


//5. increasing scores  
//7. fetching result statements
function win (userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord (userChoice)} beats  ${convertToWord (computerChoice)} , you win !!`;
    
    //8. 
    document.getElementById(userChoice).classList.add('green-glow');

    //9.
    setTimeout(function(){
    document.getElementById(userChoice).classList.remove('green-glow')
    },400);
}


function lose (userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord (userChoice)} looses to  ${convertToWord (computerChoice)} , you lost !!`;

    document.getElementById(userChoice).classList.add('red-glow');

    
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('red-glow')
        },400);
}

function draw (userChoice,computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord (userChoice)} =  ${convertToWord (computerChoice)} , its Draw !!`;
    document.getElementById(userChoice).classList.add('white-glow');

    
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('white-glow')
        },400);
}


//4 . making a game function to feth both scores ;also condition for winning , or draw
function game (userChoice){
    const computerChoice=getComputerChoice();
    switch (userChoice+computerChoice) {

        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);  
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

//2. adding click event listener
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