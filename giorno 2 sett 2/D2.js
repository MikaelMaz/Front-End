/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var primonumero = parseInt(prompt("Inserisci il primo numero:"));
var secondonumero = parseInt(prompt("Inserisci il secondo numero:"));

if (primonumero > secondonumero) {
  console.log("Il numero più grande è " + primonumero);
} 
else if (secondonumero > primonumero) {
      console.log("Il numero più grande è " + secondonumero); 
}
 else { 
  console.log("I due numeri sono uguali."); 
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero = parseInt(prompt("Inserisci un numero intero:"));
if (numero !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero = parseInt(prompt("Inserisci un numero:"));
if (numero % 5 === 0) {
  console.log("divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero1 = parseInt(prompt("Inserisci il primo numero intero:"));
var numero2 = parseInt(prompt("Inserisci il secondo numero intero:"));
if (numero1 === 8 || numero2 === 8) {
  console.log("Uno dei numeri è uguale a 8.");
} 
else if (numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  console.log("La somma o la sottrazione dei due numeri è uguale a 8.");
} 
else {
  console.log("Nessuna delle condizioni è soddisfatta.");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 60; 
var shippingCost = 10;
if (totalShoppingCart > 50) {
  shippingCost = 0; 
}

var totalToCharge = totalShoppingCart + shippingCost;
console.log("Importo totale da addebitare: " + totalToCharge + " euro");


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 60; 
var shippingCost = 10;
if (totalShoppingCart > 50) {
  shippingCost = 0; 
}
var blackFridayDiscount = totalShoppingCart * 0.20; 

totalShoppingCart -= blackFridayDiscount;
var totalToCharge = totalShoppingCart + shippingCost;
console.log("Importo totale da addebitare: " + totalToCharge + " euro");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero1 = 25;
var numero2 = 15;
var numero3 = 30;
if (numero1 > numero2) {
  var temp = numero1;
  numero1 = numero2;
  numero2 = temp;
}
if (numero2 > numero3) {
  var temp = numero2;
  numero2 = numero3;
  numero3 = temp;
}

if (numero1 > numero2) {
  var temp = numero1;
  numero1 = numero2;
  numero2 = temp;
}

console.log("Variabili ordinate in ordine decrescente:");
console.log("Numero1: " + numero1);
console.log("Numero2: " + numero2);
console.log("Numero3: " + numero3);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var valore = "42"; 
if (!isNaN(valore)) {
  console.log("Il valore è un numero.");
} else {
  console.log("Il valore non è un numero.")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero = 10;
if (numero % 2 === 0) {
  console.log("Il numero è pari.");
} else {
  console.log("Il numero è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Torento' ,
  skills: ['javascript', 'html', 'css'],
}
console.log(me);

delete me.lastName;
console.log (me);

if (me.skills.length > 0) {
  me.skills.pop();
}
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numeri = [];

for (var i = 1; i <= 10; i++) {
  numeri.push(i);
}
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (numeri.length > 0) {
  numeri[numeri.length - 1] = 100;
}
console.log(numeri); 