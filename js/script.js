console.log('JS OK')


// recupero elemento dal dom

const containerElement = document.getElementById('my-container')


// ciclo che stampa da 1 a 100
for (let i = 1; i <= 100; i++) {

    let stringa = ''

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
        stringa = 'fizzbuzz'
        containerElement.innerHTML += `<div>${stringa}</div>`;
    }
    
    else if (i % 3 === 0) {
        console.log('fizz')
        stringa = 'fizz'
        containerElement.innerHTML += `<div>${stringa}</div>`;
    }
    
    else if (i % 5 === 0) {
        console.log('buzz')
        stringa = 'buzz'
        containerElement.innerHTML += `<div>${stringa}</div>`;
    }
    else {
        console.log(i)
        containerElement.innerHTML += `<div>${i}</div>`;
    }
    
}

