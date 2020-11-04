var gameState = "L1";
let game = new Game();


function preload() {
  game.preloadGame();
}

function setup() {
  var canvas = createCanvas(800, 400);
  canvas.parent('sketch-holder');
  game.setupGame();
}

function draw() {
    clear();
  game.drawGame();

  if (game.gameOver == true) {
    frameRate(0);
    rect(350, 100, 200, 200);
    text("You're Fired", width/2, height/2)
  }

}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
}
