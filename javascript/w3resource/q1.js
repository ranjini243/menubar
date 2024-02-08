function CompareObject(obj1, obj2) {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let k of keys1) {
        if (!obj2.hasOwnProperty(k)) {
            return false;
        }

        if (obj1[k] !== obj2[k]) {
            return false;
        }
    }

    return true;
}

let a = {
    name: "ranjini",
    age: 24
};

let b = {
    hey: "buddy",
    10: "yrs younger"
};

let result = CompareObject(a, b);
console.log(result);
