class Slingshot{
    constructor(x,y,body){

        const options = {
            pointA:{
                x:x,
                y:y
            },
            bodyB: body,
            stiffness: 0.2,
            length: 60,
        }

        this.sling = Matter.Constraint.create(options);
        Matter.World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }

    show(){
        if(this.sling.bodyB){
            const posA = this.sling.pointA;
            const posB = this.sling.bodyB.position;
            stroke(255);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}