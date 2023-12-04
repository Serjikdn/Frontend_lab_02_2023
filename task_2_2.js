let obj_2 = {className: 'open menu menu'};
const inputData = document.querySelector('#inputData');
const outputData = document.querySelector('#outputData');

function removeClass(obj, cls) {
    const listObj = obj.className.split(" ");
    let result = "";
    for (const key in listObj) {
        if (!(listObj[key].indexOf(cls) !== -1 && listObj[key].length === cls.length)) {
            if (result === '') {
                result += listObj[key];
            } else {
                result += " " + listObj[key];
            }
        }
    }
    return obj.className = result;
}

inputData.innerHTML = `Початкові дані: ${obj_2.className}<br>Віхдні дані: blabla, menu`;
removeClass(obj_2, 'blabla');
removeClass(obj_2, 'menu');
outputData.innerHTML = "Результат: " + obj_2.className;

