function sum(a, b) {
    return a + b;
}

function curry(factorOne) {
    return factorTwo => {
        return factorThree => {
            return factorOne + factorTwo + factorThree;
        };
    };
}

module.exports = { sum, curry };
