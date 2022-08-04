//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const numero3 = document.getElementById('num3');
const btn= document.getElementById('button');
const compare = document.getElementById("comparacion2");

btn.addEventListener("click", result)

function result() {
    let num1 = numero1.value;
    let num2 = numero2.value;
    let num3 = numero3.value;

    if (num1 > num2 && num1 > num3) {
        compare.innerHTML=`El resultado es....${num1}`; 
        
    }
    if (num2 > num1 && num2 > num3) {
        compare.innerHTML=`El resultado es....${num2}`;
        
    }
    if (num3 > num1 && num3 > num2) {
        compare.innerHTML=`El resultado es....${num3}`;
    
    }

    
}