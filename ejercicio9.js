/*
Calcular impuestos:
Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y
todo el resto un 40%. Los menores de edad no abonan impuestos.
● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser
100.
*/

var edad1 = 18;
var ingreso1 = 1000;
var edad2 = 21;
var ingreso2 = 3000;
var edad3 = 30;
var ingreso3 = 2000;
var edad4 = 78;
var ingreso4 = 5000;

function impuestosDe(edad, ingreso) {
        if (edad < 18) {
        return 0;
        }
        else if (edad >= 18 && edad <= 20) {
        return ingreso * 0.10;
        }
        else if (edad >= 21 && edad <= 30) {
        return ingreso * 0.15;
        }
        else {
        return ingreso * 0.40;
        }
    }
    
    console.log(impuestosDe(edad1, ingreso1) + "$"); 
    console.log(impuestosDe(edad2, ingreso2) + "$"); 
    console.log(impuestosDe(edad3, ingreso3) + "$"); 
    console.log(impuestosDe(edad4, ingreso4) + "$"); 