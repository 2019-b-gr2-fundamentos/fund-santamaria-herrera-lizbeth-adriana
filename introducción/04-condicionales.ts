// 04-condicionales.ts
const casado = true;
if (casado == true){
    console.log("si estoy casado")
} else {
    console.log("no estoy casado")
}

if (casado == false){  // (expresion => boolean)
    console.log("no estoy casado");
} else {
    console.log("si estoy casado");
}

if (casado != true){
    console.log("no estoy casado")
} else {
    console.log("si estoy casado")
}

if (casado != false){
    console.log("si estoy casado")
} else {
    console.log("no estoy casado")
}

const tengoMosa = false;
const estaCasado =  true // expresion
const soyMosero = tengoMosa == true; 
const casadoYMosero = estaCasado && soyMosero

if (casadoYMosero){
    console.log("Casado y mosero")
} else {
    console.log("o casado o mosero o nada")
}

//casadoYMosero     <=> c==true && b==true && d==true

// AND -> &&

// TRUE y TRUE = TRUE
// TRUE y FALSE = FASE
// FALSE y TRUE = FALSE
// FALSE y FALSE = FALSE

// OR -> || -> Pipes

// TRUE y TRUE = TRUE
// TRUE y FALSE = TRUE
// FALSE y TRUE = TRUE
// FALSE y FALSE = FALSE


//apago la primera alarma me hago 
//bolita y lloro hasta la segunda 
//alarma y me levanto
//celularDescargado == true
//celularDañado     == true
//amaneceMuerto     == true
//estaActivadaLaAlarma  !=true
//estaEnModoSilencio     = true
//const seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto  == true || estaActivadaLaAlarma !=true || estaEnModoSilencio == true 

