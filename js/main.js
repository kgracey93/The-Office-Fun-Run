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
      textSize(18);
          text(`You have reached the offices of Dunder Mifflin Scranton. Currently the entire staff is out doing the Michael Scott D.M.S.M.P.M.C. Rabies Awareness Pro-Am Fun Run Race.`, 90, 80, 550, 400);
          textAlign(CENTER)
          textFont('Anton')
          textSize(32)
          text('FOR THE CURE', 360, 230);
      rect(80, 260, 550, 60, 10, 10);
      textFont('Anton');
      fill(255, 255, 255);
      text('Click here to join the race!', 120, 280, 480, 300);
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
  if (keyCode === 32) {
    game.player.jump();
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
    location.reload();
  }
  if (
    mouseX > 80 &&
    mouseX < 630 &&
    mouseY > 260 &&
    mouseY < 320 &&
    game.gameStart == false
  ) {
    console.log('start game clicked');
    game.gameStart = true;
    game.themeSong.play();
    game.themeSong.loop();
  }
}
