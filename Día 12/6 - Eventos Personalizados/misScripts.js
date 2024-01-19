let audio= document.getElementById('audio');
let listaCanciones= document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida= listaCanciones.value;
    audio.src= cancionElegida;
    audio.play();
    //este fragmento de código nos mostrará el nombre de la canción cuando haya un evento de cambio de canción 
    let evento= new CustomEvent('cambioDeCancion'); //generamos un nuevo evento por medio del objeto "CustomEvent" el cual quiere decir en español "eventoPersonalizado" y le debemos pasar a este nuevo objeto un "nombre" como parámetro
    audio.dispatchEvent(evento)// le pedimos al objeto audio que se encargue de disparar este nuevo evento por medio del método "dispatchEvent"  ya que los eventos personalizados deben configurarse cuando se van a disparar
}
//generamos ahora un soldado que detecte que el evento cambio de canción ha sido generado y que publique en consola el nombre de la canción
audio.addEventListener('cambioDeCancion', mostrarNombreCancion);

function mostrarNombreCancion(){
    console.log("La canción actual es: " + listaCanciones.value);
}
