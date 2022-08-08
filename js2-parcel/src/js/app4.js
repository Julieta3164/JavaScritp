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