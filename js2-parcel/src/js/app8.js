//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
const usedInput = document.getElementById("input8");
const button = document.getElementById("btn8");
const resultado = document.getElementById("text8");



function whichOneIsBigger(numbOne){
    if (numbOne % 2 === 0 || numbOne % 3 === 0 || numbOne % 5 === 0 || numbOne % 7 === 0) {
    
    resultado.innerHTML = "El número si es divisible"
    
} else{
    resultado.innerHTML = "El número no es divisible"
}
    
}
btn8.addEventListener("click", () =>{
    let numbOneUser = usedInput.value;
    whichOneIsBigger(numbOneUser);
    
});