let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;


function verificarIntentoUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(listaNumerosSorteados);
    console.log(numeroSecreto);
    
    let msgWin = `Adivinaste el número secreto en ${intentos} ${intentos==1?"intento":"intentos"}!!`;
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", msgWin);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario<numeroSecreto){
            asignarTextoElemento("p", "El número secreto es mayor al ingresado!!");    
        }else{
            asignarTextoElemento("p", "El número secreto es menor al ingresado!!");
        }
        intentos++;
    }
    return;
}

function generarNumeroAleatorio(maximo){
    let aleatorio = Math.floor(Math.random() * maximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles!!"); 
    }else{
        if (listaNumerosSorteados.includes(aleatorio)){
            return generarNumeroAleatorio(maximo);
        }else{
            listaNumerosSorteados.push(aleatorio);
            return aleatorio;
        }
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarEntrada(){
    let entrada = document.querySelector("#valorUsuario");
    entrada.value = "";
}

function condicionesEntrada() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p",`Ingrese un número del 1 al ${numeroMaximo}`);
    limpiarEntrada();
    numeroSecreto = generarNumeroAleatorio(numeroMaximo);
    intentos=1;
}

function reiniciarJuego(){
    condicionesEntrada();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    return;
}

condicionesEntrada();