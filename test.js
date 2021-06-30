var canvas;
var context;
var startX;
var startY;
var offsetX 
var offsetY 
var isdragable = false;

/** @module1 **/
function mouseStart(e){
    canvas.style.cursor = 'crosshair'
    startX = parseInt((e.clientX-offsetX))
    startY = parseInt((e.clientY-offsetY))
}

let arr = []
function mouseStop(e){
    canvas.style.cursor = 'default'
    var mouseX = parseInt((e.clientX - offsetX))
    var mouseY = parseInt((e.clientY -offsetY))
    var color = Math.floor((Math.random() * mouseX+mouseY));
    context.beginPath();
    
    context.rect(x =startX, y = startY,w= mouseX-startX, h = mouseY-startY)
    // arr.push(({x:x, y:y,height:h,width:w}))
    // console.log(arr.length)
    // context.fillStyle = "red";
    context.fillStyle = 'hsl('+color+',100%,50%)'
    context.fill();
}



console.log(arr)
function clearCanvas(){
    // canvas.style.display = 'none' /* clears the entire screen */
    context.clearRect(0,0, canvas.width,canvas.height)
    
    
}

function init(){
    canvas = document.getElementById('tile');
    context = canvas.getContext('2d');
    offsetX = canvas.getBoundingClientRect().left
    offsetY = canvas.getBoundingClientRect().top
    context.stroke()
    canvas.addEventListener('mousedown',mouseStart,false);
    canvas.addEventListener('mouseup',mouseStop,false);
    canvas.addEventListener('clear',clearCanvas,false);
}


window.addEventListener('load',init,false)



