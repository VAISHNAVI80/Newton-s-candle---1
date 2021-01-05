class Bob{
constructor(x,y,radius){
var options={
    'isStatic':true,
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
this.body = Bodies.circle(x, y, radius, options);
this.radius=radius;
World.add(world,this.body);
}

display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill ("teal");
    ellipseMode(CENTER);
    ellipse( 0, 0, this.radius, this. radius);
    pop();


}

}