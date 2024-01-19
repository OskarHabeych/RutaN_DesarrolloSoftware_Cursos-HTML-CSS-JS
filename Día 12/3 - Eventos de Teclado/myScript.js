let campo= document.getElementById('miCampo');
let campo2= document.getElementById('miCampo2');
let campo3= document.getElementById('miCampo3');


//EVENTOS DEL TECLADO

function verificarNumero(event){ //Función que me impedirá escribir cualquier otro caracter de teclado que no sea numérico en pantalla
    if(event.keyCode < 48 || event.keyCode > 57){ //el método "keyCode" me permite manipular todos los códigos pertenecientes a cada caracter que muestra cada tecla de la tabla ASSCI
        event.preventDefault(); //".preventDefault()" es una función que se encargará de evitar que suceda lo que deberia de suceder por defecto  
    };
};
campo.addEventListener('keydown', verificarNumero); //el evento "keydown" denota cuando se presiona una tecla (cualquier tecla)

campo2.addEventListener('keyup', function(event){ //función anónima que me permite evocar el evento "keyup" que es cuando ya se suelta la tecla que se presionó
    alert("Entrada del usuario: " + event.target.value); //dentro del target (objetivo del elemento) no queremos ver el "nombre del elemento" si no su "valor"
});

campo3.addEventListener('keypress', function(event){ //función anónima que me permite evocar el evento "keypress" que es cuando se hace toda la tarea de presionar una tecla y soltarla
    alert("caracter ingresado: " + event.key);
})