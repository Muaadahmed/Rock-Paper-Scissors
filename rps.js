// Round count

let count = 0;

//Player score

let playerCount = 0;

// Computer score

let computerCount = 0;

// Number of pairs of elements in the faceOff div

let result_count = 1;

//selecting faceOff div

let faceOff;

// initialize clicked; later on becomes 1, 2, or 3 depending on which button wwas clicked
// used in faceOffFunction

let clicked = 0;

// works in conjunction with clicked; if clicked is 1 then playerChoice is rock
//also used in faceOffFunction

let playerChoice;


//Results of the winnerDisplay function are displayed in this div
const opponents = document.querySelector('.opponents');


let winner_text_display = document.createElement('h1');


const buttons = document.querySelector('.buttons');

// Results of the computer

function computerPlay(){
    let num = Math.floor(Math.random() * 3 + 1); 
    return (num === 1) ? "Rock": (num === 2) ? "Paper": "Scissors";
}

// determines who wins each round

function round(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        computerCount++;
        updateComputerScore();
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        playerCount++;
        updatePlayerScore();
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        playerCount++;
        updatePlayerScore();
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        computerCount++;
        updateComputerScore();
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        playerCount++
        updatePlayerScore();
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        computerCount++;
        updateComputerScore();
    } 
}

// update score to the Score board

function updatePlayerScore(){
    const playerScoreBoard = document.querySelector('.player_default');
    playerScoreBoard.textContent = playerCount;
}

function updateComputerScore(){
    const computerScoreBoard = document.querySelector('.computer_default');
    computerScoreBoard.textContent = computerCount;
}

// Show computer results in the UI

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

// Handles all the button click events

function game(){
    const rock_button = document.querySelector('.fa-hand-rock');
    const paper_button = document.querySelector('.fa-hand-paper');
    const scissors_button = document.querySelector('.fa-hand-scissors');

    faceOff = document.querySelector('.faceOff');
    
    rock_button.addEventListener('click', faceOffFunction);

    paper_button.addEventListener('click', faceOffFunction);

    scissors_button.addEventListener('click', faceOffFunction);
}

// helper functions that detect which of the 3 buttons was clicked 

function rockBtnClicked(){
    clicked = 1;
}
function paperBtnClicked(){
    clicked = 2;
}
function scissorsBtnClicked(){
    clicked = 3;
}

//shows results of the player and computer each round in the UI; under faceoff heading

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
            winnerDisplay(player);
        } else if (computerCount > playerCount){
            let artificialInteligence = "computer"
            winnerDisplay(artificialInteligence);
        } else {
            let draw = "NO ONE";
            winnerDisplay(draw);
        }
    }
}

//Winner of the game displayed in the UI

function winnerDisplay(winner){
    buttons.style.display = 'none';
    winner_text_display.textContent = `!!! ${winner.toUpperCase()} WINS !!!`;
    opponents.appendChild(winner_text_display);
}

game();