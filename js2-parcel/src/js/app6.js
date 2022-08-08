//Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.
let usedInput = document.getElementById("input6");
let button = document.getElementById("btn6");
let result = document.getElementById("text6")

function consultingPhrase() {

    let textSeparate= userInput.value.toLowerCase();

    return textSeparate;
}
function searchForVowels() {

    let a, e, i, o, u
    a = e = i = o = u = 0
    let letters = consultingPhrase();


    for (k = 0; k < letters.length; k++) {

        switch (letters[k]) {
            case "a":
                a++;
                break;
            case "e":
                e++;
                break;
            case "i":
                i++;
                break;
            case "o":
                o++;
                break;
            case "u":
                u++;
                break;
        }
    }
    resultado.innerHTML = `<p> El número de a son ${a}</p> <p> El número de e son ${e} </p>
    <p> El número de i son ${i}</p> <p> El número de o son ${o}</p> <p> El número de u son ${u}</p>`
}

button.addEventListener("click", searchForVowels)