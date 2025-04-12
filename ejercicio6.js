/*
Eliminar los espacios en blanco al inicio y final de una cadena:
Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y
final de la misma.
● Ejemplo: Si la entrada es " JavaScript es divertido “, la salida debería ser "JavaScript
es divertido".
● Ayuda: Se sugiere utilizar un ciclo exacto para recorrer toda la frase y que cada vez que
se encuentre un caracter no “vacío” (espacio) se lo considere para la nueva palabra “sin
espacios”. Si se le busca la vuelta, se puede reutilizar la función del punto 2.
*/

function sacarEspacios(entrada) {

    let resultado = [];
    let entradaSinEspacios = entrada.split(" ");

    for(let i = 0; i < entradaSinEspacios.length; i++) {

        if(entradaSinEspacios[i] !== "") {

            resultado.push(entradaSinEspacios[i]);
        }
    }   

    return unirPalabras(resultado, " ");

}

function unirPalabras(palabras, separador) {
    return palabras.join(separador);
}

console.log(sacarEspacios(" soy joaquin y estoy estudiando "));
console.log(sacarEspacios(" Estos son modelos de prueba "));
console.log(sacarEspacios("    Tambien     con    muchos    espacios      "));

console.log("    asi     se     veria      sino      ")