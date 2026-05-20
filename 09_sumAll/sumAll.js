const sumAll = function(prev, curr) {
    if (!Number.isInteger(prev) || !Number.isInteger(curr)) return "ERROR";
    if (prev < 0 || curr < 0) return "ERROR";
    if (prev > curr) {
        const temp = prev;
        prev = curr;
        curr = temp;
    }

    let sum = 0;
    for (let i = prev; i <= curr; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
