//Escribir un programa que escriba en pantalla los divisores de un número dado

let btn10 = document.getElementById('btn10');
let text10 = document.getElementById('text10');
btn10.addEventListener('click',searchDividers);    

function searchDividers (){
let n = []
let numeroInput = document.getElementById('input10').value; 
for(let divisor = numeroInput; divisor >= 0; divisor--){
    if(numeroInput % divisor === 0){
        console.log(divisor);
        n.push(divisor);
    }
    text10.innerHTML=`Los divisores de ${numeroInput} son ${n}`
}
}