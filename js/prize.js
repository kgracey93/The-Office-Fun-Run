class Prize {
    constructor(prizeImage) {
      this.image = prizeImage;
      this.x = width;
      this.y = (Math.random() * height) / 2.5;
      this.width = 50;
      this.height = 50;
    }
    collision(playerInfo) {
      let prizeX = this.x + this.width / 2;
      let prizeY = this.y + this.height / 3;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
  
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