class Player {
    constructor(playerImage){
        this.image = playerImage;
        this.height = 212;
        this.width = 252;
        this.x = 0;
        this.y = height - this.height;
        this.gravity = 0.4;
        this.velocity = 0;
    }
    drawPlayer(){
        image(this.image, this.x, this.y);
        this.velocity += this.gravity;
        this.y += this.velocity;
        if(this.y >= height - this.height){
            this.y = height - this.height;
        }
    }
    jump(){
        if(this.y === height - this.height ){
          this.velocity = -13;
        }
      }
}