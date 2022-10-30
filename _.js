const _ = {
    clamp(number, lower, upper) {
        if (number >= lower && number <= upper) {
            return number;
        } else if (number < lower) {
            return lower;
        } else if (number > upper) {
            return upper;
        }
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start >= end) {
           let oldStart = start;
           let oldEnd = end;
           start = oldEnd;
           end = oldStart;
        }
        if (number >= start && number < end) {
            return true;
        } else {
            return false;
        }

    },
    words(str) {
        const arr = str.split(' ');
        return arr;
    },
    pad(str, length) {
        if (length < str.length ) {
            return str;
        }
        let arr = str.split('');
        for (let i = 0, j = 0; arr.length < length, arr.length < length; i++, j++) {
            i;
            arr.unshift(' ');
            j;
            arr.push(' ');
        }
        if (arr.length % length === 1) {
            arr.shift()
        }
        return arr.join('');
    },
    has(obj, key) {
        if (obj[key]) {
            return true;
        } else {
            return false;
        }
    },
    invert(obj) {
        const invertedObj = {};
        for (const element in obj) {
            invertedObj[obj[element]] = element;
        }
        return invertedObj;
    },
    findKey(obj,func) {
        for (const element in obj) {
            if (func(obj[element])) {
                return element;
            }
        }
    },
    drop(arr, number) {
        if (typeof number !== 'number') {
            number = 1;
        }
        newArr = arr;
        for (let i = 0; i < number; i++) {
            i;
            newArr.shift();
        }
        return newArr;
    },
    dropWhile(arr, func) {
        let newArr = arr;
        for (let i = 0; i < arr.length; i++) {
            newArr.shift();
            if (!func(arr[i],i,arr)) {
                break;
            }
            
        }
        return newArr;
    },
    chunk(arr,size) {
        let newArr = [];
        if (size === undefined) {
            size = 1;
        }
        newArr.push(arr.slice(0,size));
        for (let i = size; i < arr.length; i = i + size) {
            newArr.push(arr.slice(i,i + size))
            if (arr.slice(i,i + size).length != size) {
                break;
            }
        }
        return newArr;
    }
};


// Do not write or modify code below this line.
module.exports = _;