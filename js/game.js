class Game {
  constructor() {
    this.obstacles = [];
    this.lives = 5;
    this.points = 0;
    this.gameOver = false;
    this.level = 1;
  }

  preloadGame() {
    this.prizes = [];
    this.backgroundImage = loadImage('/assets/background.png');
    this.ryan = loadImage('/assets/ryan.gif')
    this.pam = loadImage('/assets/pam.gif');
    this.jim = loadImage('/assets/jim.gif')
    this.dwight= loadImage ('/assets/dwight.gif')
    this.michael = loadImage('/assets/michael.gif');
    this.hurdleImage = loadImage('/assets/hurdle.png');
    this.ryanPrize = {image: loadImage('/assets/ryanPrize.png'), level: 1};
    this.pamPrize = {image: loadImage('/assetsassets/pamPrize.png'), level: 2};
    this.jimPrize = {image: loadImage('/assets/jimPrize.png'), level: 3};
    this.dwightPrize = {image: loadImage('/assets/dwightPrize.png'), level: 4};
    this.michaelPrize = {image: loadImage('/assets/dundie.png'), level: 5};
  }

  setupGame() {
    this.background = new Background(this.backgroundImage);
    this.player = new Player(this.ryan, this.pam, this.jim, this.dwight, this.michael);  
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
          this.gameOver = true;
        }
        return false;
      }
    });

    // Michael Prizes
    // Ideally I add this functionality to the prize then pass the new image as a parameter to update the prize above
    //
    if (this.level == 1) {
      this.prizeBehavior(this.ryanPrize);
    }

    if(this.points == 20){
      this.level = 2;
    }

    if(this.level == 2){
      this.prizeBehavior(this.pamPrize);
    } 

    if(this.points == 40){
      this.level = 3;
    }
    if(this.level == 3){
      this.prizeBehavior(this.jimPrize);
    } 

    if(this.points == 60){
      this.level = 4;
    }
    if(this.level == 4){
      this.prizeBehavior(this.dwightPrize);
    } 
    
    if(this.points == 80){
      this.level = 5;
    }

    if(this.level == 5){
      this.prizeBehavior(this.michaelPrize);
    } 

  }
  prizeBehavior(imageObject){
    this.prizes = this.prizes.filter((imageObject) =>{
      if(imageObject.level === game.level)
      return true;
    })
    if (random(1) < 0.01) {
      this.prizes.push(new Prize(imageObject));
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
      }
    });
  }
}
