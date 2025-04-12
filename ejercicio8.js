/*
Combinar dos arrays alternando sus elementos:
Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos
arrays combinados alternativamente.
● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', ‘d’], la salida debería ser [1,
‘a’, 2, ‘b’, 3, ‘c’, ‘d’]
*/

function combinarLetrasYNumeros(array1, array2) {
    let resultado = [];
    let mathmax = Math.max(array1.length, array2.length); //lo hago con math porque no se me ocurrio otra forma de hacerlo :(

    for (let i = 0; i < mathmax; i++) {
    if (i < array1.length) {
        resultado.push(array1[i]);
    }
    if (i < array2.length) {
        resultado.push(array2[i]);
    }
    }

    return resultado;
}

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c', 'd'];
let arr3 = [4, 5, 6, 7, 8];

console.log(combinarLetrasYNumeros(arr1, arr2)); 
console.log(combinarLetrasYNumeros(arr2, arr1)); 
console.log(combinarLetrasYNumeros(arr1, arr3)); 