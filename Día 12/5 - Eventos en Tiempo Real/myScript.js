//creamos una variable indicando la URL del "endpoint" ó punto final del WebSocket en el que el cliente se va a conectar
let socket= new WebSocket('ws://localhost:8080'); // las siglas "ws" indica que estamos utilizando el protocolo "WebSocket"

let mensajeIngresado= document.getElementById('mensajeIngresado'); //captura los mensajes que se ingresen desde el usuario hacia el servidor
let botonEnviar= document.getElementById('botonEnviar');

//función que muestra los mensajes que sean captuados y que se van a ir acumulando debajo del "input", exactamente se localizaran en la etiqueta "div" establecido para ello en el archivo index.html
function mostrarMensajes(contenido){
    let contenedorMensajes= document.getElementById('mensajeChat');
    let elementoMensaje= document.createElement('p'); //se establece que todos los mensajes entrarán en forma de párrafos 
    elementoMensaje.innerText= contenido; //se crea un mensaje que entra como el parámetro "contenido" en la función
    contenedorMensajes.appendChild(elementoMensaje); //los mensajes al agregarse como "hijos" se vayan apilando uno debajo del otro
}                                                  //como el botón para enviar el mensaje es de tipo "submit", cada vez que se refresque la página el último mensaje enviado se desaparecerá más no se va ir acumulando
                                                   
//Nota: este ejemplo no es un chat real porque no hay un host remoto donde se aloja un servidor para poder intercambiar mensajes con otros usuarios y por tanto, la dirección final o punto final en este ejemplo es solo de tipo local

//crearemos ahora el evento "onclick", el cual es el evento que sucede cuando el usuario hace click en el botón para enviar el mensaje
botonEnviar.onclick= function(){
    let mensaje= mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
}

//Función para recibir el mensaje por medio del evento "onmessage"
socket.onmessage= function(event){
    let mensaje= event.data; //la variable "mensaje" es igual a lo que se ha recibido en el evento que sería solamente la información del mensaje
    mostrarMensajes(mensaje);

}