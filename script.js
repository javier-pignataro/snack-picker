var boton = document.getElementById('boton');
var chunks = document.getElementById('chunkys');
var offsetViewer = document.getElementById('offset-viewer');
var xPosAncla;
var xPosRefresh;
var chunkList = document.getElementsByClassName('chunk');
var banana = document.getElementById('banana');
var chocolate = document.getElementById('chocolate');
var apple = document.getElementById('apple');
var orange = document.getElementById('orange');
const probabilidad = [  // Total items: 10 
      bananaf(),        // 10%
      bananaf(),        // 10%
      bananaf(),        // 10%
      orangef(),        // 10%
      orangef(),        // 10%
      orangef(),        // 10%
      applef(),         // 10%
      applef(),         // 10%
      applef(),         // 10%
      chocolatef()      // 10%
];
/* Probabilities:
banana = 30%
orange = 30%
apple = 30%
chocolate = 10%
*/
var randomChildSelected;

chunks.addEventListener('mousedown', mouseDown);
document.addEventListener('mousedown', mouseDown);
boton.addEventListener('mouseup', spin);

/* Load function at begining */
clonacion();


/* FUNCTIONS SECTION */
function spin(){
    chunks.classList.add('shifting');
    chunks.style.left = "-20217px"
}

function clonacion(){
    chunks.classList.remove('shifting');
    chunks.style.left = "900px";
    while(chunks.lastChild){
        chunks.removeChild(chunks.lastChild);
    }
    chunks.style.width = "24000px";
    for(let i = 0; i < 100; i++){
        /*
        chunks.appendChild(humanos[0].cloneNode(true));
        */
        randomChildSelected = randomPicker();
        chunks.appendChild(randomChildSelected);
    }
}

function randomPicker(){
    let randomNumber = (Math.floor(Math.random() * 10));
    return probabilidad[randomNumber].cloneNode(true);
}

function bananaf(){
    return banana.cloneNode(true);
}

function chocolatef(){
    return chocolate.cloneNode(true);
}

function applef(){
    return apple.cloneNode(true);
}

function orangef(){
    return orange.cloneNode(true);
}

function mouseDown(e){
    e = e || window.event;
    e.preventDefault();
    xPosAncla = e.clientX;
    chunks.addEventListener('mousemove', drawMouseMove);
    chunks.addEventListener('mouseup', endMouseUp);
    document.addEventListener('mousemove', drawMouseMove);
    document.addEventListener('mouseup', endMouseUp);
}

function drawMouseMove(e){
    e = e || window.event;
    xPosRefresh = xPosAncla - e.clientX;
    xPosAncla = e.clientX;
    chunks.style.left = (chunks.offsetLeft - xPosRefresh) + "px";
    offsetViewer.innerHTML = (chunks.offsetLeft) + "px";
}

function endMouseUp(){
    chunks.removeEventListener('mousemove', drawMouseMove);
    chunks.removeEventListener('mouseup', endMouseUp);
    document.removeEventListener('mousemove', drawMouseMove);
    document.removeEventListener('mouseup', endMouseUp);
}
