/*  Consegna:
    Scrivi un programma che stampi in console i numeri da 1 a 100.
    MILESTONE 1
    Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    MILESTONE 2 (Bonus)
    Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
    MILESTONE 3 ( superbonus )
    Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
    Prima di partire a scrivere codice poniamoci qualche domanda:
    Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
    Consigli del giorno:
    1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

let numContainer = document.getElementById('numberContainer');

for (let i = 1; i <= 100; i++) {
    // console.log(i)
    if ( i % 5 == 0 && i % 3 == 0) { 
        numContainer.innerHTML += `<div class="width_calc d-flex align-items-center justify-content-center fs-3 text-white p-3 border border-white" style="background-color: var(--bs-primary)">FizzBuzz</div>`;
        console.log('FizzBuzz')
    }
    else if ( i % 5 === 0 ) {
        numContainer.innerHTML += `<div class="width_calc d-flex align-items-center justify-content-center fs-3 text-white p-3 border border-white" style="background-color: var(--bs-yellow)">Buzz</div>`;
        console.log('Buzz')
        }
    else if ( i % 3 === 0 ) {
        numContainer.innerHTML += `<div class="width_calc d-flex align-items-center justify-content-center fs-3 text-white p-3 border border-white" style="background-color: var(--bs-teal)">Fizz</div>`;
        console.log('Fizz')
    }  else  {
        numContainer.innerHTML += `<div class="width_calc d-flex align-items-center justify-content-center fs-3 text-white p-3 border border-white" style="background-color: var(--bs-info)">${i}</div>`;
        console.log(i)
    } 
} 


// APPEND
// let div = document.createElement("div")
// let p = document.createElement("p")
// div.append(p)

// console.log(div.childNodes) // NodeList [ <p> ]



// ALTRO METODO
// let row = document.querySelector('.row');
// console.log(row);

// for(let i = 1; i <= 100; i++) {
//     const box = document.createElement('div');
//     //Creo il risultato di default
//     let result = i;
//     let classBox = ''; //La classe specifica per Fizz, Buzz, FIzzBuzz

//     //Se è divisibile per 15 (3 e 5) (il modulo non da resto)
//     if (i % 15 == 0) { // if(!(i % 15))
//         result = 'FizzBuzz';
//         classBox = result;
//     } else if (i% 3 === 0) { // se invece è divisibile solo per 3
//         result = 'Fizz';
//         classBox = result;
//     } else if (i % 5 === 0) { // se invece è divisibile solo per 5
//         result = 'Buzz';
//         classBox = result;
//     } else {
//         result = i   
//     classBox = result 
//     }
// }

//VERSIONE COMPATTA
/*  if(!(i & 3)) result = 'Fizz';
    if(!(i % 5)) result = 'Buzz';
    if(!(i % 15)) result = 'FizzBuzz'; */

//Stampo in pagina i box
// box.innerHTML = result;
// box.className = 'box' + classBox;
// row.append(box); 

// console.log(result);