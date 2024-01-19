let boton= document.getElementById('miBoton');
let div= document.getElementById('miDiv');
let enlace= document.getElementById('miEnlace');

//EN ESTA LECCIÓN SE MUESTRA COMO UTILIZAR EL OBJETO "EVENT" PARA RECUPERAR INFORMACIÓN DE EVENTOS Y LUEGO COMO UTILIZAR SUS PROPIEDADES MÁS POPULARES

function evitarEnlace(event){
    event.preventDefault(); // ".preventDefault()" es una función que se encargará de evitar que suceda lo que deberia de suceder por defecto
    alert('Enlace no habilitado');
}

function mostrarMensaje(event){
    alert(event.target); //".target" nos muestra la info del objetivo del evento
                         //el parámetro "event" contiene toda la info realacionada al evento. En este mensaje de alerta nos mostrará cual fue el objeto que protagonizo el evento
    alert(event.currentTarget);// mirar el objetivo actual que es donde el boton se encuentra. Acá mostramos que el objetivo actual esta aociado a la etiqueta "<div>" 
}
//podemos decir que ambos objetos son diferentes "event.target" y "event.currentTarget". El evento fue capturado por el "div" pero fue originado por el botón: "div.addEventListener('click', mostrarMensaje);"
div.addEventListener('click', mostrarMensaje);

//ponemos el guardián que este atento a que si sucede el evento de hacer "click"  en el enlace de "ir a google" para, en este caso, poder impedir que se habra google
enlace.addEventListener('click', evitarEnlace);