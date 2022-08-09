//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

let number1 = document.getElementById('input11A');
let number2 = document.getElementById('input11B');
let btn11 = document.getElementById('btn11');
let text11 = document.getElementById('text11');

btn11.addEventListener('click', result11)

function result11() {
let numberA = number1.value;
let numberB = number2.value;
let valor;
let i;

if (numberA < numberB) {
    valor = numberA;
    } else {
    valor = numberB;
    } 

    for (i=2; i < valor / 2; i++) {
        if (numberA % i === 0 && numberB % i === 0) {
        text11.innerHTML= `Son divisible entre: ${i}`;

}
}

}