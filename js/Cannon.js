class Cannon {
  constructor(x, y, width, height) {
    var options = {
      isStatic:true
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
   
    this.cannon_image = loadImage("assets/canhao.png");
    this.cannonolhos = loadImage("assets/olhos.png");
  }
  display() {
    
 
    push();
    translate(this.x, this.y);
   
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    if(keyIsDown(RIGHT_ARROW)){
     image(this.cannonolhos,  104, 100, this.width, this.height); 
    }
    if(keyIsDown(LEFT_ARROW)){
      image(this.cannonolhos,  104, 100, this.width, this.height);
    }
    
    noFill();
  }
}
