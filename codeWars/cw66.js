const squareOrSquareRoot = function (array) {
    return array.map(i => (Number.isInteger(Math.sqrt(i))) ? Math.sqrt(i) : 1 ** 2)
}

