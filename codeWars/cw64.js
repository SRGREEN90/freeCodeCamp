function iceBrickVolume(radius, bottleLength, rimLength) {
    let diaganal = radius * 2
    let sideSquare = diaganal / Math.sqrt(2)
    let brickLength = bottleLength - rimLength
    let result = sideSquare * sideSquare * brickLength
    return Math.ceil(result)
}