const inputData = document.querySelector('#inputData');
const outputData = document.querySelector('#outputData');

function toCamelCase(sourceText) {
    while (true) {
        let indexElement = sourceText.indexOf('-');
        if (indexElement === -1)
            return sourceText
        let upperChar = sourceText[indexElement + 1].toUpperCase();
        sourceText = sourceText.slice(0, indexElement) + upperChar + sourceText.slice(indexElement + 2);
    }
}

const sourceText = 'background-color';
const resulText = toCamelCase(sourceText);
console.log(sourceText);
console.log(resulText);
inputData.innerHTML = "Віхдні дані: " + sourceText;
outputData.innerHTML = "Результат: " + resulText;


