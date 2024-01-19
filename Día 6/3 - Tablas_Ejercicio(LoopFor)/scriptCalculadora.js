function multiplicar(){
    //obtener el número
    let elementoTextoTabla= document.getElementById("textoTabla");
    let textoNumeroTabla= elementoTextoTabla.value;
    let numeroTabla= Number(textoNumeroTabla);

    //obtener la tabla
    let elementoTablaMultiplicar= document.getElementById("listaTabla");

    //producir y mostrar resultados
    for(x=1; x<=12; x++){
        //calcular el resultado
        let numeroResultado= numeroTabla * x;
        //armar string con el resultado
        let textoResultado= numeroTabla + " X " + x + "= " + numeroResultado
        //crear un elememnto de la lista
        let itemLista= document.createElement("li");
        itemLista.innerText= textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }

}