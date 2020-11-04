class Game {
  constructor() {
    this.obstacles = [];
    this.prizes = [];
    this.lives = 5;
    this.points = 0;
  }

  preloadGame() {
    this.backgroundImage = loadImage('../assets/background.png');
    this.michael = loadImage("../assets/michael.gif");
    this.pam = loadImage('/assets/pam.gif')
    this.hurdleImage = loadImage('../assets/hurdle.png');
    this.michaelPrize = loadImage('../assets/dundie.png');
    this.pamPrize = loadImage('/assets/dundie.png')
  }

  setupGame() {
    this.background = new Background(this.backgroundImage);
    this.player = new Player(this.michael);
  }


  drawGame() {
    this.background.drawBackground();
    this.player.drawPlayer();

    // Obstacles
    if (frameCount % 200 === 0) {
      this.obstacles.push(new Obstacle(this.hurdleImage));
    }

    this.obstacles.forEach(function (obstacle) {
      obstacle.drawObstacle();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      if (!obstacle.collision(this.player)) {
        return true;
      } else {
        this.lives -= 1;
        document.querySelector('.lives').innerText = this.lives;
        if (this.lives === 0) {
          this.endGame();
        }
        return false;
      }
    });
    // Prizes
    if (random(1) < 0.01  ){
      this.prizes.push(new Prize(this.michaelPrize));
    }
    this.prizes.forEach(function (prize) {
      prize.drawPrize();
    });
    this.prizes = this.prizes.filter((prize) => {
      if (!prize.collision(this.player)) {
        return true;
      } else {
        this.points += 10;
        document.querySelector('.points').innerText = this.points;
        if (this.points === 20){
          this.drawPam();
        }
      }
    });
  }
  endGame(){
    alert('Game Over');
          setup();
          this.lives = 5;
          document.querySelector('.lives').innerText = this.lives;
          this.points = 0;
  }
  drawPam(){
    this.player = new Player(this.pam);
  }
}
