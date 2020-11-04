class Player {
  constructor(player1, player2) {
    this.p1Image = player1;
    this.p2Image = player2;
    this.height = 300;
    this.width = 375;
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.3;
    this.velocity = 0;
    this.jumpsCount = 0;
  }
  drawPlayer() {
    // console.log(this.p2Image);

    if (game.level === 1) {
      image(this.p1Image, this.x, this.y);
    }
    if (game.level === 2) {
      image(this.p2Image, this.x, this.y);
    }

    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - (this.height - 50)) {
      this.y = height - (this.height - 50);
      this.jumpsCount = 0;
    }
  }
  jump() {
    if (this.jumpsCount === 0) {
      this.jumpsCount++;
      this.velocity = -10;
    }
  }
}
