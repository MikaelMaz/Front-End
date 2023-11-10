let table = document.createElement('table');
table.className = 'table';
let columns = 7;

for (let i = 1; i <= 76; i++) {
    if (i % columns === 1) {
        var row = table.insertRow();
    }
    let cell = row.insertCell(i % columns - 1);
    cell.textContent = i;
}

document.body.appendChild(table);

let button = document.createElement('button');
button.textContent = 'Numero Casuale';
button.className = 'button';
button.addEventListener('click', () => {
    estraiNumeroCasuale();
});
document.body.appendChild(button);

let numeriEstratti = [];
function estraiNumeroCasuale() {
    if (numeriEstratti.length === 76) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }

    let numeroCasuale;
    do {
        numeroCasuale = Math.floor(Math.random() * 76) + 1;
    } while (numeriEstratti.includes(numeroCasuale));

    numeriEstratti.push(numeroCasuale);
    alert('Numero Casuale Estratto: ' + numeroCasuale);
    evidenziaNumero(numeroCasuale);
}

function evidenziaNumero(n) {
    let celle = document.querySelectorAll('td, th');
    celle.forEach((cella) => {
        if (cella.textContent == n) {
            cella.style.color = 'red';
            cella.style.fontWeight = 'bold';
        }
    });
}