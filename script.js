let currentPlayer = "X";
let nextPlayer = "O";

let playerXSelections = new Array();
console.log(playerXSelections);
let playerOSelections = new Array();
console.log(playerOSelections);

const winningCombinations = [
    {one: [1, 2, 3]},
    {two: [4, 5, 6]},
    {three: [7, 8, 9]},
    {four: [1, 4, 7]},
    {five: [2, 5, 8]},
    {six: [3, 6, 9]},
    {seven: [1, 5, 9]},
    {eight: [3, 5, 7]}
]

function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
}

function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
    }
}

function checkWinner {
    // Check if player has all values of each combination
    winningCombinations.forEach()
    matches = 0;


      for each cell in combination
        if player has cell
          matches++
        else break // go to the next combination
      if there are 3 matches
        return true
  
    // if we made it through each combo without returning true,
    // then there were no matches and player did not win
    return false
  }

handleClick = function (event) {
    let cell = event.target


    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));

    if(checkWinner(playerSelections)) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
      }


    if (checkDraw()) {
        alert("Draw!");
        resetGame();
    }
    // Swap players
    currentPlayer = nextPlayer;
    console.log(cell.id);
}

let cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}