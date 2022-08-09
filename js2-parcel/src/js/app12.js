//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
let btn12 = document.getElementById('btn12');
btn12.addEventListener('click',findPrimeNumber);
console.log(btn)
function findPrimeNumber(){ 
    let numero = document.getElementById('input12').value;
    let text12 = document.getElementById('text12');
    if( numero % 2 == 0){
        text12.innerHTML=`El número : ${numero} no es primo`
    };
    if (numero % 2  != 0 ){
        text12.innerHTML= `El número : ${numero} es primo`
    };
    
}