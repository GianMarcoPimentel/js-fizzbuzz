/* 
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*/

const titleElement = document.querySelector("#title");
titleElement.innerHTML = "FizzBuzzDom"
titleElement.style.color = "white";
titleElement.style.fontSize= "140px"
titleElement.style.fontWeight="bold";
titleElement.style.textAlign="center";



const grigliaElement = document.querySelector("#griglia");
/* console.log(grigliaElement); */

for(let i = 1; i <=100; i++){
   
    // creo un elemento HTML da JS
    const newElement = document.createElement("div")
    /* console.log(newElement); */
    //modifico la classe
    newElement.className = "square";
    /* console.log(newElement); */
    // per scrivere all'interno del mio elemento appena creato il valore della i
    newElement.innerHTML = i;
    /* newElement.style.backgroundColor="red"; */
    // aggiungo la classe square alla griglia
    // si aggiunge con append()-->l'append inserice il nodo dopo l'ultimo figlio del nodo che stiamo indicando-->dopo l'ultimo figlio di grigliaElement gli devo appendere newElement
    grigliaElement.append(newElement);

  /*   if (i % 3 == 0 && i % 5 == 0){
        const new2Element = document.createElement("div");
        new2Element.newClass = "multple3 multiple5";
        new2Element.style.color= "red";
        grigliaElement.append(new2Element);
    } else if (i % 5 == 0){
        const new5Element = document.createElement("div");
        new5Element.newClass = "multiple5";
        grigliaElement.append(new5Element);
    }else if(i % 3 == 0){
        const new3Element = document.createElement("div");
        new3Element.newClass = "multiple5";
        grigliaElement.append(new3Element);
    } else{
        grigliaElement.innerHTML= i;
    }  */

    
    if (i % 3 == 0 && i % 5 == 0){
            
        newElement.innerHTML = "fizzbuzz";
        newElement.style.backgroundColor= "#F0466F";
    } else if (i % 5 == 0){
        newElement.innerHTML = "buzz";
        newElement.style.backgroundColor= "#FFD166";
    }else if(i % 3 == 0){
        newElement.innerHTML = "fizz";
        newElement.style.backgroundColor= "#0CD6A1";
    } else{
        newElement.innerHTML = i;
       
    }
    }
    const bodyElement = document.querySelector(".body");
    bodyElement.style.backgroundColor= "#083B4C";