const prompt = require('prompt-sync')(); //! Importar módulo prompt-sync para recibir datos del usuario

//? 1. Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));
let num3 = Number(prompt("Ingrese el tercer número: "));

//! Declarar variables para guardar los números ordenados
let mayor, medio, menor; 

//? 2. Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//? 3. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
if (num1 > num2 && num1 > num3) {
    mayor = num1;
    if (num2 > num3) {
        medio = num2;
        menor = num3;
    } else {
        medio = num3;
        menor = num2;
    }
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
    if (num1 > num3) {
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    }
} else {
    mayor = num3;
    if (num1 > num2) {
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

//? 4. Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
} 

//! Imprimir los números ordenados
console.log("Números de menor a mayor:", menor, medio, mayor);
console.log("Números de mayor a menor:", mayor, medio, menor);