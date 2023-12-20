let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function handleClick(index) {
  if (gameBoard[index] === "" && !checkWinner() && !isBoardFull()) {
    gameBoard[index] = currentPlayer;
    renderBoard();

    if (checkWinner()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
    } else if (isBoardFull()) {
      alert("It's a draw!");
      resetGame();
    } else {
      changePlayer();
    }
  }
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }

  return false;
}

function isBoardFull() {
  return !gameBoard.includes("");
}

function resetGame() {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  renderBoard();
}

function renderBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.textContent = gameBoard[index];
  });
}
