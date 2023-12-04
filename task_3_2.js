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

const string1 = 'Функція виведення списку дисциплін: ' + getListSubjects(session);
addSubject(session, newSubject)
const string2 = 'Додавання дисципліни в список: ' + getListSubjects(session);
const string3 = 'Функція знаходження середнього балу з усіх дисциплін: ' + averageScore(session);
const string4 = 'Функція знаходження кількості незарахованих дисциплін: ' + getFailSubjects(session);
const string5 = 'Функція, що знаходить з якої дисципліни найвищий бал: ' + getBestSubject(session).map(elem => elem.subject);
const string6 = 'Функція, що приймає кількість балів і виводить всі дисципліни, що здані на таку кількість балів: ' + getSubjectOfScores(session, 95).map(elem => elem.subject);
const outputData = document.querySelector('#outputData');

outputData.innerHTML = `${string1}<br>${string2}<br>${string3}<br>${string4}<br>${string5}<br>${string6}`;