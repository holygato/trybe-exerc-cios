

/* let maiorValor = -100;

for (let index in numbers){
    if (numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}

console.log(maiorValor); */


/* const getBigger = (bigger, number) => ((bigger > number) ? bigger : number); */

const numbers = [50, 85, -30, 3, 15];

/* const maior = (maior, number) => {
    if (maior < number){
        maior = number;
        console.log(maior);
        return maior;
    } else {
        return maior;
    }
} */

//esta solução usa ternary operator, ele testa se o maior é maior que o número, se for verdade, retorna o maior 
// se não for retorna o número
const maior = (maior, number) => ((maior > number) ? maior : number);

const maiorValor = numbers.reduce(maior, 0);
console.log(maiorValor);