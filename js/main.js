let game = new Game();
var gameState = "L1";

function preload() {
  game.preloadGame();
}

function setup() {
  var canvas = createCanvas(1000, 400);
  canvas.parent('sketch-holder');
  game.setupGame();
}

function draw() {
    clear();
  game.drawGame();
}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
}
