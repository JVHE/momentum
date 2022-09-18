const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    powerOf: function (a, b) {
        return a ** b;
    }
}

const plusResult = calculator.add(10, 5);
const minusResult = calculator.minus(plusResult, 5);
const divideResult = calculator.divide(minusResult, 5);
const multiplyResult = calculator.multiply(divideResult, 5);
const powerOfResult = calculator.powerOf(multiplyResult, 5);
