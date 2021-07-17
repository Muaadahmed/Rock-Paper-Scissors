let count = 0;
let playerCount = 0;
let computerCount = 0;
let result_count = 1;
let faceOff;
let clicked = 0;
let playerChoice;

const rock_button = document.querySelector('.fa-hand-rock');
const paper_button = document.querySelector('.fa-hand-paper');
const scissors_button = document.querySelector('.fa-hand-scissors');

function computerPlay(){
    let num = Math.floor(Math.random() * 3 + 1); 
    return (num === 1) ? "Rock": (num === 2) ? "Paper": "Scissors";
}

function round(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        computerCount++;
        console.log("Computer Wins Round! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        playerCount++;
        console.log("Player Wins Round! Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        playerCount++;
        console.log("Player Wins Round! Paper beats Rock");
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        computerCount++;
        console.log("Computer Wins Round! Scissors beats Paper");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        playerCount++
        console.log("Player Wins Round! Scissors beats Paper");
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        computerCount++;
        console.log("Computer Wins Round! Rock beats Scissors");
    } else {
        console.log("Its A Draw !");
    }
}


function computer_results(computer){
    if(computer === 'Rock'){
        let c_element_creation = document.createElement('p');
        c_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-rock fa-4x"></i></button>');
        faceOff.appendChild(c_element_creation);

    } else if (computer === 'Paper'){
        let c_element_creation = document.createElement('p');
        c_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-paper fa-4x"></i></button>');
        faceOff.appendChild(c_element_creation);

    } else if (computer === 'Scissors'){
        let c_element_creation = document.createElement('p');
        c_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-scissors fa-4x"></i></button>');
        faceOff.appendChild(c_element_creation);
        
    }
}

function buttonMechanics(){

    faceOff = document.querySelector('.faceOff');
    
    rock_button.addEventListener('click', faceOffFunction);

    paper_button.addEventListener('click', faceOffFunction);

    scissors_button.addEventListener('click', faceOffFunction);
    
}

function rockBtnClicked(){
    clicked = 1;
}
function paperBtnClicked(){
    clicked = 2;
}
function scissorsBtnClicked(){
    clicked = 3;
}

function faceOffFunction(){
    if(faceOff.hasChildNodes() === true && result_count > 1){
        while(faceOff.firstChild){
            faceOff.removeChild(faceOff.firstChild);
        }
    }

    let p_element_creation = document.createElement('p');

    if(clicked == 1){
        p_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-rock fa-4x"></i></button>');
        playerChoice = "Rock";
    } else if (clicked == 2){
        p_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-paper fa-4x"></i></button>');
        playerChoice = "Paper";
    } else if (clicked == 3){
        p_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-scissors fa-4x"></i></button>');
        playerChoice = "Scissors";
    }

    faceOff.appendChild(p_element_creation);

    let computer = computerPlay();
    computer_results(computer);
    round(playerChoice, computer);
    result_count++;
}

function game(){
    buttonMechanics();
    if(playerCount == 5){
        console.log("Player Wins !!!");
    } else if (computerCount == 5){
        console.log("Computer Wins !!!");
    } else {
        console.log("Its a draw");
    }

    /*
    while(count <= 5){
        let player = prompt("choose rock or paper or scissors");
        let computer = computerPlay();
        console.log(round(player, computer));
        count++;
        console.log("Current Player Score: " + playerCount);
        console.log("Current Computer Score: " + computerCount);
    }
    *
    if(playerCount > computerCount){
        console.log("Player Wins !!!");
    } else if (computerCount > playerCount){
        console.log("Computer Wins !!!");
    } else {
        console.log("Its a draw");
    }
    */
}

game();