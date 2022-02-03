let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for (let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
} */

/* let somaNumeros = 0;
for (let i = 0; i < numbers.length; i += 1){
    somaNumeros = somaNumeros + numbers[i];
}

console.log(somaNumeros); */

/* let somaNumeros = 0;

for (let i = 0; i < numbers.length; i += 1){
    somaNumeros = somaNumeros + numbers[i];
}

let media = somaNumeros / numbers.length;
 console.log(media);

if (media > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
} */

/* let maiorNumero = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > maiorNumero){
        maiorNumero = numbers[i]
    }
}

console.log(maiorNumero); */

/* let valorImpar = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0){
    valorImpar += 1;
    }
}
if (valorImpar == 0){
    console.log("nenhum valor ímpar encontrado");
} else{
    console.log(valorImpar);
} */

/* let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < menorValor){
        menorValor = numbers[i];
    }
}

console.log(menorValor); */

let array2 = [];

for (let i = 0; i < 26; i += 1){
    array2.push(i)
}

/* console.log(array2); */

for (let i = 0; i < array2.length; i += 1){
    console.log(array2[i] / 2);
}