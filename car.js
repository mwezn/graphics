var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.height=window.innerHeight;
c.width=500;

class Car {
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.controls= new Controls()
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

    }

    
}
let car= new Car(100,100,10,30)
car.draw(ctx)

