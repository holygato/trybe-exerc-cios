/* const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(randomNumbers);
console.log(Math.max(...randomNumbers)); */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mamão', 'banana', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'linhaça', 'chia'];

const fruitSalad = (fruit, additional) => {
    const mistura = [...fruit, ...additional];
    return mistura;
};

console.log(fruitSalad(specialFruit, additionalItens));