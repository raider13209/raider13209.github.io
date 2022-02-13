var canvas= document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

Movespeed = 5;



BaseRender();



function BaseRender(){
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(0,0,10000,10000);
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(100,100,50,50);
}

