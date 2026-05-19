let levelSelect = document.getElementById("level");
let colorSelect = document.getElementById("pixelColor");
let playButton = document.getElementById("playBtn");

let pointsText = document.getElementById("points");
let secondsText = document.getElementById("seconds");

let field = document.getElementById("field");
let pixel = document.getElementById("pixel");

let points = 0;
let seconds = 0;
let gameStarted = false;
let timerId;

function getLevelInfo() {
    if (levelSelect.value === "easy") {
        return {
            time: 4,
            size: 60
        };
    }

    if (levelSelect.value === "normal") {
        return {
            time: 3,
            size: 50
        };
    }

    if (levelSelect.value === "hard") {
        return {
            time: 2,
            size: 40
        };
    }
}

function showInfo() {
    pointsText.textContent = "Points: " + points;
    secondsText.textContent = "Seconds: " + seconds;
}

function randomPosition(size) {
    let maxX = field.clientWidth - size;
    let maxY = field.clientHeight - size;

    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);

    pixel.style.left = x + "px";
    pixel.style.top = y + "px";
}

function stopGame() {
    gameStarted = false;
    pixel.style.display = "none";
    clearInterval(timerId);

    alert("Game over! Your result: " + points);
}

function newRound() {
    clearInterval(timerId);

    let info = getLevelInfo();

    seconds = info.time;

    pixel.style.width = info.size + "px";
    pixel.style.height = info.size + "px";

    randomPosition(info.size);
    showInfo();

    timerId = setInterval(function () {
        seconds--;
        showInfo();

        if (seconds <= 0) {
            stopGame();
        }
    }, 1000);
}

function startGame() {
    if (levelSelect.value === "" || colorSelect.value === "") {
        alert("Choose difficulty and color first!");
        return;
    }

    points = 0;
    gameStarted = true;

    pixel.style.backgroundColor = colorSelect.value;
    pixel.style.display = "block";

    newRound();
}

playButton.onclick = function () {
    startGame();
};

pixel.onclick = function () {
    if (gameStarted === false) {
        return;
    }

    points++;
    newRound();
};
