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
    document.getElementById("comparacion").innerHTML= "Este es el mayor: " +mayor;
}
//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
function comparar(){
    let numero1=parseFloat(document.getElementById("numb1").value);
    let numero2=parseFloat(document.getElementById("numb2").value);
    let numero3=parseFloat(document.getElementById("numb3").value);
    let mayor=0;

    if (numero1>numero2){
        mayor=numero1;
    }else (numero1>numero3) {
    }

   document.getElementById("comparacion").innerHTML= "Este es el mayor: ";
}