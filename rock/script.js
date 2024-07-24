let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1; // 1 for Player 1, 2 for Player 2

function startGame() {
    // Show game elements after clicking start button
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.displayresult').textContent = 'Player 1 vs Player 2';
    document.querySelector('.start-button').style.display = 'none'; // Hide start button
}

function playGame(player1Choice) {
    let player2Choice = generateRandomChoice(); // Player 2 choice is randomly generated

    // Determine winner
    let result = determineWinner(player1Choice, player2Choice);

    // Update display based on winner
    if (result === 'Player 1 wins') {
        player1Score++;
        document.querySelector('.displayresult').textContent = 'Player 1 wins!';
        document.querySelector('.all').classList.remove('turn-player1', 'turn-player2');
        document.querySelector('.all').classList.add('win-player1');
    } else if (result === 'Player 2 wins') {
        player2Score++;
        document.querySelector('.displayresult').textContent = 'Player 2 wins!';
        document.querySelector('.all').classList.remove('turn-player1', 'turn-player2');
        document.querySelector('.all').classList.add('win-player2');
    } else {
        document.querySelector('.displayresult').textContent = 'It\'s a tie!';
        document.querySelector('.all').classList.remove('turn-player1', 'turn-player2');
    }

    // Update scores displayed
    document.getElementById('player1score').textContent = player1Score;
    document.getElementById('player2score').textContent = player2Score;

    // Switch turns
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updateTurnIndicator(currentPlayer);
}

function generateRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player1, player2) {
    if (player1 === player2) {
        return 'Tie';
    } else if (
        (player1 === 'rock' && player2 === 'scissors') ||
        (player1 === 'paper' && player2 === 'rock') ||
        (player1 === 'scissors' && player2 === 'paper')
    ) {
        return 'Player 1 wins';
    } else {
        return 'Player 2 wins';
    }
}

function updateTurnIndicator(currentPlayer) {
    if (currentPlayer === 1) {
        document.querySelector('.all').classList.remove('win-player1', 'win-player2');
        document.querySelector('.all').classList.add('turn-player1');
        document.querySelector('.displayresult').textContent = 'Player 1\'s turn';
    } else {
        document.querySelector('.all').classList.remove('win-player1', 'win-player2');
        document.querySelector('.all').classList.add('turn-player2');
        document.querySelector('.displayresult').textContent = 'Player 2\'s turn';
    }
}
