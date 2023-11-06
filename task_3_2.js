let session = [
    {
        subject: "computer science",
        scores: 100,
        enrolled: true
    }, {
        subject: "math",
        scores: 95,
        enrolled: true
    }, {
        subject: "chemistry",
        scores: 55,
        enrolled: false
    }, {
        subject: "geography",
        scores: 50,
        enrolled: false
    },
]

function getListSubjects(arr) {
    return [
        ...arr
            .filter(subject => subject.enrolled)
            .map(subject => subject.subject),
        ...arr
            .filter(subject => !subject.enrolled)
            .map(subject => subject.subject)]
}

function addSubject(arr, subject) {
    let isSubject = arr.findIndex((e) => e.subject === subject.subject)
    if (isSubject === -1) {
        subject.enrolled = subject.scores >= 60;
        arr.push(subject)
    } else {
        arr[isSubject].scores = subject.scores
        arr[isSubject].enrolled = arr[isSubject].scores >= 60;
    }
    return arr

}

function averageScore(arr) {
    return arr.reduce((sum, value) => sum + value.scores, 0) / arr.length
}

function getFailSubjects(arr) {
    return [...arr
        .filter(subject => !subject.enrolled)
        .map(subject => subject.subject)].length
}

function getBestSubject(arr) {
    let maxScore = Math.max.apply(null, arr.map((e) => e.scores));
    return [...arr.filter(subject => subject.scores === maxScore)]
}

function getSubjectOfScores(arr, scores) {
    return [...arr.filter(subject => subject.scores === scores)]
}

let newSubject = {
    subject: "history",
    scores: 95,
}


console.log('Функція виведення списку дисциплін: ', getListSubjects(session));
console.log('Додавання дисципліни в список: ', addSubject(session, newSubject));
console.log('Функція знаходження середнього балу з усіх дисциплін: ', averageScore(session));
console.log('Функція знаходження кількості незарахованих дисциплін: ', getFailSubjects(session));
console.log('Функція, що знаходить з якої дисципліни найвищий бал: ', getBestSubject(session))
console.log('Функція, що приймає кількість балів і виводить всі дисципліни, що здані на таку кількість балів: ', getSubjectOfScores(session, 95))
console.log('Hello', 66)