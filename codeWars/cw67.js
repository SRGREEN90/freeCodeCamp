function fakeBin(x){
    let newStrArr = x.split('') //['1', '2', '3'....]
    newArr = []
    for(let i = 0; i < newStrArr.length; i++){
        if(Number(newStrArr[i]) < 5){
            newArr.push([0])
        } else {
            newArr.push(1)
        }
    }
    return newArr.map(String).join('')
}