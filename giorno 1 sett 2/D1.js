/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

// il type stringa, righe di testo tra degli apici //
const nome = "Il tuo nome, è una stringa"
console.log (nome)
// il type numerico, letteralmente numeri //
const numero = 13
console.log (numero)
// il type booleano, assegna il valore true o false //
const bool = true
console.log (bool)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var name = "Mikael"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 12
let n2 = 20
console.log (n1 + n2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var name = "Mazzini"
// const cognome = "cognome" 
// const cognome = "cognome2" 


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log (x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john"
var name2 = "John"
console.log (name1 == name2)