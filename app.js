const username = document.getElementById("name");
const enterBtn = document.getElementById("enter-btn");
const welcome = document.getElementById("welcome");
const imageContainer = document.getElementById("image-container");
const playContainer = document.getElementById("playContainer");
const player = document.getElementById("player");
const startBtn = document.getElementById("startBtn");
const mySelected = document.querySelector(".my-selected");
const botSelected = document.querySelector(".bot-selected");
const pScore = document.getElementById("player-score");
const dScore = document.getElementById("draw-score");
const bScore = document.getElementById("bot-score");
const greet = document.querySelector(".greet");

let mSelected;

var playerScore = 0;
var botScore = 0;
var drawScore = 0;
var maxScore = 5;

const choices = ["rock", "paper", "scissor"];

play = () => {
  if (username.value === "") {
    alert("Please enter username");
    return;
  }

  alert(`Welcome ${username.value}`);

  welcome.classList.add("remove-screen");
  playContainer.classList.add("display-container");
  player.innerText = username.value;

  for (let i = 0; i < choices.length; i++) {
    const image = choices[i];

    const imageElement = document.createElement("img");
    imageElement.src = `./img/${image}.png`;

    imageElement.classList.add("images");
    imageElement.id = image;

    imageElement.addEventListener("click", myMove);

    imageContainer.appendChild(imageElement);
  }
};

botPlay = () => {
  let choiceIndex = Math.floor(Math.random() * choices.length);
  console.log(choiceIndex);
  botSelected.src = `./img/${choices[choiceIndex]}.png`;

  return (choiceIndex = choices[choiceIndex]);
};

myMove = (event) => {
  const selectedImage = event.target.id;

  mySelected.src = `./img/${selectedImage}.png`;
  mSelected = selectedImage;
};

start = () => {
  const botMove = botPlay();

  console.log(mSelected);

  switch (mSelected) {
    case "rock":
      if (botMove === mSelected) {
        console.log("draw");
        drawScore += 1;
      } else if (botMove === "paper") {
        console.log("Bot win");
        botScore += 1;
      } else {
        console.log("You win!");
        playerScore += 1;
      }
      break;
    case "paper":
      if (botMove === mSelected) {
        console.log("draw");
        drawScore += 1;
      } else if (botMove === "scissor") {
        console.log("Bot win");
        botScore += 1;
      } else {
        console.log("You win");
        playerScore += 1;
      }
      break;
    case "scissor":
      if (botMove === mSelected) {
        console.log("draw");
        drawScore += 1;
      } else if (botMove === "rock") {
        console.log("Bot win");
        botScore += 1;
      } else {
        console.log("You win");
        playerScore += 1;
      }
      break;
    default:
      alert("Please pick a Move");
  }

  dScore.innerHTML = drawScore;
  pScore.innerHTML = playerScore;
  bScore.innerHTML = botScore;

  checkWinner();
};

playAgainButton = () => {
  const button = document.createElement("button");
  button.textContent = "play again";
  button.classList.add("play-again");
  button.id = "play-again";

  button.addEventListener("click", playAgain);

  greet.appendChild(button);
};

checkWinner = () => {
  if (playerScore === maxScore) {
    const greetings = document.createElement("h1");
    greetings.textContent = `${username.value} won!`;
    greet.appendChild(greetings);
    document.querySelector(".img-wrapper").classList.add("flash-messages");
    playAgainButton();
  }

  if (botScore === maxScore) {
    const greetings = document.createElement("h1");
    greetings.textContent = "Bot won!";
    greet.appendChild(greetings);

    const gameOver = document.createElement("p");
    gameOver.textContent = "Game Over!";
    greet.appendChild(gameOver);

    document.querySelector(".img-wrapper").classList.add("flash-messages");
    playAgainButton();
  }
};

playAgain = () => {
  window.location.reload();
};

startBtn.addEventListener("click", start);
enterBtn.addEventListener("click", play);
