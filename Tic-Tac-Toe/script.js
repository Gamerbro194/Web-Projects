let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;
let playerXWins = 0;
let playerOWins = 0;

const playerXWinsElement = document.getElementById("playerXWins");
const playerOWinsElement = document.getElementById("playerOWins");
const resetCounterButton = document.getElementById("reset-counter");

boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      checkWin();
      checkDraw();
      changeTurn();
    }
  });
});

resetCounterButton.addEventListener("click", resetCounter);

function changeTurn() {
  if (turn === "X") {
    turn = "O";
    document.querySelector(".bg").style.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0";
  }
}

function checkWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let v0 = boxes[winConditions[i][0]].innerHTML;
    let v1 = boxes[winConditions[i][1]].innerHTML;
    let v2 = boxes[winConditions[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = turn + " wins!";
      document.querySelector("#play-again").style.display = "inline";

      if (turn === "X") {
        playerXWins++;
        playerXWinsElement.innerText = playerXWins;
      } else {
        playerOWins++;
        playerOWinsElement.innerText = playerOWins;
      }

      for (let j = 0; j < 3; j++) {
        boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
        boxes[winConditions[i][j]].style.color = "#000";
      }
      return;
    }
  }
}

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });

    if (isDraw) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = "Draw";
      document.querySelector("#play-again").style.display = "inline";
    }
  }
}

document.querySelector("#play-again").addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  document.querySelector(".bg").style.left = "0";
  document.querySelector("#results").innerHTML = "";
  document.querySelector("#play-again").style.display = "none";

  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#fff";
  });
});

function resetCounter() {
  playerXWins = 0;
  playerOWins = 0;
  playerXWinsElement.innerText = playerXWins;
  playerOWinsElement.innerText = playerOWins;
}