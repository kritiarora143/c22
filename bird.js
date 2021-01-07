class Bird{
    constructor(x,y){
        var options ={
            'restitution':1,
            'friction':1
            
            
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);

        rectMode(CENTER);
        strokeWeight(4)
        stroke("blue");
        fill("green")
        rect(0,0,this.width,this.height);
        pop();
    };
};