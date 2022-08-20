let s=10;
let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");
context.lineWidth = 1;


function renderX (x){
    context.beginPath();
    context.clearRect(0,0,500,500);
    context.moveTo(x, 80);
    context.lineTo(150, 140);
    context.lineTo(160, 110);
    context.closePath();
    context.strokeStyle = "red";
    context.stroke();
    console.log(x);

}





document.addEventListener("keydown", deleteRight)

function deleteRight(){
    s=s+2;
    renderX(s);

}





