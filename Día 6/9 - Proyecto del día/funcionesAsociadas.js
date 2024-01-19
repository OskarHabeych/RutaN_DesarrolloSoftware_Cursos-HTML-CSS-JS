
function listarNotas(){

let textoNota1= document.getElementById("nota1").value;
let textoNota2= document.getElementById("nota2").value;
let textoNota3= document.getElementById("nota3").value;
let textoNota4= document.getElementById("nota4").value;
let textoNota5= document.getElementById("nota5").value;

let numeroNota1= Number(textoNota1);
let numeroNota2= Number(textoNota2);
let numeroNota3= Number(textoNota3);
let numeroNota4= Number(textoNota4);
let numeroNota5= Number(textoNota5);

let array= [numeroNota1, numeroNota2, numeroNota3, numeroNota4, numeroNota5];
    
    let lista= document.getElementById("elementosDeLista");
    
    for(let nota of array){
        let item= document.createElement("li");
        item.innerText= nota;
        lista.appendChild(item);
    }
}

function calcularPromedio(){

let textoNota1= document.getElementById("nota1").value;
let textoNota2= document.getElementById("nota2").value;
let textoNota3= document.getElementById("nota3").value;
let textoNota4= document.getElementById("nota4").value;
let textoNota5= document.getElementById("nota5").value;

let numeroNota1= Number(textoNota1);
let numeroNota2= Number(textoNota2);
let numeroNota3= Number(textoNota3);
let numeroNota4= Number(textoNota4);
let numeroNota5= Number(textoNota5);

let array= [numeroNota1, numeroNota2, numeroNota3, numeroNota4, numeroNota5];

    let cont= 0;
    let numeroResultado= 0;
    let promedio= 0;

        for(i= 0; i < 5; i++){
            numeroResultado= numeroResultado + array[i];
            cont++;
        }
        promedio= numeroResultado/cont;
        document.getElementById("textoPromedio").textContent= promedio;
}

function notaMasAlta(){

let textoNota1= document.getElementById("nota1").value;
let textoNota2= document.getElementById("nota2").value;
let textoNota3= document.getElementById("nota3").value;
let textoNota4= document.getElementById("nota4").value;
let textoNota5= document.getElementById("nota5").value;

let numeroNota1= Number(textoNota1);
let numeroNota2= Number(textoNota2);
let numeroNota3= Number(textoNota3);
let numeroNota4= Number(textoNota4);
let numeroNota5= Number(textoNota5);

let array= [numeroNota1, numeroNota2, numeroNota3, numeroNota4, numeroNota5];

    let notaAlta= 0;
    let i= 0;

    while(i < 5){
    if(array[i] > notaAlta){
        notaAlta = array[i];
        }
    i++;
    }
    document.getElementById("textoMaximaNota").textContent= notaAlta;
}

function aplazo(){

let textoNota1= document.getElementById("nota1").value;
let textoNota2= document.getElementById("nota2").value;
let textoNota3= document.getElementById("nota3").value;
let textoNota4= document.getElementById("nota4").value;
let textoNota5= document.getElementById("nota5").value;

let numeroNota1= Number(textoNota1);
let numeroNota2= Number(textoNota2);
let numeroNota3= Number(textoNota3);
let numeroNota4= Number(textoNota4);
let numeroNota5= Number(textoNota5);

let array= [numeroNota1, numeroNota2, numeroNota3, numeroNota4, numeroNota5];

    let aplazar= "No";
    let cont= 0;

    do{
        if (array[cont] < 4){
            aplazar = "Si";
            break;
        }
        cont++;
    }while(cont < 5);
    document.getElementById("textoAplazo").textContent= aplazar;
}



