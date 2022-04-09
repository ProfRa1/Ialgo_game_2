class CannonBall {
    constructor(x,y){
        var options = {
            isStatic:true
        }
     this.r = 25;
     this.body = Bodies.circle(x,y,this.r,options);
     this.image = loadImage("./assets/bola2.png");
     
     World.add(world,this.body)
    }
    shoot(){
        var newAngle =-238 //cannon.angle-45
        newAngle = newAngle//*(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(4.2);

         Matter.Body.setStatic(this.body,false);
         Matter.Body.setVelocity(this.body,
             {x:velocity.x,
             y:velocity.y*(5.14)})
    }
    display(){
        var pos  = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop()
     }
}