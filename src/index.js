exports.min = function min(array) {
    if (getZeroIfNegative(array)) return 0;
    return Math.min(...array);
}

exports.max = function max(array) {
    if (getZeroIfNegative(array)) return 0;
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (getZeroIfNegative(array)) return 0;
    const sum = [...array].reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sum / array.length;
}


const getZeroIfNegative = (input) => {
    return isBlank(input) || isUndefined(input) || isZeroLength(input)
}

const isBlank = (input) => {
    return input === null || input === ''
}
const isUndefined = (input) => {
    return input === undefined
}
const isZeroLength = (input) => {
    return [...input].length === 0
}
