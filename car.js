var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width=500;

class Car {
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=0;
        this.acceleration=20;
        this.controls= new Controls()
    }
    update(){
        if(this.controls.forward){
            //this.y-=2;
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            //this.y+=2;
            this.speed-=this.acceleration;
        }
        this.y=this.speed;
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
let car= new Car(100,100,10,30);


animate();
function animate(){
    car.update();
    c.height=window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate)
    
}
