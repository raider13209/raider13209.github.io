var canvas= document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

Movespeed = 5;


useGravity = true;
gravityRate = .1;
gravityForce =0;
BaseRender();





setInterval(function(){ 
    if(useGravity){
        gravityForce += gravityRate;
        yForce = -gravityForce;
    }
    yPos -= yForce;
    BaseRender();
}, 10);
document.addEventListener('keydown', (event) =>{
    if(event.key === "a"){
        xPos -= Movespeed;
    }
    if(event.key === "d"){
        xPos += Movespeed;
    }
})


function BaseRender(){
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(0,0,10000,10000);
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(xPos,yPos,50,50);
}

