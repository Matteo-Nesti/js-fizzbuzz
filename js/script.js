console.log('JS OK')


// recupero elemento dal dom

const containerElement = document.getElementById('my-container')


// ciclo che stampa da 1 a 100
for (let i = 1; i <= 100; i++) {

    let stringa = i 
    
    if (i % 3 === 0 && i % 5 === 0) stringa = 'fizzbuzz'

    else if (i % 3 === 0) stringa = 'fizz'
    
    else if (i % 5 === 0) stringa = 'buzz'

    console.log(stringa)
    containerElement.innerHTML += `<div class="${stringa} myCard text-center">${stringa}</div>`;
    }

    
