function pillars(num_pill, dist, width) {
    let distCM = dist * 100
    let multyWidth =  distCM * (num_pill - 1)
    let twoWidth = width * 2
    let minWidth = width * num_pill
    if(num_pill === 1) {
        return 0
    } else {
        return multyWidth + minWidth - twoWidth
    }
}