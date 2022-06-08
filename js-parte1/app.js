//Escribe un programa que escriba en la pantalla un texto que diga “Hello World”.
let mensaje="Hello World";
let contenedorMensaje=document.getElementById("hello");
contenedorMensaje.innerHTML=mensaje;


//Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.
let suma= 3+5;
let contenedorSuma=document.getElementById("resultado");
contenedorSuma.innerHTML=suma;

//Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga “Hola nombreUsuario"
function saludar(){
    let nombreUsuario=document.getElementById("nombre").value;
    let mensajeSaludo ="";
    if(nombreUsuario != ""){
        mensajeSaludo="Hola "+nombreUsuario;
    } else{
        mensajeSaludo= "Introduzca su nombre para saludarle";
    }
    let contenedorSaludo=document.getElementById("saludo");
    contenedorSaludo.innerHTML=mensajeSaludo; 
}

//Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
function sumar(){
    let numeroUno=parseFloat(document.getElementById("number-1").value);
    let numeroDos=parseFloat(document.getElementById("number-2").value);
    let contenedorResultado=document.getElementById("resultados");

    let resultado=numeroUno+numeroDos;
    contenedorResultado.innerHTML=resultado;    

}