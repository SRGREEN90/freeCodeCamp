function dutyFree(normPrice, discount, hol){

    let price = normPrice / 100
    let price2 = price * discount

    return Math.floor(hol/price2)
}