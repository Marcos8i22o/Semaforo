

const btnComenzar = document.querySelector('button');
const $ROJO = document.querySelector('#rojo');
const $AMARILLO = document.querySelector('#amarillo');
const $VERDE = document.querySelector('#verde');

btnComenzar.onclick = function () {
    
    encenderLuz($ROJO,'1');
    setTimeout(() => {
        apagarLuz($ROJO,'0.5')
    }, 900);
        
    setTimeout(() => {
        encenderLuz($AMARILLO,'1');
    }, 1000);

    setTimeout(() => {
        apagarLuz($AMARILLO,'0.5')        
    }, 1500);

    setTimeout(() => {
        encenderLuz($VERDE,'1');
    }, 1600);

    setTimeout(() => {
        apagarLuz($VERDE,'0.5')
    }, 2000);
}



function encenderLuz(luz,grado) {
    luz.style.opacity = grado;
}

function apagarLuz(luz,grado) {
    luz.style.opacity = grado
}




      





