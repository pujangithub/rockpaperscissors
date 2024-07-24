let player1Score = 0;
let player2Score = 0;
let gameStarted = false;

function startGame() {
    gameStarted = true;
    document.querySelector('.start-button').style.display = 'none';
    document.querySelector('.game-container').style.backgroundColor = '#2196F3'; /* Blue background */
}

function playGame(player1Choice) {
    if (!gameStarted) {
        alert('Please start the game first!');
        return;
    }

    // Generate random choice for player 2
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const player2Choice = choices[randomIndex];

    // Determine the winner
    let result = '';
    if (player1Choice === player2Choice) {
        result = "It's a tie!";
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
    ) {
        result = 'Player 1 wins!';
        player1Score++;
    } else {
        result = 'Player 2 wins!';
        player2Score++;
    }

    // Update UI with results and scores
    document.getElementById('result').textContent = result;
    document.getElementById('player1score').textContent = `Player 1: ${player1Score}`;
    document.getElementById('player2score').textContent = `Player 2: ${player2Score}`;

    // Add shake animation to the clicked button
    const clickedButton = document.getElementById(player1Choice);
    clickedButton.classList.add('shake');

    // Remove animation after 0.5s
    setTimeout(() => {
        clickedButton.classList.remove('shake');
    }, 500);
}
