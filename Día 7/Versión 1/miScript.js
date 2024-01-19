function extraerNumeroDesdeElemento(elemento){
    let miElemento= document.getElementById(elemento);
    let miTexto= miElemento.value;
    let miNumero= Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1= extraerNumeroDesdeElemento("VentasTienda1");
    ventas2= extraerNumeroDesdeElemento("VentasTienda2");
    ventas3= extraerNumeroDesdeElemento("VentasTienda3");
    ventas4= extraerNumeroDesdeElemento("VentasTienda4");
    ventas5= extraerNumeroDesdeElemento("VentasTienda5");
    ventas6= extraerNumeroDesdeElemento("VentasTienda6");

    let totalVentas= ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = "TotalVentas:  " + totalVentas;
    let elementoSalida= document.getElementById("parrafoSalida");
    elementoSalida.textContent= mensajeSalida;
}