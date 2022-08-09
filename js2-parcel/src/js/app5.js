//Escribe un programa que pida una frase y escriba las vocales que aparecen
let btn5=document.getElementById('btn5');
btn5.addEventListener('click',Search);

function Search () {
    let input5 = document.getElementById("input5").value;
    let count = [];

	for(let i = 0; i < input5.length; i++) {
		if (input5[i] === "a") count.push("a");
		if (input5[i] === "e") count.push("e");
		if (input5[i] === "i") count.push("i");
		if (input5[i] === "o") count.push("o");
		if (input5[i] === "u") count.push("u");
	}
	let totalVocals = document.getElementById("text5").innerHTML = count;
    text5.innerHTML = `las vocales que aparecen son : ${totalVocals}`
} 


