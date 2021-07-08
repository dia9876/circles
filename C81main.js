canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,55,0,2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown",circlerer)

function circlerer(e){
    mouse_x=e.clientX-canvas.OffsetLeft;
    mouse_y=e.clientY-canvas.OffsetTop;
    console.log("x="+mouse_x)
    console.log("y="+mouse_y)
    circle(mouse_x,mouse_y)
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,55,0,2*Math.PI);
    ctx.stroke()
}