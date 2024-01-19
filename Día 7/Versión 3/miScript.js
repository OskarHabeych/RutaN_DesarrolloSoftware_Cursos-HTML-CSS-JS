function crearTiendas(contenedorID, min, cantidadtiendas){
    //encontrar contenedor por su id
    let elementoContenedor= document.getElementById(contenedorID);
    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas= 1; conteoTiendas <= cantidadtiendas; conteoTiendas++){
        //crear el texto de label para poder llamar a la función
        let textoEtiqueta = "Tienda " + conteoTiendas;
        //crear tiendas con método crearParrafoTienda
        let parrafoTienda= crearParrafoTienda(textoEtiqueta, min);
        //agregar párrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
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
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);
    //agregar label e input al párrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el párrafo 
    return elementoParrafo;

}

function extraerNumeroDesdeElemento(elemento){
    let miElemento= document.getElementById(elemento);
    let miTexto= miElemento.value;
    let miNumero= Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas= [];

    ventas[0]= extraerNumeroDesdeElemento("conteoTiendas");
    ventas[1]= extraerNumeroDesdeElemento("conteoTiendas");
    ventas[2]= extraerNumeroDesdeElemento("conteoTiendas");
    ventas[3]= extraerNumeroDesdeElemento("conteoTiendas");
    ventas[4]= extraerNumeroDesdeElemento("conteoTiendas");
    ventas[5]= extraerNumeroDesdeElemento("conteoTiendas");

    let totalVentas= sumarTotal(ventas);
    let ventaMayor= calcularMayorVenta(ventas);
    let ventaMenor= calcularMenorVenta(ventas);

    let mensajeSalida = "Total Ventas:  " + totalVentas +
                        " / Mayor venta: " + ventaMayor +
                        " / Menor venta: " + ventaMenor;
    let elementoSalida= document.getElementById("parrafoSalida");
    elementoSalida.textContent= mensajeSalida;
}

function sumarTotal(array){
    let total= 0;

    for (let venta of array){
        total= total + venta;
    }
    return total;
}

function calcularMayorVenta(array){
    let maximo= array[0];

    for(venta of array){
        if(venta > maximo){
            maximo= venta;
        }
    }
    return maximo;
}

function calcularMenorVenta(array){
    let minimo= array[0];

    for(venta of array){
        if(venta < minimo){
            minimo= venta;
        }
    }
    return minimo;
}

