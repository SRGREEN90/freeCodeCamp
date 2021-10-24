var moveZeros = function (arr) {
    const zeros = arr.filter (arr => arr === 0);
       const others = arr.filter (arr => arr !== 0);
       return others.concat(zeros);
   
   }