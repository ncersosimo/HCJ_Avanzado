/* Para la página historia.html */
let miVideo = document.querySelector('video');
let botonPlay = document.getElementById('play');
let botonPause = document.getElementById('pause')

function reproduccion(){
    if (!miVideo.paused) {
        miVideo.pause();
        botonPlay.hidden = false;
        botonPause.hidden = true;
    } else {
        miVideo.play();        
        botonPlay.hidden = true;
        botonPause.hidden = false;
    }
}

function silencio(){
    miVideo.muted = !miVideo.muted;
}

document.addEventListener('keydown', (event)=> {
    
    // Obtengo la tecla presionada
    let letraPulsada = event.key.toLowerCase();

    // Si el mouse esta sobre el video
    if (miVideo.matches(':hover')) {
        // Si la tecla presionada es la Barra Espaciadora y el mouse esta sobre el video
        if(letraPulsada === ' '){
            // Evito el comportamiento predeterminado (scroll)
            event.preventDefault();
            reproduccion();
          // Si la tecla presionada es la m y el mouse esta sobre el video  
        } else if ( letraPulsada === 'm') {
                silencio();
            } 

    }
});

// Si se hace click sobre el video
miVideo.addEventListener('click', ()=> {
    reproduccion();
});

// Si se hace click sobre el botón play
botonPlay.addEventListener('click', ()=> {
    reproduccion();
});

// Si se hace click sobre el botón pause
botonPause.addEventListener('click', ()=> {
    reproduccion();
});

// Si se hace click sobre el botón unmute
let botonUnmute = document.getElementById('unmute');
botonUnmute.addEventListener('click', ()=> {
    silencio();
});



