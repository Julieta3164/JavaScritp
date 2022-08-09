//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let btn8 = document.getElementById('btn8');
btn8.addEventListener('click',findDivisor);
console.log(btn8)
function findDivisor(){ 
    let input8 = document.getElementById('input8').value;
    let text8 = document.getElementById('text8');
    let divisor = []
    if( input8 % 2 == 0){
        text8.innerHTML=`${input8}es divisible por 2`
        divisor.push(input8)
    };
    if(input8 % 3  === 0 ){
        text8.innerHTML=`${input8}es divisible por 3`
    };
    if(input8 % 5  === 0 ){
        text8.innerHTML=`${input8}es divisible por 5`
    };
    if(input8 % 7  === 0 ){
        text8.innerHTML=`${input8}es divisible por 7`
    };
}