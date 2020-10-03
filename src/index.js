exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(null, array)
    }
}

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array)
    }
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {

        let sum = array.reduce((a, b) => a + b, 0);

        let result = sum / array.length;
        return result;
    }
}
