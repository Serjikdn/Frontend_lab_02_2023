let obj_2 = {className: 'open menu menu'};

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

// removeClass(obj_2, 'open');
removeClass(obj_2, 'blabla');
console.log(obj_2)
removeClass(obj_2, 'menu');
console.log(obj_2)
