class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }

        this.pointB = pointB

        this.BodyA = bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);

            stroke(0,0,0);
            push();
            line(pointA.x, pointA.y, pointB.x, pointB.y);    
            pop();
            }
        }


        
    
}