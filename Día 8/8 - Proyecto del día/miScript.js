function tablaDatosEmpleado(contenedorID, cantidadDatos){
    //encontrar contenedor por su id
    let elementoContenedor= document.getElementById(contenedorID);
    //loop para crear tantas tiendas como se pidan
    for(let conteoDatos= 1; conteoDatos <= cantidadDatos; conteoDatos++){
        //crear el texto de label para poder llamar a la función
        let textoEtiqueta = "Dato " + conteoDatos;
        //crear tiendas con método crearParrafoTienda
        let parrafoDato= crearParrafoDatos(textoEtiqueta);
        //agregar párrafo al contenedor
        elementoContenedor.appendChild(parrafoDato);
    }
}

function crearParrafoDatos(textoLabel){
    //crear las etiquetas de párrafo
    let elementoParrafo= document.createElement("p");
    //crear la etiqueta label
    let elementoEtiqueta= document.createElement("label"); 
    elementoEtiqueta.innerText= textoLabel + ": ";
    //conectar con un input
    elementoEtiqueta.setAttribute("for", textoLabel);
    //crear el input
    let elementoInput= document.createElement("input");
    //establecer atributos de input
    elementoInput.setAttribute("type", "text");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute('size', '25');
    //agregar label e input al párrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);
    //devolver el párrafo 
    return elementoParrafo;
}

let empleados= []; 

function Empleado(legajo, nombres, apellido, nacimiento, cargo){
    this.legajo= legajo;
    this.nombres= nombres;
    this.apellido= apellido;
    this.nacimiento= nacimiento;
    this.cargo= cargo;
};

function extraerInformacion(elemento){
    let miTexto= elemento.value;
    return miTexto;
}

function agregarEmpleadosALista(){

    let posicionEmpleado= 0;
    let datoEmpleado= new Empleado();
    let elementoEmpleado= document.getElementById("datoEmpleado");

    for(let caracter of elementoEmpleado.children){
        datoEmpleado= extraerInformacion(caracter.children[1]);
        empleados[posicionEmpleado]= datoEmpleado;
        posicionEmpleado++;
    }
    return empleados; 
    alert("Empleado ha sido agregado exitosamente");
    limpiarCampos();
}

function listarEmpleadosRegistrados(){
    let listado= '';
    for(let empleado of empleados){
        for(let caracteristica in empleado){
            listado= listado + caracteristica.toUpperCase() + ": " + empleado[caracteristica] + ", ";
        }
        listado= listado + "\n";     
    }
     let elememtoSalida= document.getElementById("mostrarLista");
     elememtoSalida.textContent= listado; 
}

function limpiarCampos(){
    let campoEmpleado= document.getElementById("datoEmpleado");
    for(let caracter of campoEmpleado.children){
        caracter.children[1].value= "";

    }    
}