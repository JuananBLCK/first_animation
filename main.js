//Buscamos el elemento en el DOM
window.onload = function() {
    cuadro = document.getElementById("sky");
}

//Parar animación: propiedad "animation-play-state: paused;"
function parar() {
    cuadro.style.animationPlayState = "paused";
    cuadro.style.MozAnimationPlayState = "paused";
    cuadro.style.WebkitAnimationPlayState = "paused";
    console.log("Animación pausada");
}

//Reanudar la animación: propiedad "animation-play-state: running;"
function seguir() {
    cuadro.style.animationPlayState = "running";
    cuadro.style.MozAnimationPlayState = "running";
    cuadro.style.WebkitAnimationPlayState = "running";
    console.log("Animación reanudada");
}

//Con estos 3 botones podremos variar la velocidad 
function rapida() {
    cuadro.style.animationDuration = "1s";
    console.log("Tiempo de animación ajustado a: 1s");
}

function normal() {
    cuadro.style.animationDuration = "5s";
    console.log("Tiempo de animación ajustado a: 5s");
}

function lenta() {
    cuadro.style.animationDuration = "10s";
    console.log("Tiempo de animación ajustado a: 10s");
}

/*Funcion para interactuar con el <select>. Utilizando el evento "onchange", obtenemos el valor del 
índice seleccionado, concatenamos el valor al string "s" y por último le asignamos el valor obtenido 
a la propiedad "animation-duration".*/
function velocidad() {
    var num = document.getElementById("vel");
    var valor = num.options[num.selectedIndex].value + "s";
    cuadro.style.animationDuration = valor;
    cuadro.style.MozAnimationDuration = valor;
    cuadro.style.WebkitAnimationDuration = valor;
    console.log("Tiempo de animación ajustado a: " + valor);
}