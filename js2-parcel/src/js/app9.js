//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
const usedInput = document.getElementById("input9");
const button = document.getElementById("btn9");
const resultado = document.getElementById("text9");



function whichOneIsBigger(numbOne){
    if (numbOne % 2 === 0 || numbOne % 3 === 0 || numbOne % 5 === 0 || numbOne % 7 === 0) {
        if (numbOne % 2 === 0) {
            resultado.innerHTML = "El número si es divisible por 2 ";
        }
        if (numbOne % 3 === 0) {
            resultado.innerHTML = "El número si es divisible por 3 ";
        }
        if (numbOne % 5 === 0) {
            resultado.innerHTML = "El número si es divisible por 5 ";
        }
        if (numbOne % 7 === 0) {
            resultado.innerHTML = "El número si es divisible por 7 ";
        }
        } else {
            resultado.innerHTML = "El número no es divisible ni por 2 ni por 3 ni por 5 ni por 7 ";
        }

button.addEventListener("click", () =>{
    let numbOneUser = usedInput.value;
    whichOneIsBigger(numbOneUser);
    
});
}