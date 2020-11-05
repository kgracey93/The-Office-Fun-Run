var gameState = "L1";
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
    clear();
  game.drawGame();

  if (game.gameOver == true) {
    frameRate(0);
    rect(59, 40, 600, 330, 10, 10);
    fill(00, 31, 85)

    textFont('Open Sans');
    textSize(24);
    for(let i = 0; i < game.endGameNames.length ; i++) { 
        if(game.level === i +1){
              text(`Dear ${game.endGameNames[i]},`, 90, 80)
        }
      }
    text('You have been terminated for:', 90, 110)
    for(let i = 0; i < game.endGameReasons.length ; i++) { 
      if(game.level === i +1){
            text(`${game.endGameReasons[i]}`, 90, 150)
      }
    }
    rect(80, 260, 550, 60, 10, 10);
    textFont('Anton');
    fill(255, 255, 255)
    text( 'Click to restart your career as a temp', 120, 300)
  }

}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
}
