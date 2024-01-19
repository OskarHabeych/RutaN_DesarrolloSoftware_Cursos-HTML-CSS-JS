let boton= document.getElementById('miBoton');

//FORMAS DE COLOCAR UN EVENTO A UN ELEMENTO TIPO "BOTÓN":

//FORMA 1:
boton.addEventListener('click', function(){
    alert('Hey mama huevo!!!');
});

//FORMA 2:
function mostrarMensaje(){
    alert('que no te cansas mama huevo!!') 
};
boton.addEventListener('click', mostrarMensaje); //se asocia el evento click al elemento


//OTRO EVENTO PARA EL ELEMENTO TIPO "BOTON":

function otroMensaje(){
    alert('ahora flotas mama huevo!!');
};

boton.addEventListener('mouseover', otroMensaje); //se asocia el evento click al elemento