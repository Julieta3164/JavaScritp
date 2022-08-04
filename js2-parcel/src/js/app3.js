//Escribe un programa que pida un número y diga si es divisible por 2

const nu1 = document.getElementById("une-number");
const button = document.getElementById("divisble");
const divisible = document.getElementById("text");

button.addEventListener('click', () => {
    let num = nu1.value;
    let prueba= result3(num);
    
});


function result3(num) {
if (num % 2 === 0) {
    divisible.innerHTML=`${num} si es divisible por 2`;
        
    }
    else {
        divisible.innerHTML=`${num} no es divisible por 2`;
    }
}