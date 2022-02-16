//calcular distancia mru
// const velocidadDeDistancia = 4;
// const tiempoDeDistancia = 2;

function distanciaMovil(velocidad1, tiempo1) {
   return velocidad1 * tiempo1;
}
function velocidadMovil(distancia2, tiempo2) {
    return distancia2 / tiempo2;
 }
 function tiempoMovil(distancia3, velocidad3) {
    return distancia3 / velocidad3;
 }

function calcularDistancia() {
    const input1 = document.getElementById("velocidad1");
    const input2 = document.getElementById("tiempo1");
    const value1 = input1.value;
    const value2 = input2.value;

    const distancia = distanciaMovil(value1, value2);
   
    resultDistancia.innerText = distancia + " metros.";
}


function calcularVelocidad() {
    const input3 = document.getElementById("distancia2");
    const input4 = document.getElementById("tiempo2");
    const value3 = input3.value;
    const value4 = input4.value;

    const velocidad = velocidadMovil(value3, value4);
    
    resultVelocidad.innerText = velocidad + " m/s.";

}

function calcularTiempo() {
    const input5 = document.getElementById("distancia3");
    const input6 = document.getElementById("velocidad3");
    const value5 = input5.value;
    const value6 = input6.value;

    const tiempo = tiempoMovil(value5, value6);
   
    resultTiempo.innerText = tiempo + " segundos.";

}

