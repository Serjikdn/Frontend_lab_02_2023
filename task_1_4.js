const inputData = document.querySelector('#inputData');
const outputData = document.querySelector('#outputData');

function replaceDate(sourceText){
    const regex = /(\d{4})\/(\d{2})\/(\d{2})/g;
    return sourceText.replace(regex, '$3.$2.$1');
}

const sourceText = "Hello from 1999/11/05 and 2000/05/12";
const resulText = replaceDate(sourceText);
console.log(sourceText);
console.log(resulText);
inputData.innerHTML = "Віхдні дані: " + sourceText;
outputData.innerHTML = "Результат: " + resulText;
