const unmedio = 2;

function aceleracionMovil(velocidadfinal,velocidadinicial, tiempofinal, tiempoinicial) {
    return (velocidadfinal - velocidadinicial)/(tiempofinal - tiempoinicial);
 }

 function posicionMovil(posicioninicial2, velocidadinicial2, tiempo2, aceleracion2) {
    return  parseInt(posicioninicial2) + parseInt(velocidadinicial2 * tiempo2) + ((aceleracion2 * (tiempo2 * tiempo2))/2);
    
}

 function velocidadMovil(velocidadinicial3, tiempo3, aceleracion3) {
    return (aceleracion3 * tiempo3) + parseInt(velocidadinicial3);
 }


 function calcularAceleracion() {
    const input1 = document.getElementById("velocidadfinal1");
    const input2 = document.getElementById("velocidadinical1");
    const input3 = document.getElementById("tiempofinal1");
    const input4 = document.getElementById("tiempoinicial1");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const value4 = input4.value;

    const aceleracion = aceleracionMovil(value1, value2, value3, value4);
   
    resultAceleracion.innerText = aceleracion + " m/s^2";
}

function calcularPosicion() {
    const input5 = document.getElementById("posicioninicial2");
    const input6 = document.getElementById("velocidadinicial2");
    const input7 = document.getElementById("tiempo2");
    const input8 = document.getElementById("aceleracion2");
    const value5 = input5.value;
    const value6 = input6.value;
    const value7 = input7.value;
    const value8 = input8.value;

    const posicion = posicionMovil(value5, value6, value7, value8);
   
    resultPosicion.innerText = posicion + " metros.";
}

function calcularVelocidadF() {
    const input9 = document.getElementById("velocidadinicial3");
    const input10 = document.getElementById("tiempo3");
    const input11 = document.getElementById("aceleracion3");
    const value9 = input9.value;
    const value10 = input10.value;
    const value11 = input11.value;

    const velocidad = velocidadMovil(value9, value10, value11 );
   
    resultVelocidadfinal.innerText = velocidad + " m/s";
}

