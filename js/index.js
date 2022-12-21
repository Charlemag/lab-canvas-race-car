const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const backgroundImg = new Image();
backgroundImg.src = '../images/road.png';

let raceCar = new Image ();
carImage.src = '../images/car.png'

let intervalId;

class CarPlayer {
  constructor(x, y, width, height) {
    this.carX = x;
    this.carY = y;
    this.width = width;
    this.height = height;
  }

  moveLeft() {
    this.carX -= 20;
  }

  moveRight() {
    this.carX += 20;
  }

  collisionCheck(Wall) {
    if (
      this.carX < Wall.carX + Wall.width &&
      this.carX + this.width > Wall.carX &&
      this.carY < Wall.carY + Wall.height &&
      this.carY + this.height > Wall.carY
    ) {
      return true;
    } else {
      return false;
    }
  }

  drawCar() {
    ctx.drawImage(carImg, this.carX, this.carY, 50, 75);
  }
}

class Wall extends CarPlayer {

  wallDown() {
    this.carY += 5;
  }

  drawWall() {
    ctx.fillRect(this.carX, this.carY, this.width, this.height);
  }
}

const car = new CarPlayer(canvas.width / 2 - 25, canvas.height - 80, 50, 75);
let clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      car.moveLeft();
      break;

    case "ArrowRight":
      car.moveRight();
      break;
  }
});

let wallCount = 0;
let framecount = 0;
let wallArray = [];
let scoreElement = document.getElementById("score");
let scoreValue = 0;

let animationLoop = () => {
  framecount++;

  if (framecount % 60 == 0) {
    let leftWall =  new Wall(Math.random()*300, Math.random()*100, Math.random()*200,20);
    wallArray.push(leftWall);
    scoreValue++;
    scoreElement.innerHTML = scoreValue;
  }

  clearCanvas();  
  ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height); 

  for (let i = 0; i < wallArray.length; i++) {
    wallArray[i].wallDown();
    if (car.collisionCheck(wallArray[i])) {
      clearInterval(intervalId);
    }
    wallArray[i].drawWall();
  }

  car.drawCar();
};

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    intervalId = setInterval(animationLoop, 16);
  }
};


//ctx:all the methods of 2D Shapes

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    setInterval(animationLoop, 16)
  }  
 
};
function startGame() {}
function startGame() {
  intervalId = setInterval(animationLoop, 16);
}
};
// How to set up a loop:
