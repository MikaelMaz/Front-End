let tasksText = document.querySelector('#tasktext');
let addBtn = document.querySelector('#addBtn');
let ul = document.querySelector('ul')

addBtn.addEventListener('click', () => {
    let contenuto = tasksText.value;
    let lista = document.createElement('li');
    lista.textContent = contenuto;
    lista.classList.add('elementili')
    ul.appendChild(lista);

    lista.addEventListener('click', () => {
        lista.style.textDecoration = "line-through"; 
        lista.style.textDecorationColor = "Red"
        lista.style.color = "Red"
    });

    let eliminaBtn = document.createElement('button');
    eliminaBtn.textContent = 'Elimina';
    eliminaBtn.classList.add('elimin')
    lista.appendChild(eliminaBtn);

    eliminaBtn.addEventListener('click', () => {
        ul.removeChild(lista); 
    });

});
