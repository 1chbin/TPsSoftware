/* 
1 . Convertir una cadena de texto a formato de título:
Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.
● Ejemplo: Si la entrada es “mi amigo me invitó a comer”, la salida debería ser “Mi
Amigo Me Invitó A Comer”.
● Ayuda: Los strings entienden una función “toLowerCase()” que convierte la primera
letra del texto en mayúscula. Además, se espera que se resuelva con algún ciclo (exacto
o inexacto) y utilizando la función anteriormente mencionada.
*/

var frase1 = "Hola soy joaquin";
var frase2 = "estoy Estudiando desarrollo web";
var frase3 = "eN la CamArA AlemAnA";

function convertirTitulo(frase){

    let palabras = frase.toLowerCase().split(" ");

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > 0) {
            palabras[i] = palabra[0].toUpperCase() + palabra.slice(1);
        }      
    }

    return palabras.join(" ");

}

console.log(convertirTitulo(frase1))
console.log(convertirTitulo(frase2))
console.log(convertirTitulo(frase3))

//Aca muestro como sin importar si son muchas mayusculas entre medio o si fuesen todas mayusculas, el codigo funciona igual