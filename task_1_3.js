const inputData = document.querySelector('#inputData');
const outputData = document.querySelector('#outputData');

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

const sourceText = '23*4';
const resulText = calcString(sourceText);
console.log(sourceText);
console.log(resulText);
inputData.innerHTML = "Віхдні дані: " + sourceText;
outputData.innerHTML = "Результат: " + resulText;

