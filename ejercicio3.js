/*
Revertir las palabras de una frase:
Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.
● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría
ser insertada en un array (¿para qué?)
*/

var frase1 = "Estoy aprendiendo programacion";
var frase2 = "Este es un modelo de prueba";
var frase3 = "A probar palabraaaas";
var frase4 = "T a m b i e n f u n c i o n a a s i";

function invertirPalabras(frase) {

    var palabrasSeparadas = frase.split(" ");
    var palabrasInvertidas = [];

    for(let i = palabrasSeparadas.length - 1; i >= 0; i--) {    
        palabrasInvertidas.push(palabrasSeparadas[i]);
    }

    return palabrasInvertidas.join(" ");
}

console.log(invertirPalabras(frase1));
console.log(invertirPalabras(frase2));
console.log(invertirPalabras(frase3 + " " + frase2));
console.log(invertirPalabras(frase4));
