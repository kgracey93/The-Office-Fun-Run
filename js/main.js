const game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  var canvas = createCanvas(600, 400);
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
  