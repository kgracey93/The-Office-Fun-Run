class Player {
    constructor(playerImage){
        this.image = playerImage;
        this.height = 300;
        this.width = 375;
        this.x = 0;
        this.y = height - this.height;
        this.gravity = 0.3;
        this.velocity = 0;
        this.jumpsCount = 0;
    }
    drawPlayer(){
        image(this.image, this.x, this.y);
        this.velocity += this.gravity;
        this.y += this.velocity;
        if(this.y >= height-(this.height -50)){  
            this.y = height - (this.height -50);
            this.jumpsCount = 0;
          }
    }
    jump(){
        if (this.jumpsCount === 0){
            this.jumpsCount++;
        this.velocity = -10;
        }
    }
}