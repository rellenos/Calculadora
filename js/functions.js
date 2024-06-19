const historial = [];

//funcio per actualitzar la pantalla cada vegada que afegim un valor (nomes per a que les pantalles dels conversors funcionin bé)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pantalla').addEventListener('input', function() {
        decToBin(); decToHex(); decToOct();
    });
});
//funcions per convertir els numeros en binari, hexadecimal o octal
function decToBin() {
    let convertToD = document.getElementById("pantalla").value;
    let decimal = parseInt(convertToD);
    let binario = decimal.toString(2);
    document.getElementById('pantallaSecundaria1').innerHTML = binario;
}

function decToHex() {
    let convertToH = document.getElementById("pantalla").value;
    let decimal = parseInt(convertToH);
    let hexadecimal = decimal.toString(16).toUpperCase();
    document.getElementById('pantallaSecundaria2').innerHTML = hexadecimal;
}

function decToOct() {
    let convertToO = document.getElementById("pantalla").value;
    let decimal = parseInt(convertToO);
    let octal = decimal.toString(8);
    document.getElementById('pantallaSecundaria3').innerHTML = octal;
}

function asignarValor(caracter) {
    let pantalla = document.getElementById("pantalla"); //assignar la variable "pantalla" a partir del element amb id "pantalla", en aquest cas un input-text que farà de panell de visualitzacio de la calculadora
    sessionStorage.setItem("operations", pantalla.value); //
    pantalla.value += caracter; //
    decToBin(); decToHex(); decToOct();
}

function resolver() {
    try {
        let pantalla = document.getElementById("pantalla");
        let resultado = eval(pantalla.value);
        let pantallaHistorial = document.getElementById("historial");
        historial.push(pantalla.value + "=" + resultado + "<br>");
        sessionStorage.setItem("operations", resultado);
        pantallaHistorial.innerHTML = historial;
        // pantallaHistorial.value = historial;
        decToBin(); decToHex(); decToOct();
    }
    catch(error) {
        document.getElementById("pantalla").value = 'Error';
    }
}

function retroceder() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
    decToBin(); decToHex(); decToOct();
}

function limpiar() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
    sessionStorage.removeItem("operations")
    decToBin(); decToHex(); decToOct();
}

window.addEventListener("keydown",(e)=>{
    if(e.keyCode===13) {resolver()}
    if(e.keyCode===67) {limpiar()}
}) 