class Rope{
constructor(body1,body2,offsetX,offsetY){
this.offsetX=offsetX;
this.offsetY=offsetY;

var options={
bodyA:body1,
bodyB:body2,
pointB:{x:-10,y:0}
}
this.rope=Constraint.create(options);
World.add(world,this.rope);
}
display(){
    if(this.rope.bodyA)
    {
     var pointA = this.rope.bodyA.position;
     var pointB = this.rope.bodyB.position;
     strokeWeight(4);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
 }

}


}