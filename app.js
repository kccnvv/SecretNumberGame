let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `You got it right in ${intentos} ${(intentos === 1) ? "try" : "trys"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "The secret number is lower");
        }else{
            asignarTextoElemento("p", "The secret number is higher");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo) + 1);
    if (listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "All possible numbers have been found!");

    }
    else{
        if (listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}


function condicionesIniciales() {
    asignarTextoElemento("h1", "Secret Number Game");
    asignarTextoElemento("p", `Choose a number between 1-${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos del numero. Nuevo numero secreto y reinicial intentos.
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}


condicionesIniciales();