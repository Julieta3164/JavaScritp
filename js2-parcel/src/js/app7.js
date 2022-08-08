let usedInput = document.getElementById("input7");
let button = document.getElementById("btn7");
let resultado = document.getElementById("text7")



function consultrText() {

    let separateText = usedInput.value.toLowerCase();

    return separateText;
}
function searchForVowels() {

    let a, e, i, o, u
    a = e = i = o = u = 0
    let letters = consultrText();


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
    resultado.innerHTML = `<p> el numero de a son ${a}</p> <p> el numero de e son ${e} </p>
    <p> el numero de i son ${i}</p> <p> el numero de o son ${o}</p> <p> el numero de u son ${u}</p>`
}

button.addEventListener("click", searchForVowels)