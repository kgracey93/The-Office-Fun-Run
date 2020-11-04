class Player {
  constructor(ryan, pam, jim, dwight, michael) {
    this.ryan = ryan;
    this.pam = pam;
    this.jim    = jim;
    this.dwight = dwight;
    this.michael = michael;
    this.height = 300;
    this.width = 375;
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.3;
    this.velocity = 0;
    this.jumpsCount = 0;
  }
  drawPlayer() {
    if (game.level === 1) {
      image(this.ryan, this.x, this.y);
    }
    if (game.level === 2) {
      image(this.pam, this.x, this.y);
    }

    if (game.level === 3) {
      image(this.jim, this.x, this.y);
    }

    if (game.level === 4) {
      image(this.dwight, this.x, this.y);
    }

    if (game.level === 5) {
      image(this.michael, this.x, this.y);
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
