class Background {
    constructor(imageInput){
        this.x = 0;
        this.image = imageInput;
    }
    
    drawBackground(){
        this.x -= 3;
        image(this.image, this.x, 0, width, height);
        image(this.image, this.x - width, 0, width, height);
        if (this.x < 0){
            this.x = width;
        }
    }
}