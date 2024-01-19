let boton= document.getElementById('miBoton');
let menu= document.getElementById('miMenu');

let boton2= document.getElementById('miBoton2');
let menu2= document.getElementById('miMenu2');

let boton3= document.getElementById('miBoton3');
let menu3= document.getElementById('miMenu3');

//FUNCIONES DE MOUSE

boton.addEventListener('click', function(){ //función que por medio del evento "click" me bloquea la desactivación de la lista desplegable del menú que se evoca en el archivo index.html
    menu.style.display= 'block';
});

boton2.addEventListener('mouseover', function(){ //función que por medio del evento "mouseover" (el cual permite realizar alguna acción cuando el mouse se posa encima del elemento en cuestión) bloquea la desactivación de la lista desplegable del menú que se evoca en el archivo index.html
    menu2.style.display= 'block';
});

//"mouseover" y "mouseout" permite realizar la acción que se le encomiende a cierto elemento cuado el mouse se posa por encima de él y cerrar dicha acción cuando el mouse se deja de posar en él
boton3.addEventListener('mouseover', function(){  
    menu3.style.display= 'block';
});                                             // en estas últimas 2 funciones, la primera bloquea la desactivación del menú desplegable que se muestra en el archivo index.html y la segunda función reacitva la desactivación 

boton3.addEventListener('mouseout', function(){ 
    menu3.style.display= 'none';
});

document.addEventListener('mousemove', function(){ //función que me permite por medio del evento "mousemove" arrojarme las posiciones de los vectores "X" y "Y" de cada posición del mouse en donde este se encuentre en la página
    console.log("posición X: " + event.clientX + " - posicion Y: " + event.clientY);
});



