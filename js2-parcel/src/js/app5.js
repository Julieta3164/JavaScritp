//Escribe un programa que pida una frase y escriba las vocales que aparecen

const textInsert = document.getElementById("vowels");
const btnVowels = document.getElementById("btn-vowels");
const lettersVowels = document.getElementById("text-vowels");

btnVowels.addEventListener('click', B)

function B(){

    let text = textInsert.value;
    let vocal = text.length;
    let aeiou=[];
    for (i = 0; i < vocal; i++) {

        if(text.substr(i, 1) === "a" || text.substr(i, 1) === "e" || text.substr(i, 1) === "i" || text.substr(i, 1) === "o" || text.substr(i, 1) === "u")
        {
            lettersVowels.innerHTML=aeiou.push(text.substr(i,1)) 
        }

}}