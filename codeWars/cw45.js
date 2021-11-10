function findDifference(a, b) {
    let totalA = a.reduce( (a, b) => a * b )
    let totalB = b.reduce( (a, b) => a * b )

    if(totalA > totalB) {
        return totalA - totalB
    } else {
        return totalB - totalA
    }

}