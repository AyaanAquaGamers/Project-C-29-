class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.4,
            friction:1.0,
            density:0.5
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
        this.image=loadImage("polygon.png")
    }

    display(){
        var angle=this.body.angle
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()

    }
 
 }