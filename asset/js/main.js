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
    console.log(i)
    if ( i % 3 == 0){
        numContainer.innerHTML += `<div class="width_calc fs-3 text-white p-3 border border-white">${i = ('Fizz')}</div>`;
    } else if ( i % 5 == 0 ) {
        numContainer.innerHTML += `<div class="width_calc fs-3 text-white p-3 border border-white">${i = ('Buzz')}</div>`;
    } else if ( i % 3 == 0 && i % 5 == 0 ) {
        numContainer.innerHTML += `<div class="width_calc fs-3 text-white p-3 border border-white">${i = ('FizzBuzz')}</div>`;
    } else {
        numContainer.innerHTML += `<div class="width_calc fs-3 text-white p-3 border border-white">${i}</div>`;
    }
}