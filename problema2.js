/*
    Author: Joaquin_Pinto
    Email: juacopinto@gmail.com
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Completa la funcion 'miniMaxSum' de abajo.
 *
 * La funcion acepta un INTEGER_ARRAY arr como unico parametro.
 */

function miniMaxSum(arr) {
	// escribe tu codigo aqui
	let minimo = parseInt(Math.min(...arr));
	let maximo = parseInt(Math.max(...arr));
	let resultadoMinimo = 0;
	let resultadoMaximo = 0;

	for (let numero of arr) {
		if (numero < 10 ** 9) {
			resultadoMinimo += numero;
		}
	}
	resultadoMinimo = resultadoMinimo - minimo;
	for (let numero of arr) {
		if (numero < 10 ** 9) {
			resultadoMaximo += numero;
		}
	}
	resultadoMaximo = resultadoMaximo - maximo;

	return `El numero minimo es: ${resultadoMaximo} y el numero minimoes: ${resultadoMinimo}`;
}
const arreglo = [7, 3, 9, 1, 5];
console.log(miniMaxSum(arreglo));

function main() {
	const arr = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((arrTemp) => parseInt(arrTemp, 10));

	miniMaxSum(arr);
}
