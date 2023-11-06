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

console.log(unique(strings));