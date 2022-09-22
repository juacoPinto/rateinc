/*
    Author: Joaquin_Pinto
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
 * Completa la funcion 'simpleArraySum' de abajo.
 *
 * Se espera que la funcion retorne un INTEGER.
 * La funcion acepta un INTEGER_ARRAY ar como parametro.
 */

function simpleArraySum(ar) {
	// Escribe tu codigo aqui
	let resultado = 0;
	for (let i of ar) {
		if (ar.length > 0 && i <= 1000) {
			resultado += i;
		}
	}
	return resultado;
}

const arreglo = [664, 12, 9, 1, 4];
console.log(simpleArraySum(arreglo));

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arCount = parseInt(readLine().trim(), 10);

	const ar = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((arTemp) => parseInt(arTemp, 10));

	const result = simpleArraySum(ar);

	ws.write(result + "\n");

	ws.end();
}
