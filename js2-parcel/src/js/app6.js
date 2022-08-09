//Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.
let btn6 = document.getElementById('btn6');
btn6.addEventListener('click',findA);
function findA (){
    let input6 = document.getElementById("input6").value;
    let count = [];
	for(let i = 0; i < input6.length; i++) {
		if (input6[i] === "a") count.push(i);
		if (input6[i] === "e") count.push(i);
		if (input6[i] === "i") count.push(i);
		if (input6[i] === "o") count.push(i);
		if (input6[i] === "u") count.push(i);

	}
	let numbOfvocals = document.getElementById("text6").innerHTML = count.length;
    text6.innerHTML = `El número de vocales que aparecen es : ${numbOfvocals}`
}