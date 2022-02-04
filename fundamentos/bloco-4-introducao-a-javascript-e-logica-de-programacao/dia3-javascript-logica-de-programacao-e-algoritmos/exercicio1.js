///exercício 1:

/* let fat = 10;

for (i = 9; i >= 1; i -= 1){
    fat = (fat * i);
}

console.log(fat); */

///exercício 2:

/* let word = 'tryber';
let newWord = '';

for (let i = word.length -1; i >= 0; i -= 1){
   newWord = newWord + word[i];
}

console.log(newWord); */

///exercício 3:

/* let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i += 1){
    if (array[i].length > maiorPalavra.length){
        maiorPalavra = array[i];
    }
}

for (let i = 0; i < array.length; i += 1){
    if (array[i].length < menorPalavra.length){
        menorPalavra = array[i];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra); */

///exercício 4:

/* let maiorPrimo = 0;

for (let numero = 0; numero <= 50; numero += 1){
    let isPrime = true;
    for (let divisor = 2; divisor < numero; divisor =+ 1){
        if (numero % divisor === 0){
        isPrime = false;
        }
    }
    if (isPrime) {
        maiorPrimo = numero;
    }
}

console.log(maiorPrimo); */

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);