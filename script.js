let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0,
   
};


let streak = 0;
updateScore();

function playGame(playerMove) {
    if (playerMove === 'Rock') {
        pickComputerMove();
        if (computerMove === 'Rock') {
            result = 'Tie.'
        }
        else if (computerMove === 'Paper') {
            result = 'You lose.'
        }
        else {
            result = 'You Win.'
        }
    }
    else if (playerMove === 'Paper') {
        pickComputerMove();
        if (computerMove === 'Rock') {
            result = 'You Win.'
        }
        else if (computerMove === 'Paper') {
            result = 'Tie.'
        }
        else {
            result = 'You lose.'
        }
    }
    else {
        pickComputerMove();
        if (computerMove === 'Rock') {
            result = 'You lose.'
        }
        else if (computerMove === 'Paper') {
            result = 'You Win.'
        }
        else {
            result = 'Tie.'
        }
    }
    if (result === 'You Win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.loses += 1
    }
    else {
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = ` You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
    
    if (result === 'You Win.') {
        document.querySelector('.streak').innerHTML = `${streak += 1} Wins in a row!`;
    }
    else if (result === 'You lose.') {
        document.querySelector('.streak').innerHTML = `You lost ! Streak reset.`;
        streak = 0;
    }
    else {
        document.querySelector('.streak').innerHTML = `Tie ! Streak reset.`;
        streak = 0;
    }
}
function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} , Losses: ${score.loses} , Ties: ${score.ties}`;

}


function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = `Rock`
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = `Paper`
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = `Scissors`
    }
    console.log(computerMove);
    return computerMove;
}

function resetScore(){
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    streak = 0;
    document.querySelector('.streak').innerHTML = '';
    updateScore();
}
