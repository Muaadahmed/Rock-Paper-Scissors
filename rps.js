let count = 0;
let playerCount = 0;
let computerCount = 0;
let result_count = 1;
let faceOff;
let clicked = 0;
let playerChoice;

const opponents = document.querySelector('.opponents');
let winner_text_display = document.createElement('h1');


const buttons = document.querySelector('.buttons');

function computerPlay(){
    let num = Math.floor(Math.random() * 3 + 1); 
    return (num === 1) ? "Rock": (num === 2) ? "Paper": "Scissors";
}

function round(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        computerCount++;
        updateComputerScore();
        console.log("Computer Wins Round! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        playerCount++;
        updatePlayerScore();
        console.log("Player Wins Round! Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        playerCount++;
        updatePlayerScore();
        console.log("Player Wins Round! Paper beats Rock");
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        computerCount++;
        updateComputerScore();
        console.log("Computer Wins Round! Scissors beats Paper");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        playerCount++
        updatePlayerScore();
        console.log("Player Wins Round! Scissors beats Paper");
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        computerCount++;
        updateComputerScore();
        console.log("Computer Wins Round! Rock beats Scissors");
    } else {
        console.log("Its A Draw !");
    }
}

function updatePlayerScore(){
    const playerScoreBoard = document.querySelector('.player_default');
    playerScoreBoard.textContent = playerCount;
}

function updateComputerScore(){
    const computerScoreBoard = document.querySelector('.computer_default');
    computerScoreBoard.textContent = computerCount;
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

function game(){
    const rock_button = document.querySelector('.fa-hand-rock');
    const paper_button = document.querySelector('.fa-hand-paper');
    const scissors_button = document.querySelector('.fa-hand-scissors');

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
    if(count < 5){
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
        count++;
        faceOff.appendChild(p_element_creation);

        let computer = computerPlay();
        computer_results(computer);
        round(playerChoice, computer);
        result_count++; 
        
    } else {
        if(playerCount > computerCount){
            let player = "player"
            winnerOnConsole(player);
        } else if (computerCount > playerCount){
            let artificialInteligence = "computer"
            winnerOnConsole(artificialInteligence);
        } else {
            let draw = "NO ONE";
            winnerOnConsole(draw);
        }
    }
}

function winnerOnConsole(winner){
    console.log(`!!! ${winner.toUpperCase()} WINS !!!`);
    console.log("Current Player Score: " + playerCount);
    console.log("Current Computer Score: " + computerCount);
    buttons.style.display = 'none';
    winner_text_display.textContent = `!!! ${winner.toUpperCase()} WINS !!!`;
    opponents.appendChild(winner_text_display);
}

game();