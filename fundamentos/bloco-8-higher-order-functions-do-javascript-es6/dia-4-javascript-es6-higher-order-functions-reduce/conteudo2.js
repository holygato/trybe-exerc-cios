// função que percorre a array e soma os números pares

// a de cima usa duas funções, filter para selecionar os números pares e reduce pra fazer a soma deles

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = (number) => number % 2 === 0;
const soma = (currentValue, number) => currentValue + number;

const sumNumbers = (numbers) => 
numbers.filter(numerosPares)
reduce(soma);

console.log(sumNumbers(numbers));

// o de baixo faz tudo com o reduce, usando uma veriicação com ternary operator

/* const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers));  */