function reverseNumber(n) {
    let res = parseFloat(n
        .toString()
        .split('')
        .reverse()
        .join(''))*Math.sign(n)
    return res
}
