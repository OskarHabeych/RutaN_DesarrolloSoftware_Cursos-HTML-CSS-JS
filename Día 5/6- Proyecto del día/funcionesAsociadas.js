let peliculasAccion_12Anos= ["Gran Turismo", " Tortugas Ninja Adolescentes Mutantes: Caos mutante"];
let peliculasAccion_16Anos=["Megalodon2: The Trench", " Oppenheimer", " Blue Beetle"];
let peliculasAccion_Mas16Anos= ["Sound of Freddom"];
let peliculasAventura_12Anos= ["My Fairy Troublemaker", "  Tortugas Ninja Adolescentes Mutantes: Caos mutante", " How to Save the Immortal", " Elemental"," Gran Turismo"];
let peliculasAventura_16Anos= ["Blue Beetle"];
let peliculasAventura_Mas16Anos= ["-None-"];
let peliculasDrama_12Anos= ["Gran Turismo", " Les Choses Simples", " Barbie"];
let peliculasDrama_16Anos= ["Blue Jean", " Nubes Grises soplan sobre el campo verde"];
let peliculasDrama_Mas16Anos= ["-None-"];
let peliculasTerror_12Anos= ["-None-"];
let peliculasTerror_16Anos= ["Megalodon2: The Trench"];
let peliculasTerror_Mas16Anos= ["La Monja II", " Talk to Me"];

function recomendar(genero){
    let edad= document.getElementById("edadIngresada").value;
    let elementoRespuesta= document.getElementById("mostrarRecomendacion");

    switch(genero){
        case "accion":
           if(edad < 12){
              elementoRespuesta.textContent= " " + peliculasAccion_12Anos;
            } else{
                if(edad > 16){
                   elementoRespuesta.textContent= " " + peliculasAccion_Mas16Anos;
                 }
                  else{
                    elementoRespuesta.textContent= " " + peliculasAccion_16Anos;
                  }
                }
            break;
            case "aventura":
                if(edad < 12){
                    elementoRespuesta.textContent= " " + peliculasAventura_12Anos;
                  } else{
                      if(edad > 16){
                         elementoRespuesta.textContent= " " + peliculasAventura_Mas16Anos;
                       }
                        else{
                          elementoRespuesta.textContent= " " + peliculasAventura_16Anos;
                        }
                      }
                break;
            case "drama":
                if(edad < 12){
                    elementoRespuesta.textContent= " " + peliculasDrama_12Anos;
                  } else{
                      if(edad > 16){
                         elementoRespuesta.textContent= " " + peliculasDrama_Mas16Anos;
                       }
                        else{
                          elementoRespuesta.textContent= " " + peliculasDrama_16Anos;
                        }
                      }
                break;
            case "terror":
                if(edad < 12){  
                    elementoRespuesta.textContent= " " + peliculasTerror_12Anos;
                  } else{
                      if(edad > 16){
                         elementoRespuesta.textContent= " " + peliculasTerror_Mas16Anos;
                       }
                        else{
                          elementoRespuesta.textContent= " " + peliculasTerror_16Anos;
                        }
                      }
                break;
    }
}