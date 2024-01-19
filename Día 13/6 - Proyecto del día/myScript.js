
async function cargarSistema(){

    await delay(2500);
    
    //función que cargue las cotizaciones
    obtenerCotizaciones_enEuros(mostrarCotizacion_enEuros);
    obtenerCotizaciones_enBitcoin(mostrarCotizacion_enBitcoin);
    //obtenerCotizaciones_enPA();
    obtenerCotizaciones_enPA2();

    //función que cargue los elementos
    cargarElementos();

    //función que cargue los textos
    cargarTextos();
    
    }

    async function obtenerCotizaciones_enEuros(callback){
        
        let respuesta_Euro= await fetch('https://open.er-api.com/v6/latest/USD');
        callback(await respuesta_Euro.json());
    }

    async function obtenerCotizaciones_enBitcoin(callback){

        let respuesta_Bitcoin= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        callback(await respuesta_Bitcoin.json());   
    }

    async function obtenerCotizaciones_enPA(){
        let respuesta_PA= await fetch('https://open.er-api.com/v6/latest/ARS');
        let datos_PA= await respuesta_PA.json();
        let elementoTextoPA= document.getElementById('cotDolar-PA');
        elementoTextoPA.append(datos_PA.rates.USD);
    }

    //función de obtenerCotizaciones_enPA() por medio del objeto XMLHttpRequest y el método asicrónico de "Promesas":
    async function obtenerCotizaciones_enPA2(){
        let datos_PA= await crearPedido_enPA('https://open.er-api.com/v6/latest/ARS');
        let elementoTextoPA= document.getElementById('cotDolar-PA');
        elementoTextoPA.append(datos_PA.rates.USD);
    }

    async function crearPedido_enPA(url){
        return new Promise(function(resolve, reject){
            let xhr= new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload= function(){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else {
                    reject(xhr.statusText);
                }
            }
            xhr.send();
        })
    }

    function mostrarCotizacion_enEuros(informacion){
        let elementoTextoEuro= document.getElementById('cotDolar-Euro');
        elementoTextoEuro.append(informacion.rates.EUR);
    }

    function mostrarCotizacion_enBitcoin(informacion){
        let elementoTextoBitcoin= document.getElementById('cotDolar-bitcoin');
        elementoTextoBitcoin.append(informacion.bpi.USD.rate);
    }

    function cargarElementos(){
        document.getElementById('imageLogo').setAttribute('src', 'logoDolar.png');
        document.getElementById('titulo').textContent= "Cotizaciones USD Online";
        document.getElementById('imageEspera').setAttribute('src', 'loading.gif');
        document.getElementById('imageEspera').style.visibility= 'visible';
    }

    function cargarTextos(){
        document.getElementById('cotDolar-Euro').append("EUR a USD:  ");
        document.getElementById('cotDolar-bitcoin').append("Bitcoin a USD:  ");
        document.getElementById('cotDolar-PA').append("ARG a USD:  ");
    }

    function delay(ms){
        let esconderVisible= document.getElementById('imageEspera');
        esconderVisible.style.visibility= 'hidden';
        return new Promise(function(res){
            setTimeout(res, ms, esconderVisible);
        })
    }

    


    
