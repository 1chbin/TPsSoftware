/*Comprobar si una cadena de texto termina con un determinado sufijo:
Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
termina con ese sufijo, false en caso contrario.
● Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende
saber si termina con “ción”, debería devolver true.
● Ayuda: Se espera que el ejercicio se resuelva con ciclos inexactos.*/

let texto1 = "me encanta programar";
let texto2 = "me encanta estudiar";

function terminaCon(cadena, sufijo) {

    let longitudCadena = cadena.length;
    let longitudSufijo = sufijo.length;

    if (longitudSufijo > longitudCadena){
        return false;
    }

    let coincide = true;
    let indiceCadena = longitudCadena - longitudSufijo;
    let indiceSufijo = 0;

    while (indiceSufijo < longitudSufijo && coincide) {
    if (cadena[indiceCadena] != sufijo[indiceSufijo]) {
        coincide = false;
    }
    indiceCadena++;
    indiceSufijo++;
    }

    return coincide;
}

console.log(terminaCon(texto1, "gramar"));
console.log(terminaCon(texto1, "diar"));// este va a dar true

console.log(terminaCon(texto2, "diar"));// este va a dar true
console.log(terminaCon(texto2, "cion"));