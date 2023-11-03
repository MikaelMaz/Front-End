/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1 , l2) {
    return l1 * l2
}
var l1 = 12
var l2 = 20
let risultato= area(l1, l2)
console.log(risultato)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x , y) {
    if (x===y) {
        return (x + y) * 3
    }
    else return x + y
}

var x = 8
var y = 3
let risultato2 = crazySum(x , y)
console.log(risultato2)

var x = 5
var y = 5
let risultato3 = crazySum(x , y)
console.log(risultato3)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    let diffass = Math.abs(n - 19)
    if (n > 19) {
        return diffass * 3
    }
    else return diffass
}

var n = 6
let risultato4 = crazyDiff(n)
console.log(risultato4)

var n = 26
let risultato5 = crazyDiff(n)
console.log(risultato5)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if(20 < n && n <= 100 || n === 400) {
        return true
    }
    else return false 
}

var n = 78
let vero = boundary(n)
console.log(vero)

var n = 352
let falso = boundary(n)
console.log(falso)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
    if (string.startsWith("EPICODE")) {
        return string
    }
    else return "EPICODE " + string
}

var string = "banane lamponi"
let frase1 = epify(string)
console.log(frase1)

var string = "EPICODE ar top"
let frase2 = epify(string)
console.log(frase2)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    if(n < 0) {
        return "Metti un numero positivo strunz"
    }
    if (n > 0) {
        if(n % 3 === 0 || n % 7 === 0) {
            return "multiplo di 3 o 7 individuato"
        }
        else return "fra non è multiplo di 3 o 7"
    }
}

var n = 12
let multiplo1 = check3and7(n)
console.log(multiplo1)

var n = 4
let multiplo2 = check3and7(n)
console.log(multiplo2)

var n = -6
let multiplo3 = check3and7(n)
console.log(multiplo3)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
    return string.split('').reverse().join('')
}

var string = "suca" 
let cont = reverseString(string)
console.log(cont)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
    const parole = string.split(' ')
    const upper = parole.map(parola => parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase() )
    return upper.join(' ') 
}

var string = "ciao come stai" 
let upper1 = upperFirst(string)
console.log(upper1)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string) {
    if (string.length < 3) {
        return "troppo corto fra"
    }
    else return string.slice(1 , -1)
}

var string = "menomale"
let taglia1 = cutString(string)
console.log(taglia1)

var string = "si"
let taglia2 = cutString(string)
console.log(taglia2)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    const numericasual = []
    for (let i = 0; i < n; i++) {
        let casuale = Math.floor(Math.random() * 11)
        numericasual.push(casuale)
    }
    return numericasual
}

var n = 6
let numeri = giveMeRandom(n) 
console.log(numeri)
