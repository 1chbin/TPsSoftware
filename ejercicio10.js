/* 
Resumen de cantidad de likes:
Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
de la cantidad de likes en formato de “K” para miles y “M” para millones.
● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34
567” la salida debería ser “34.5K”.
*/

const likes1 = 146;
const likes2 = 1204;
const likes3 = 10204;
const likes4 = 99999;
const likes5 = 1024758;
const likes6 = 471783647;

function formatearLikes(likes) {

    if (likes < 1000) {
        return likes.toString();
    } 
    
    else if (likes < 1000000) {
        return (likes / 1000).toFixed(2) + "K";
    } 
    
    else {
        return (likes / 1000000).toFixed(1) + "M";
    }

}

console.log(formatearLikes(likes1));  
console.log(formatearLikes(likes2));   
console.log(formatearLikes(likes3));  
console.log(formatearLikes(likes4)); 
console.log(formatearLikes(likes5)); 
console.log(formatearLikes(likes6)); //Ademas este caso demuestra que redondea para arriba, por lo que nos sirve bien