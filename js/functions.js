function asignarValor(caracter) {
    let pantalla = document.getElementById("pantalla");
    sessionStorage.setItem("resultat", pantalla.value);
    pantalla.value += caracter;
}

function resolver() {
    let pantalla = document.getElementById("pantalla");
    let resultado = eval(pantalla.value);
    sessionStorage.setItem("resultat", resultado);
    pantalla.value = resultado;
}

function clear() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
    sessionStorage.removeItem("resultat")
}