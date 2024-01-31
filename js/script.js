/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” 
al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 */

//creo una griglia su html e inserisco gli elementi tramite js c on il ciclo for


//memorizzo il titolo
const titleElement = document.querySelector("#title");
titleElement.innerHTML = "FizzBuzzDom"
titleElement.style.color = "white";
titleElement.style.fontSize= "140px"
titleElement.style.fontWeight="bold";
titleElement.style.textAlign="center";


//memorizzo la griglia
const grigliaElement = document.querySelector("#griglia")
 // sevolessi scriverlo con js userei questa proprità per farmu apparire il valore in pagina
 //grigliaElement.innerHTML += "<li>Elemento</li>";


 //uso invece un ciclo for per creare 100 numeri 
 for(i=1; i<=100; i++){
   

            if (i % 3 == 0 && i % 5 == 0){
            
                grigliaElement.innerHTML += `
                <div class="square multiple3 multiple5">fizzbuzz</div>
                `;
            } else if (i % 5 == 0){
                grigliaElement.innerHTML += `<div class="square multiple5">buzz</div>
                ` ;
            }else if(i % 3 == 0){
                grigliaElement.innerHTML += `
                <div class="square multiple3">fizz</div>
                `;
            } else{
                grigliaElement.innerHTML += `
                <div class="square normal">${i}</div>
                `;
            }
    
} 