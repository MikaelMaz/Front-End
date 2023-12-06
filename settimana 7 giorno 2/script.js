let i = 0;

document.querySelector('#bottone1').addEventListener('click', () => {
    let username = document.querySelector('#form1 input');

    let p = document.createElement('p');
    p.innerText = username.value;
    document.querySelector('#nome').appendChild(p);

    localStorage.setItem(`Username${i}`, username.value)
    i++;

    username.value = '';
});


document.querySelector('#bottone2').addEventListener('click', () => {
    document.querySelector('#nome p:last-child').remove();

    localStorage.removeItem(`Username${i -1}`);
    i--;

    if (`Username${i}` === 'Username0') {
        localStorage.clear();
    }
});

function updateCounter() {
    let currentValue = sessionStorage.getItem('counterValue');

    let newValue = (currentValue ? parseInt(currentValue, 10) : 0) + 1;

    sessionStorage.setItem('counterValue', newValue);

    document.getElementById('counter').textContent = 'Tempo trascorso: ' + newValue + ' secondi';

    setTimeout(updateCounter, 1000);
  }
  updateCounter();
  



