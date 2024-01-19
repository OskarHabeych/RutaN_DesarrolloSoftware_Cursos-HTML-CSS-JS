
function mostrarResultado(resultado){

    document.getElementById("campoResultado").value= resultado;
}

function sumar(){
    let digito1= document.getElementById("campoUno");
    let digito2= document.getElementById("campoDos");
    let textoSuma= (+digito1.value + +digito2.value);
    mostrarResultado(textoSuma);
}

function restar(){
    let digito1= +document.getElementById("campoUno").value;
    let digito2= +document.getElementById("campoDos").value;
    let textoResta= (digito1 - digito2);
    mostrarResultado(textoResta);
}

function multiplicar(){
    let digito1= +document.getElementById("campoUno").value;
    let digito2= +document.getElementById("campoDos").value;
    mostrarResultado(digito1 * digito2);
}

function dividir(){
    let digito1= +document.getElementById("campoUno").value;
    let digito2= +document.getElementById("campoDos").value;
    mostrarResultado(digito1 / digito2);
}

function raizCuadrada(){
    let digito= +document.getElementById("campoDos").value;
    mostrarResultado(Math.sqrt(digito));
}

function potencia(){
    let digito1= +document.getElementById("campoUno").value;
    let digito2= +document.getElementById("campoDos").value;
    mostrarResultado(Math.pow(digito1, digito2));
}

function valorAbsoluto(){
    let digito= +document.getElementById("campoDos").value;
    mostrarResultado(Math.abs(digito));
}

function aleatorio(){
    let minimo= +document.getElementById("campoUno").value;
    let maximo= +document.getElementById("campoDos").value;
    maximo= maximo + 1;
    mostrarResultado(Math.floor(Math.random()*(maximo - minimo) + minimo));
}

function redondear(){
    let resultado= +document.getElementById("campoResultado").value;
    mostrarResultado(Math.round(resultado));
}

function redondeoAPiso(){
    let resultado= +document.getElementById("campoResultado").value;
    mostrarResultado(Math.floor(resultado));
}

function redondeATecho(){
    let resultado= +document.getElementById("campoResultado").value;
    mostrarResultado(Math.ceil(resultado));
}
