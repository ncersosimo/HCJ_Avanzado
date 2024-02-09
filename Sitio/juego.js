let cajas = document.querySelectorAll('.caja');
let imagenes = document.querySelectorAll('img');
let subtitulo = document.querySelector('h2');
let validacion1 = false;
let validacion2 = false;
let validacion3 = false;

function permitoSoltar(evento) {
    evento.preventDefault();
}

function inicioArrastre(evento) {
    evento.dataTransfer.setData("text", evento.target.id);
}

function soltar(evento) {
    let idImagen = evento.dataTransfer.getData("text");    

    let imagen = document.getElementById(idImagen);
    evento.target.innerHTML = imagen.outerHTML;
    imagen.style.display = "none";

    if (evento.target.id == "cajasoltar" && idImagen == "imagen2"){
        validacion1 = true;
    }

    if (evento.target.id == "cajasoltar2" && idImagen == "imagen1"){
        validacion2 = true;
    }

    if (evento.target.id == "cajasoltar3" && idImagen == "imagen3"){
        validacion3 = true;
    }
    
    if(validacion1 && validacion2 && validacion3){
        subtitulo.innerHTML = "Completó con Exito el Rompecabezas!!!";
    }
}

function reinicio(){
    imagenes.forEach((imagen)=> {
        imagen.style.display = "inline"
    });
    
    cajas.forEach((caja)=> {
        caja.innerHTML = "<p>Arrastre y suelte la imágene aquí</p>";
    });
    
    subtitulo.innerHTML = "Armemos el rompecabezas y veamos que imagen es...";

    validacion1 = false;
    validacion2 = false;
    validacion3 = false;
}
// Esto se ejecuta al cargar el html
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
// Creo los 2 addEventListener por cada elemento que pertenezca a la clase caja
document.addEventListener("DOMContentLoaded", ()=> {    
    cajas.forEach((caja)=> {
        caja.addEventListener('dragover', permitoSoltar);
        caja.addEventListener('drop', soltar);
    });
    
    // Creo el addEventListener por cada elemento que sea imagen
    imagenes.forEach((imagen)=> {
        imagen.addEventListener('dragstart', inicioArrastre);
    });
});

