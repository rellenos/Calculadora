const historial = [];
// var pantalla = document.getElementById("pantalla");

function asignarValor(caracter) {
    let pantalla = document.getElementById("pantalla"); //assignar la variable "pantalla" a partir del element amb id "pantalla", en aquest cas un input-text que farà de panell de visualitzacio de la calculadora
    sessionStorage.setItem("operations", pantalla.value); //
    pantalla.value += caracter; //
}

function resolver() {
    try {
        let pantalla = document.getElementById("pantalla");
        let resultado = eval(pantalla.value);
        let pantallaHistorial = document.getElementById("historial");
        historial.push(" " + pantalla.value + "=" + resultado);
        sessionStorage.setItem("operations", resultado);
        pantalla.value = resultado;
        pantallaHistorial.value = historial;
    }
    catch(error) {
        document.getElementById("pantalla").value = 'Error';
    }
}

function retroceder() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
}

function limpiar() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
    sessionStorage.removeItem("operations")
}

window.addEventListener("keydown",(e)=>{
    if(e.keyCode===13) {resolver()}
    if(e.keyCode===67) {limpiar()}
}) 