class Obstacle {
  constructor(hurdleImage) {
    this.image = hurdleImage;
    this.x = width;
    this.y = 210;
    this.width = 124;
    this.height = 125;
    // console.log(height - this.height); -> 275
    // console.log(this.y); -> NaN
  }
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2.5 ;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(obstacleX, obstacleY, playerX, playerY) > 40) {
        return false;
      } else {
        return true;
      }
  }

  drawObstacle() {
    this.x -= 3.;
    image(this.image, this.x, this.y, this.width, this.height);
    this.collision(game.player);
  }
}
