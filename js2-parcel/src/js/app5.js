//Escribe un programa que pida una frase y escriba las vocales que aparecen

let userInput = document.getElementById("vowels");
let button = document.getElementById("btn-vowels");
let resultado = document.getElementById("text-vowels")

function consultText() {

    let separateText = userInput.value.toLowerCase();

    return separateText;
}
function searchForVowels() {

    let a, e, i, o, u
    a = e = i = o = u = []
    let Letters = consultText();


    for (k = 0; k < Letters.length; k++) {

        switch (Letters[k]) {
            case "a":
                a.push("a");
                break;
            case "e":
                e.push("e");
                break;
            case "i":
                i.push("i");
                break;
            case "o":
                o.push("o");
                break;
            case "u":
                u.push("u");
                break;
        }
    }
    resultado.innerHTML = `Tenemos: ${a} `
}

button.addEventListener("click", searchForVowels)