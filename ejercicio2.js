/*
Concatenar elementos de un array con un separador personalizado:
Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.
● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript"
*/

var input1 = "hola";
var input2 = "me";
var input3 = "llamo";
var input4 = "joaquin";

function juntarPalabras(palabra1, palabra2){
    return palabra1.join(palabra2);
}

console.log(juntarPalabras([input1, input2, input3, input4], "-"));

//Sin importar cuantas palabras pongamos, seguira funcionando.