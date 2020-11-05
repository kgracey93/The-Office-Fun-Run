class Prize {
    constructor(imageObject) {
      this.image = imageObject.image;
      this.level = imageObject.level;
      this.x = width;
      this.y = 150
      this.y = Math.floor(Math.random() * (160 - 80 + 1)) + 80;
      this.width = 50;
      this.height = 50;
    }
    collision(playerInfo) {
      let prizeX = this.x + this.width / 2;
      let prizeY = this.y + this.height / 3;
      let playerX = playerInfo.x + playerInfo.width / 2.5;
      let playerY = playerInfo.y + playerInfo.height / 2.5 ;
  
      if (dist(prizeX, prizeY, playerX, playerY) > 50) {
          return false;
        } else {
          return true;
        }
    }
  
    drawPrize() { 
      this.x -= 3;
      image(this.image, this.x, this.y, this.width, this.height);
      this.collision(game.player);
    }
  }