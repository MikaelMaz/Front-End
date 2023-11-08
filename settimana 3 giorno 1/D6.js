/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function FaiStaRoba(stringa1, stringa2) {
  let primiDue = stringa1.slice(0, 2);
  let ultimiTre = stringa2.slice(-3);
  let risultato = primiDue + ultimiTre;
  risultato = risultato.toUpperCase();
  console.log(risultato);
}

let stringa1 = "ciao";
let stringa2 = "messina";
FaiStaRoba(stringa1, stringa2); 

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function genera() {
  let arrayCasual = [];
  for (let i = 0; i < 10; i++) {
    let numeroCasual = Math.floor(Math.random() * 101);
    arrayCasual.push(numeroCasual);
  }
  return arrayCasual;
}

let arrayCasual = genera();
console.log(arrayCasual);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function pari(array) {
  let valoriPari = array.filter(function(numero){
    return numero % 2 === 0;
  })
  return valoriPari
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valoriPari = pari(array);
console.log(valoriPari);


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function somma1(array) {
  let somma = 0;
  array.forEach(function(numero) {
    somma += numero;
  });
  return somma;
}

let array2 = [5, 2, 7, 9, 1];
let risultato = somma1(array2);
console.log("La somma dell'array è: " + risultato);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function somma2(array) {
  let tot = array.reduce((acc, val) => acc + val, 0)
  return tot
}

let array3 = [5, 13, 9, 6, 77];
let risultato2 = somma2(array3);
console.log("La somma dell'array è: " + risultato2);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function sommaCrazy(array, n) {
  let arrayIncre = array.map(numero => numero + n )
  return arrayIncre
}

let array4 = [1, 2, 3, 4, 5];
let n = 10;
let arrayIncrementato = sommaCrazy(array4, n);
console.log(arrayIncrementato);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function TextToNumber(array) {
  let lunghezza = array.map(stringa => stringa.length)
  return lunghezza
}

let array5 = ["EPICODE", "is", "great"];
let Lunghezze = TextToNumber(array5);
console.log(Lunghezze);


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function Dispari() {
  let arrayDispari =[]
  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }
  return arrayDispari
}

let IDispari = Dispari()
console.log(IDispari)

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function FilmPiuVecchio(movies) {
  let PiuVecchio = movies[0];
  movies.forEach(function(film) {
    let anno = parseInt(film.Year, 10); 
    if (PiuVecchio === null || anno < PiuVecchio.Year) {
      PiuVecchio = { ...film, Year: anno };
    }
  });

  return PiuVecchio;
}

let filmVecchio = FilmPiuVecchio(movies);
console.log("Il film più vecchio è:", filmVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function NumeroFilm(movies) {
  return movies.length;
}

let numero = NumeroFilm(movies)
console.log("Il numero di film nell'array è:", numero)

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function Titoli(movies) {
  return titoli = movies.map(film => film.Title)
}

let titoliDeiFilm = Titoli(movies);
console.log("Titoli dei film:", titoliDeiFilm);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function Millennio(movies) {
  return filmMillennio = movies.filter(film => film.Year >= 2000);
}

let Ifilme = Millennio(movies)
console.log("Film der dumila:", Ifilme)

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function SommaAnni(movies) {
  return movies.reduce( (acc, film) => acc + Number(film.Year), 0)
}
let somma = SommaAnni(movies)
console.log(somma)

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function trovaFilmPerImdbID(movies, imdbID) {
  return filmTrovato = movies.find(film => film.imdbID === imdbID);
}

let imdbIDDaCercare = 'tt0120737'; 
let filmCercato = trovaFilmPerImdbID(movies, imdbIDDaCercare);
console.log(filmCercato)

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

function trovaIndicePrimoFilmPerAnno(movies, annoCercato) {
  return indice = movies.findIndex(film => film.Year === annoCercato );
}

let annoDaCercare = 2002; 
let indiceFilm = trovaIndicePrimoFilmPerAnno(movies, annoDaCercare);
console.log(indiceFilm)