//Parte 1, exercício 1:
/* const testingScope = escopo => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

testingScope(true);
 */

//Parte 1, exercício 2, ordenar o array:
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    oddsAndEvens.sort((a, b) => a - b);
    return oddsAndEvens;
}
  
const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`); */

//Parte 2, exercício 1, fatorial forma longa:
/* const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(4)); */

//Parte 2, exercício 1, fatorial forma curta:
/* const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5)); */

//Parte 2, exercício 2, maior palavra da frase forma longa:
/* const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu")); */

//Parte 2, exercício 2, maior palavra da frase forma curta:
/* const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu")); */

//Parte 2, exercício 3, mbotão para guardar o número de cliques:
/* let clickCount = 0;
let textToDisplay = document.getElementById("text");

document.getElementById("button_test")
        .addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1); */

//Parte 2, exercício 4:
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Samuel"));