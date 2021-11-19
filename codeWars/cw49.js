function twiceAsOld(dadYearsOld, sonYearsOld) {
    let years = dadYearsOld - sonYearsOld * 2;
    if (years < 0) {
        return years * (-1)
    } else {
        return years
    }
}