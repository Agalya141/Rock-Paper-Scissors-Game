let computerMove = '';
let result = '';
function playGame(playerMove) {
    if (playerMove === 'Rock') {
        pickComputerMove();
        if (computerMove === 'Rock') {
            result = 'Tie. '
        }
        else if (computerMove === 'Paper') {
            result = 'You lose.'
        }
        else {
            result = 'You win. '
        }
        alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. ${result}`);
    }
    else if (playerMove === 'Paper') {
        pickComputerMove();
        if (computerMove === 'Rock') {
            result = 'You Win. '
        }
        else if (computerMove === 'Paper') {
            result = 'Tie.'
        }
        else {
            result = 'You lose. '
        }
        alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. ${result}`);
    }
    else {
        pickComputerMove();
        if (computerMove === 'Rock') {
            result = 'You lose. '
        }
        else if (computerMove === 'Paper') {
            result = 'You Win'
        }
        else {
            result = 'Tie. '
        }
        alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. ${result}`);
    }
}
function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = `Rock`
    }
    else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = `Paper`
    }
    else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = `Scissors`
    }
    console.log(computerMove);
    return computerMove;
}
