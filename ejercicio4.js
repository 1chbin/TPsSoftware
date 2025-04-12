/*
4. Contar la cantidad de veces que aparece una palabra en una cadena:
Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
veces que aparece esa palabra en la cadena.
● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se
quiere buscar es “el”, la salida debería ser el número 2.
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cuando se tenga una
palabra, se la podrá comparar con la palabra buscada y si coincide … (siga usted!)
*/

let texto1 = "mañana sera un gran dia y saldra el sol, pero tambien mañana sera un dia nublado y llovera";
let texto2 = "primera nota 5, segunda nota 7, tercera nota 8, cuarta nota 9, quinta nota 9";

function contarPalabra(frase, palabraBuscada) {
    let palabra = "";
    var contador = 0;
    frase += " ";

    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i];

        if (caracter == " ") {
            if (palabra.toLowerCase() == palabraBuscada.toLowerCase()) {
                contador++;
            }
            palabra = "";
        }else {
            palabra += caracter;
        }
    }

    return contador;
}

console.log(contarPalabra(texto1, "mañana"))
console.log(contarPalabra(texto1, "sera"))
console.log(contarPalabra(texto2, "nota"))