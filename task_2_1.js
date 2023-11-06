let obj = {className: 'open menu'};

function addClass(obj, cls) {
    const listObj = obj.className.split(" ");
    for (const key in listObj) {
        if (listObj[key].indexOf(cls) !== -1 && listObj[key].length === cls.length) {
            return obj;
        }
    }
    return obj.className !== "" ? obj.className += " " + cls : obj.className += cls;
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');



