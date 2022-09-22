/*
    Author: Joaquin Pinto
    Email: juacopinto@gmail.com
*/

"use strict";

const fs = require("fs");

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
 * Completa la funcion 'balancedSums' de abajo.
 *
 * Se espera que la funcion retorne un string.
 * La funcion acepta un INTEGER_ARRAY arr como parametro.
 */

function balancedSums(arr) {
	// Escribe tu codigo aqui
	for (let numero of arr) {
	}
}

const arreglo = [5, 6, 8, 11];
console.log(balancedSums(arreglo));

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const T = parseInt(readLine().trim(), 10);

	for (let TItr = 0; TItr < T; TItr++) {
		const n = parseInt(readLine().trim(), 10);

		const arr = readLine()
			.replace(/\s+$/g, "")
			.split(" ")
			.map((arrTemp) => parseInt(arrTemp, 10));

		const result = balancedSums(arr);

		ws.write(result + "\n");
	}

	ws.end();
}
