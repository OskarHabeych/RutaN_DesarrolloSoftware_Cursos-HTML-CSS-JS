class Animals{
    constructor(nombre, peso, edad){
        this.nombre= nombre;
        this.peso= peso;
        this.edad= edad;
    }
    información(){
        return `${this.nombre} - ${this.peso}kg. - ${this.edad} años`; 
    }
}

class Perro extends Animals{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this._raza= raza;
    }
    get raza(){
        return this._raza;
    }
    set raza(nuevaRaza){
        this._raza= nuevaRaza;
    }
    información(){
        return `${this.nombre} - ${this.peso}kg. - ${this.edad} años - ${this.raza}`; 
    }  
}

class Gato extends Animals{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this._sexo= sexo;
    }
    get sexo(){
        return this._sexo;
    }

    set sexo(nuevoSexo){
        this._sexo= nuevoSexo;

    }
    información(){
        return `${this.nombre} - ${this.peso}kg. - ${this.edad} años - ${this.sexo}`;  
    }
}

class Conejo extends Animals{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this._color= color;
    }
    get color(){
        return this._color;
    }

    set color(nuevoColor){
        this._color= nuevoColor;
    } 
    información(){
        return `${this.nombre} - ${this.peso}kg. - ${this.edad} años - ${this.color}`;  
    }  
}

let animales= [];

let perrito= new Perro('Firulais', 22, 4, 'Golden Retrivier');
let gatico= new Gato('Ramona', 5, 5, 'Femenino');
let conejito= new Conejo('Rambo', 3.5, 2, 'Gris con blanco');

/*animales.push(perrito);
animales.push(gatico);
animales.push(conejito);*/

animales= [perrito, gatico, conejito];

function mostrarLista_Animales(){
    let listaAnimales= document.getElementById("listarAnimales");

    for(let animal of animales){
        let elemento= document.createElement('li');
        elemento.innerText= animal.información();
        listaAnimales.appendChild(elemento);

    }
}