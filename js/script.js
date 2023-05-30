console.log('JS OK')


// recupero elemento dal dom

const containerElement = document.getElementById('my-container')


// ciclo che stampa da 1 a 100
for (let i = 1; i <= 100; i++) {

    let stringa = ''

    if (i % 3 === 0 && i % 5 === 0) {
        stringa = 'fizzbuzz'
        containerElement.innerHTML += `<div class="myCard fizzbuzz-square text-center">${stringa}</div>`;
    }
    
    else if (i % 3 === 0) {     
        stringa = 'fizz'
        containerElement.innerHTML += `<div class="myCard fizz-square text-center ">${stringa}</div>`;
    }
    
    else if (i % 5 === 0) {
        stringa = 'buzz'
        containerElement.innerHTML += `<div class="myCard buzz-square text-center ">${stringa}</div>`;
    }
    else {
        stringa = i;
        containerElement.innerHTML += `<div class="myCard number-square text-center">${stringa}</div>`;
    }

    console.log(stringa)
}

