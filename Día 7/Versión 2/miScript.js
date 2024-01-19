function extraerNumeroDesdeElemento(elemento){
    let miElemento= document.getElementById(elemento);
    let miTexto= miElemento.value;
    let miNumero= Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas= [];

    ventas[0]= extraerNumeroDesdeElemento("VentasTienda1");
    ventas[1]= extraerNumeroDesdeElemento("VentasTienda2");
    ventas[2]= extraerNumeroDesdeElemento("VentasTienda3");
    ventas[3]= extraerNumeroDesdeElemento("VentasTienda4");
    ventas[4]= extraerNumeroDesdeElemento("VentasTienda5");
    ventas[5]= extraerNumeroDesdeElemento("VentasTienda6");

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

