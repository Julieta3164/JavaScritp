//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let btn7 = document.getElementById('btn7');
btn7.addEventListener('click',countVowels);
let text7 = document.getElementById('text7')

function countVowels (){

let input7 = document.getElementById('input7').value
let resultado = []
let vocals=['a','e','i','o','u']

vocals.forEach(vocal=>{
resultado.push(`Contiene: ${input7.split('').filter(letra => letra == vocal).length} ${vocal}`)
})

text7.innerHTML= resultado.join(',')
}