let count = 0;
let playerCount = 0;
let computerCount = 0;
let player_result_count = 0;
let computer_result_count = 0;
let result_count = 1;
let faceOff;

function computerPlay(){
    let num = Math.floor(Math.random() * 3 + 1); 
    return (num === 1) ? "Rock": (num === 2) ? "Paper": "Scissors";
}

function round(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        computerCount++;
        console.log("Computer Wins Round! Paper beats Rock");
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
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        playerCount++;
        console.log("Player Wins Round! Rock beats Scissors");
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

function game(){
    faceOff = document.querySelector('.faceOff');
    const rock_button = document.querySelector('.fa-hand-rock');
    const paper_button = document.querySelector('.fa-hand-paper');
    const scissors_button = document.querySelector('.fa-hand-scissors');
    
    rock_button.addEventListener('click', () => {
        // put these parts in functions and then try to call them in round function use round as the event listener function
        if(faceOff.hasChildNodes() === true && result_count > 1){
            while(faceOff.firstChild){
                faceOff.removeChild(faceOff.firstChild);
            }
        }
        let p_element_creation = document.createElement('p');
        p_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-rock fa-4x"></i></button>');
        faceOff.appendChild(p_element_creation);
        
        let computer = computerPlay();
        computer_results(computer);
        result_count++;
      
    });

    paper_button.addEventListener('click', () => {

        if(faceOff.hasChildNodes() === true && result_count > 1){
            while(faceOff.firstChild){
                faceOff.removeChild(faceOff.firstChild);
            }
        }
        let p_element_creation = document.createElement('p');
        p_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-paper fa-4x"></i></button>');
        faceOff.appendChild(p_element_creation);
        
        let computer = computerPlay();
        computer_results(computer);
        result_count++;
        
    });

    scissors_button.addEventListener('click', () => {

    });
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
//How to get the buttons to have their respective icons with the same function
function faceOffFunction(){
    if(faceOff.hasChildNodes() === true && result_count > 1){
        while(faceOff.firstChild){
            faceOff.removeChild(faceOff.firstChild);
        }
    }
    let p_element_creation = document.createElement('p');
    p_element_creation.insertAdjacentHTML('afterbegin','<button><i class="far fa-hand-scissors fa-4x"></i></button>');
    faceOff.appendChild(p_element_creation);

    let computer = computerPlay();
    computer_results(computer);
    result_count++;
    
}
game();