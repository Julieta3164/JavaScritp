//Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.
function comparar(){
    let numero1=parseFloat(document.getElementById("n1").value);
    let numero2=parseFloat(document.getElementById("n2").value);
    let mayor=0;
    if (numero1>numero2){
        mayor=numero1;
    }else{
        mayor=numero2;
    }
    document.getElementById("text1").innerHTML= "Este es el mayor: " +mayor;
}

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
    divisible.innerHTML=`${num} si es divisible entre 2`;
        
    }
    else {
        divisible.innerHTML=`${num} no es divisible entre 2`;
    }
}

//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
const insertText = document.getElementById("one-lyrics");
const buttonLyrics = document.getElementById("btn-lyrics");
const lyrics = document.getElementById("lyrics");


buttonLyrics.addEventListener('click', A)

    function A(){
        let text = insertText.value;
        let a = text.length;
        let lettersA=[];
        for (let i = 0; i < a; i++) {

            if (text.substr(i, 1) === "a" ){
        
        lyrics.innerHTML=lettersA.push(text.substr(i,1) ) 
        
        }   
        
    }}

    //Escribe un programa que pida una frase y escriba las vocales que aparecen
let btn5=document.getElementById('btn5');
btn5.addEventListener('click',Search);

function Search () {
    let input5 = document.getElementById("input5").value;
    let count = [];

	for(let i = 0; i < input5.length; i++) {
		if (input5[i] === "a") count.push("a");
		if (input5[i] === "e") count.push("e");
		if (input5[i] === "i") count.push("i");
		if (input5[i] === "o") count.push("o");
		if (input5[i] === "u") count.push("u");
	}
	let totalVocals = document.getElementById("text5").innerHTML = count;
    text5.innerHTML = `las vocales que aparecen son : ${totalVocals}`
} 

//Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.
let btn6 = document.getElementById('btn6');
btn6.addEventListener('click',findA);
function findA (){
    let input6 = document.getElementById("input6").value;
    let count = [];
	for(let i = 0; i < input6.length; i++) {
		if (input6[i] === "a") count.push(i);
		if (input6[i] === "e") count.push(i);
		if (input6[i] === "i") count.push(i);
		if (input6[i] === "o") count.push(i);
		if (input6[i] === "u") count.push(i);

	}
	let numbOfvocals = document.getElementById("text6").innerHTML = count.length;
    text6.innerHTML = `El número de vocales que aparecen es : ${numbOfvocals}`
}

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


let input = document.getElementById('input9');
let btn9 = document.getElementById('btn9');
let text9 = document.getElementById('text9');
        
btn9.addEventListener('click', () => {
let input9 = input.value;
let result = divisibility(input9);
text9.innerHTML = `Resultado: ${result}`; 
});
        
        function divisibility(input9) {
        
            if (input9 % 2 === 0 || input9 % 3 === 0 || input9 % 5 === 0 || input9 % 7 === 0) {
                if (input9 % 2 === 0) {
                    document.write(`Resultado: ${input9} Es divisible entre 2 <br/>`);
                }
                if (input9 % 3 === 0) {
                    document.write(`Resultado: ${input9} Es divisible entre 3 <br/>`);
                }
                if (input9 % 5 === 0) {
                    document.write(`Resultado: ${input9} Es divisible entre 5 <br/>`);
                }
                if (input9 % 7 === 0) {

                    document.write(`Resultado: ${input9} Es divisible entre 7 <br/>`);
                }
            } else {
                return("No es divisible ni entre 2, ni entre 3, ni entre 5, ni entre 7");
            }
        }; 


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
}