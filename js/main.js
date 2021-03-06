let game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  var canvas = createCanvas(700, 400);
  canvas.parent('sketch-holder');
  game.setupGame();
}

function draw() {
  if (game.gameStart == false) {
    rect(59, 40, 600, 330, 10, 10);
    fill(00, 31, 130);

    textFont('Open Sans');
    textSize(14);
    text(
      `You have reached the offices of Dunder Mifflin Scranton. Currently the entire staff is out doing the Michael Scott D.M.S.M.P.M.C. Rabies Awareness Pro-Am Fun Run Race.`, 90, 80, 550, 400);
    textAlign(CENTER);
    textFont('Anton');
    textSize(22);
    text('FOR THE CURE', 360, 170);
    textFont('Open Sans');
    textSize(18);
    text(
      `Avoid the hurdles and collect prizes to earn points! See how high you can get your score!`, 90, 200, 550, 400);
    textAlign(CENTER);
    rect(80, 260, 550, 60, 10, 10);
    textFont('Anton');
    fill(255, 255, 255);
    text('Press enter to jump into the race!', 120, 280, 480, 300);
  }

  if (game.gameStart == true) {
    clear();
    game.drawGame();
  }

  if (game.gameOver == true) {
    frameRate(0);
    textAlign(LEFT);
    rect(59, 40, 600, 330, 10, 10);
    fill(00, 31, 130);

    textFont('Open Sans');
    textSize(24);
    for (let i = 0; i < game.endGameNames.length; i++) {
      if (game.level === i + 1) {
        text(`Dear ${game.endGameNames[i]},`, 90, 80);
      }
    }
    text('You have been terminated for:', 90, 110);
    for (let i = 0; i < game.endGameReasons.length; i++) {
      if (game.level === i + 1) {
        text(`${game.endGameReasons[i]}`, 90, 150);
      }
    }
    rect(80, 260, 550, 60, 10, 10);
    textFont('Anton');
    fill(255, 255, 255);
    text('Click to restart your career as a temp', 120, 300);
  }
}

function keyPressed() {
  if (keyCode === 13) {
    game.player.jump();
  }
  if (keyCode === 13 && game.gameStart == false) {
    console.log('start game clicked');
    game.gameStart = true;
    game.themeSong.play();
    game.themeSong.loop();
  }
}

function mouseClicked() {
  if (
    mouseX > 80 &&
    mouseX < 630 &&
    mouseY > 260 &&
    mouseY < 320 &&
    game.gameOver == true
  ) {
    console.log('restart clicked');
    game.gameOver = false;
    game.gameStart = true;
    frameRate(60);
    game.lives = 5;
    game.points = 0;
    game.level = 1;
    document.querySelector('.lives').innerText = game.lives;
    document.querySelector('.points').innerText = game.points;
  }
}
