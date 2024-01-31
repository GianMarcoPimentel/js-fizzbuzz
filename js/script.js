/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” 
al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 */

//creo una lista su html e inserisco gli elementi tramite js c on il ciclo for

//memorizzo la lista
const grigliaElement = document.querySelector("#griglia")
 // sevolessi scriverlo con js userei questa proprità per farmu apparire il valore in pagina
 //listaElement.innerHTML += "<li>Elemento</li>";


 //uso invece un ciclo for per creare 100 numeri 
 for(i=0; i<=10; i++){
    grigliaElement.innerHTML += `<div class="square">${i}</div>` ;

    /* const newElement = document.createElement("div");
    newElement.className = "square"
    newElement.style.background = "red"; */
    
} 