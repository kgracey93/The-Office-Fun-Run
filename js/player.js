class Player {
    constructor(playerImage){
        this.image = playerImage;
        this.height = 300;
        this.width = 375 ;
        this.x = 0;
        this.y = height - this.height;
        this.gravity = 0.2;
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
        this.velocity = -8;
    }
}