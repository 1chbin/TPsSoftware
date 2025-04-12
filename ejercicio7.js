/*
Extraer el dominio de una dirección de correo electrónico:
Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el
dominio de la misma.
● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar”
*/

var email1="Alluejoaquin@hotmail.com";
var email2= "Alluejoaquinnicolas@ahk.com.ar";

function extraerArroba(email) {
    let partes = email.split("@");
        return partes[1];
    }

console.log(extraerArroba(email1));
console.log(extraerArroba(email2));
