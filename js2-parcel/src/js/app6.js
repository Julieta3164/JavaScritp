let inputUsed = document.getElementById("input6");
let button = document.getElementById("btn6");
let resultado = document.getElementById("text6");

function numberOfVowels() {
    let chain = inputUsed.value;
    let characterNumber = chain.length;
    chain = chain.toUpperCase();  
    let vowels;
    let counter = 0;
    let i;
    for (i = 0; i < characterNumber; i++) {
        vowels = chain.charAt(i); 
        if ((vowels == "A") || (vowels == "E") || (vowels == "I") || (vowels == "O") || (vowels == "U")) {
            counter++;
        }
    }
    resultado.innerHTML = `el total de vocales ${counter}`;
}
button.addEventListener("click", numberOfVowels);