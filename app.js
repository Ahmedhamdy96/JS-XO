const boxes = document.querySelectorAll(".boxes div");
const currentTurnEl = document.getElementById("current-turn");

let currentTurn = "x";
let winner = false;
let counter = 0;

const colorWinner = (n1, n2, n3) => {
  boxes[n1].style.backgroundColor = "green";
  boxes[n2].style.backgroundColor = "green";
  boxes[n3].style.backgroundColor = "green";
};

const clearBoxes = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.backgroundColor = "";
  });
};

const updatePlayer = () => {
  currentTurnEl.innerHTML = `Player ${currentTurn} turn`;
};

const toggleTurn = () => {
  if (currentTurn === "x") {
    currentTurn = "o";
  } else {
    currentTurn = "x";
  }
};

const getWinner = () => {
  counter++;
  let plays = [];
  for (i = 1; i < 10; i++) {
    plays[i] = boxes[i - 1].innerHTML;
  }

  if (plays[1] == plays[2] && plays[2] == plays[3] && plays[1] != "") {
    winner = true;
    currentTurnEl.innerHTML = `player ${plays[1]} wins`;
    colorWinner(0, 1, 2);
  } else if (plays[4] == plays[5] && plays[5] == plays[6] && plays[4] != "") {
    winner = true;
    colorWinner(3, 4, 5);
    currentTurnEl.innerHTML = `player ${plays[4]} wins`;
  } else if (plays[7] == plays[8] && plays[8] == plays[9] && plays[7] != "") {
    winner = true;
    colorWinner(6, 7, 8);
    currentTurnEl.innerHTML = `player ${plays[7]} wins`;
  } else if (plays[1] == plays[4] && plays[4] == plays[7] && plays[1] != "") {
    winner = true;
    colorWinner(0, 3, 6);
    currentTurnEl.innerHTML = `player ${plays[1]} wins`;
  } else if (plays[2] == plays[5] && plays[5] == plays[8] && plays[2] != "") {
    winner = true;
    colorWinner(1, 4, 7);
    currentTurnEl.innerHTML = `player ${plays[2]} wins`;
  } else if (plays[3] == plays[6] && plays[6] == plays[9] && plays[3] != "") {
    winner = true;
    colorWinner(2, 5, 8);
    currentTurnEl.innerHTML = `player ${plays[3]} wins`;
  } else if (plays[1] == plays[5] && plays[5] == plays[9] && plays[1] != "") {
    winner = true;
    colorWinner(0, 4, 8);
    currentTurnEl.innerHTML = `player ${plays[1]} wins`;
  } else if (plays[3] == plays[5] && plays[5] == plays[7] && plays[3] != "") {
    winner = true;
    colorWinner(2, 4, 6);
    currentTurnEl.innerHTML = `player ${plays[3]} wins`;
  } else {
    draw = true;
    winner = false;
  }

  if (winner) {
    winner = false;
    plays = [];
    setTimeout(() => {
      clearBoxes();
      currentTurnEl.innerHTML = `Player ${currentTurn} turn`;
    }, 2000);
  }

  // detect draw
  if (counter === 9 && winner === false) {
    currentTurnEl.innerHTML = "Draw !";
    counter = 0;
    winner = false;
    plays = [];

    setTimeout(() => {
      clearBoxes();
      currentTurnEl.innerHTML = `Player ${currentTurn} turn`;
    }, 2000);
  }
};

const play = function () {
  if (this.innerHTML === "") {
    this.innerHTML = currentTurn;
    toggleTurn();
    updatePlayer();
  }
  getWinner();
};

boxes.forEach((box) => {
  box.addEventListener("click", play);
});
