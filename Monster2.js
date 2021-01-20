class Monster2{
    constructor(x,y,r){
  

    var options = {
       density: 1,
       frictionAir: 1,
       isStatic:true

    }

    this.x=x
    this.y=y
    this.r=r
    this.image1= loadImage("Monster-02.png")
    this.body = Bodies.circle(this.x,this.y,this.r,options)
    World.add(world, this.body);
}


display(){

    var pos= this.body.position;
    
 
    push()
    image.scale = 0.3
    image(this.image1,pos.x, pos.y,200,200)
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.r);
    pop();

}


}