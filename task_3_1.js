function unique(arr) {
    let result = [];
    for (const item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

let strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
];

const inputData = document.querySelector('#inputData');
const outputData = document.querySelector('#outputData');
const sourceText = strings;
const resulText = unique(sourceText);
inputData.innerHTML = "Віхдні дані: " + sourceText;
outputData.innerHTML = "Результат: " + resulText;