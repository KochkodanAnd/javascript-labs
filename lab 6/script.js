let levels = {
    a: {
        min: 7,
        grid: [
            [0, 1, 0, 0, 1],
            [1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1]
        ]
    },

    b: {
        min: 8,
        grid: [
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 1, 1, 1, 1],
            [1, 0, 1, 0, 0]
        ]
    },

    c: {
        min: 9,
        grid: [
            [1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1],
            [1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0]
        ]
    }
};

let currentGrid = [];
let startGrid = [];
let currentLevel = "";
let moves = 0;

let board = document.getElementById("board");
let movesText = document.getElementById("moves");
let minimumText = document.getElementById("minimum");
let message = document.getElementById("message");

function copyGrid(grid) {
    return grid.map(row => [...row]);
}

function startGame(level) {
    currentLevel = level;
    currentGrid = copyGrid(levels[level].grid);
    startGrid = copyGrid(levels[level].grid);

    moves = 0;
    movesText.textContent = moves;
    minimumText.textContent = levels[level].min;
    message.textContent = "";

    drawBoard();
}

function restartGame() {
    if (currentLevel === "") {
        alert("Choose level first");
        return;
    }

    currentGrid = copyGrid(startGrid);
    moves = 0;
    movesText.textContent = moves;
    message.textContent = "";

    drawBoard();
}

function drawBoard() {
    board.innerHTML = "";

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            let cell = document.createElement("div");

            cell.className = "cell";

            if (currentGrid[row][col] === 1) {
                cell.classList.add("on");
            }

            cell.onclick = function () {
                clickCell(row, col);
            };

            board.appendChild(cell);
        }
    }
}

function clickCell(row, col) {
    change(row, col);
    change(row - 1, col);
    change(row + 1, col);
    change(row, col - 1);
    change(row, col + 1);

    moves++;
    movesText.textContent = moves;

    drawBoard();
    checkWin();
}

function change(row, col) {
    if (row < 0 || row >= 5 || col < 0 || col >= 5) {
        return;
    }

    currentGrid[row][col] = currentGrid[row][col] === 1 ? 0 : 1;
}

function checkWin() {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (currentGrid[row][col] === 1) {
                return;
            }
        }
    }

    message.textContent = "You win! Moves: " + moves;
}
