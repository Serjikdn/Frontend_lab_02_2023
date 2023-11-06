function toCamelCase(sourceText) {
    while (true) {
        let indexElement = sourceText.indexOf('-');
        if (indexElement === -1)
            return sourceText
        let upperChar = sourceText[indexElement + 1].toUpperCase();
        sourceText = sourceText.slice(0, indexElement) + upperChar + sourceText.slice(indexElement + 2);
    }
}

console.log(toCamelCase('background-color'))


function toKebabCase(sourceText) {
    return sourceText.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

console.log(toKebabCase('backgroundColor'))


function calcString(sourceText) {
    const operators = "+-*/";
    let indexOperator;
    for (let i = 0; i < sourceText.length; i++) {
        if (operators.includes(sourceText[i])) {
            indexOperator = sourceText.indexOf(sourceText[i]);
        }
    }
    let leftOperand = parseInt(sourceText.slice(0, indexOperator), 10);
    let rightOperand = parseInt(sourceText.slice(indexOperator + 1), 10);
    if (!isNaN(leftOperand) || !isNaN(rightOperand)) {
        switch (sourceText[indexOperator]) {
            case "+":
                return leftOperand + rightOperand;
            case "-":
                return leftOperand - rightOperand;
            case "*":
                return leftOperand * rightOperand;
            case "/":
                if (rightOperand === 0)
                    return 'Cannot be divided by zero';
                return leftOperand / rightOperand;
            default:
                return 'Incorrect expression';
        }
    } else return 'Incorrect expression';
}

console.log(calcString('23*4'))


function replaceDate(sourceText){
    const regex = /(\d{4})\/(\d{2})\/(\d{2})/g;
    return sourceText.replace(regex, '$3.$2.$1');
}
let text = "Hello from 1999/11/05 and 2000/05/12";
console.log(replaceDate(text));
