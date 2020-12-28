// Ter um array com os números da mega sena
let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma8Play = [7, 16, 28, 31, 37, 55];

let numbersOfHits = 0;

for (let i = 0; i < turma8Play.length; i += 1) {
    let playedNumber = turma8Play[i];
    for (let j = 0; j < megaSenaNumbers.length; j += 1) {
        let megaSenaNumber = megaSenaNumbers[j];
        if (playedNumber === megaSenaNumber) {
            numbersOfHits += 1;
        }
    }
}


console.log(`Números sorteados: ${megaSenaNumbers}`);
console.log(`Nossas tentativas: ${turma8Play}`);
console.log(`Total de acertos: ${numbersOfHits}`);
