class Stone{
constructor(x,y,r){
    var options = {
        restitution : 0.8,
        friction:0.9 ,
        density:12 ,
    }
    this.body = Bodies.circle(x,y,r,options);
   this.r = r;
     World.add(world,this.body);
     
}

display(){
   
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke ("white");
    fill("grey");
    ellipse(0,0,this.r,this.r);

}
}
