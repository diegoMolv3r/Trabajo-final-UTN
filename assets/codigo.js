let pieza1 = document.querySelector("#pieza1");
let pieza2 = document.querySelector("#pieza2");
let pieza3 = document.querySelector("#pieza3");


let ubicacion1 = document.querySelector("#ubicacion1");
let ubicacion2 = document.querySelector("#ubicacion2");
let ubicacion3 = document.querySelector("#ubicacion3");

pieza1.addEventListener('dragstart',inicioTraslado);
pieza1.addEventListener('dragend',finalDeTraslado);
function inicioTraslado(evento){
    evento.dataTransfer.setData('text',"../assets/imagenes/Rompe1.png");
}
function finalDeTraslado(evento){
    let imagen1 = evento.target;
    imagen1.style.visibility="hidden";
    imagen1.style.display="none";
}

ubicacion1.addEventListener('dragover' , prevenirDefault);
ubicacion1.addEventListener('drop' , soltarElemento);
function soltarElemento(evento){
    let dataPieza1= evento.dataTransfer.getData('text');
    ubicacion1.innerHTML=`<img id="piezaU" src="${dataPieza1}"/>`
}
function prevenirDefault(evento){
    evento.preventDefault()
}


pieza2.addEventListener('dragstart',inicioTraslado2);
pieza2.addEventListener('dragend',finalDeTraslado2);
function inicioTraslado2(evento){
    evento.dataTransfer.setData('text',"../assets/imagenes/rompe2.png");
}
function finalDeTraslado2(evento){
    let imagen2 = evento.target;
    imagen2.style.visibility="hidden";
    imagen2.style.display="none";
}

ubicacion2.addEventListener('dragover' , prevenirDefault2);
ubicacion2.addEventListener('drop' , soltarElemento2);
function soltarElemento2(evento){
    let dataPieza2= evento.dataTransfer.getData('text');
    ubicacion2.innerHTML=`<img id="piezaU" src="${dataPieza2}"/>`
}
function prevenirDefault2(evento){
    evento.preventDefault()
}


pieza3.addEventListener('dragstart',inicioTraslado3);
pieza3.addEventListener('dragend',finalDeTraslado3);
function inicioTraslado3(evento){
    evento.dataTransfer.setData('text',"../assets/imagenes/Rompe3.png");
}
function finalDeTraslado3(evento){
    let imagen3 = evento.target;
    imagen3.style.visibility="hidden";
    imagen3.style.display="none";
}

ubicacion3.addEventListener('dragover' , prevenirDefault3);
ubicacion3.addEventListener('drop' , soltarElemento3);
function soltarElemento3(evento){
    let dataPieza3= evento.dataTransfer.getData('text');
    ubicacion3.innerHTML=`<img id="piezaU" src="${dataPieza3}"/>`
}
function prevenirDefault3(evento){
    evento.preventDefault()
}
