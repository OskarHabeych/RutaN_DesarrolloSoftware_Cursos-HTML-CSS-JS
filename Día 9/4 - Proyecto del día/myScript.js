function Automovil(marca, modelo, color, anio, titular){
    this.marca= marca;
    this.modelo= modelo;
    this.color= color;
    this.anio= anio;
    this.titular= titular;
}

let automoviles= [];

let automovil2= new Automovil("Renault", "Megane", "Cafe grisaseo", 2002, "Clara Sandino");
let automovil3= new Automovil("Renault", "Symbol", "Gris metalizado", 2007, "Oskar Habeych");
let automovil4= new Automovil("Volkswaguen", "Voyage", "Gris metalizado", 2022, "Oskar Habeych");

automoviles.push(automovil2);
automoviles.push(automovil3);
automoviles.push(automovil4);

Automovil.prototype.venderAutomovil= function(nuevoTitular){
    this.titular= nuevoTitular;
}

Automovil.prototype.mostrarInfo_xAutomovil= function(){
    return (`${this.marca} ${this.modelo} ${this.color} - ${this.anio} - ${this.titular}`);
}

Automovil.prototype.encenderAutomovil= function(){
    alert("El Automovil ha sido encendido");
}

function  mostrarLista_Automoviles(){
    let listaAutomoviles= document.getElementById('listaAutomoviles');

    for(let automovil of automoviles){
        let elemento= document.createElement('li');
        elemento.innerText= automovil.mostrarInfo_xAutomovil();
        listaAutomoviles.appendChild(elemento);
    }
}