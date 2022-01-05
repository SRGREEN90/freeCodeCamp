function pairZeros(arr) {
    let newArr = 0;
    return arr.map(i=>{
        if (i===0){
            if (i===0){newArr++};
            if (i===0&&newArr%2===0)
                return i=null}
        return i
    }).filter(i=>i!==null)
}