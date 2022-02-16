const metros = 1000;
const segundos = 3600;

function kilometroametro(velocidad1, metros, segundos) {
    return (velocidad1 * metros)/segundos;
 }

 function metroakilometro(velocidad2, metros, segundos) {
    return (velocidad2 * segundos)/metros;
 }

 
 function conversorUno() {
     const input1 = document.getElementById("kilometroPorHora");
     const value1 = input1.value;
 
     const distancia = kilometroametro(value1, metros, segundos);
    
     resultKilometro.innerText = distancia + " m/s";
 }
 
 function resultConversorDos() {
     const input2 = document.getElementById("metroSobreSegundo");
     const value2 = input2.value;
 
     const metro = metroakilometro(value2, metros, segundos);
    
     converosdos.innerText = metro + " Km/h";
 }
 
