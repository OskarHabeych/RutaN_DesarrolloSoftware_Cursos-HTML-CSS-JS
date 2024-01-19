let listaElemento= document.getElementById('listaAudiovisual');
let campo_Busqueda= document.getElementById('buscarPelicula');
let boton_Buscar= document.getElementById('miBoton');
let lista= document.getElementById('respuestaBusqueda');

let elementoElegido= 'peliculas.json';

listaElemento.addEventListener('change', cambiarElemento);

function cambiarElemento(){
    elementoElegido= listaElemento.value;
    let evento= new CustomEvent('cambioElemento');
    listaElemento.dispatchEvent(evento);
}

listaElemento.addEventListener('cambioElemento', mostrarArchivoBase);

function mostrarArchivoBase(){
    alert("Se modifico el archivo base a " + listaElemento.value);
}

campo_Busqueda.addEventListener('keydown', verificar_soloLetras);

function verificar_soloLetras(event){
    if((event.key < 65 || event.key > 90) && event.keyCode != 32 && event.keyCode != 8){
            event.preventDefault();
        }    
    }

boton_Buscar.addEventListener('click', busqueda);

function busqueda(){
    lista.innerHTML= ""; //limpia la lista cada vez después de la última búsqueda 

    fetch(elementoElegido)
    .then(respuesta => respuesta.json())
    .then(function(salida){
        for(let item of salida.data){
            if(item.nombre.startstWith(campo_Busqueda.value.toUpperCase())){
                let parrafo= document.createElement('p');
                parrafo.id= item.nombre;
                parrafo.innerHTML= item.sinopsis;
                parrafo.style.display= 'none';
                let li= docucment.createElement('li');
                li.innerHTML= item.nombre;
                li.addEventListener('mouseover', function(){
                    let p= document.getElementById(item.nombre);
                    p.style.display= 'block';
                });
                li.addEventListener('mouseout', function(){
                    let p= document.getElementById(item.nombre);
                    p.style.display= 'none';
                })
                li.appendChild(parrafo);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error){
        alert(error);
    })
}





