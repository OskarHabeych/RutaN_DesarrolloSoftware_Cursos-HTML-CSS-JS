function calcularLitros(){
    var elementokm= document.getElementById("textoKm");
    var textokm= elementokm.value;
    var cantkm= Number(textokm);

    var cantLitros= Math.ceil(cantkm/8.8);
    var resultado= document.getElementById("textoResultado");
    resultado.textContent= "Carga " + cantLitros + " litros de combustible.";
}