let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = () => {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
    tile.addEventListener("click", selectTile);
  }
  setInterval(setMole, 800);
  setInterval(setPlant, 1300);
}

function randomNum() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    setTimeout(() => {
      location.reload();
    }, 3000);
    return;
  }
  if (currMoleTile) {
    // console.log(currMoleTile);
    currMoleTile.innerHTML = "";
  }
  const mole = document.createElement("img");
  mole.src = "/monty-mole.png";
  let num = randomNum();
  if (currPlantTile && currPlantTile.id === num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    // console.log(currMoleTile);
    currPlantTile.innerHTML = "";
  }
  const plant = document.createElement("img");
  plant.src = "/piranha-plant.png";
  let num = randomNum();
  if (currMoleTile && currMoleTile.id === num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this === currMoleTile) {
    score += 10;
    document.querySelector("#score").innerText = "Score " + score.toString();
  } else if (this === currPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER" + "\n " + "YOUR TOTAL SCORE IS : " + score.toString();
    gameOver = true;
  }
}
