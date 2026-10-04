let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

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

    document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
    
    
}

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} , Loses: ${score.loses} , Ties: ${score.ties}`;

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
