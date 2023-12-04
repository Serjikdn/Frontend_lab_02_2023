const inputData = document.querySelector('#inputData');
const outputData = document.querySelector('#outputData');

function toKebabCase(sourceText) {
    return sourceText.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

const sourceText = 'backgroundColor';
const resulText = toKebabCase(sourceText);
console.log(sourceText);
console.log(resulText);
inputData.innerHTML = "Віхдні дані: " + sourceText;
outputData.innerHTML = "Результат: " + resulText;
