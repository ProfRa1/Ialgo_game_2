class Cannon1 {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.cannon_base = loadImage("assets/parte2.png");
      
    }
    display() {
     
     if(keyIsDown(RIGHT_ARROW) && this.angle<-0){
        this.angle+=2
      }
      if(keyIsDown(LEFT_ARROW) && this.angle>-32){
        this.angle-=2
      }
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.cannon_base, 0, 0, this.width, this.height);
      pop();
    
  
      noFill();
    }
  }
  