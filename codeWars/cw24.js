function tickets(peopleInLine){
    s_25 = []
   s_50 = []
   code = {
     25: () => s_25.push(''),
     50: () => s_50.push('') && s_25.pop() != undefined,
     100: () => s_50.pop() != undefined ? s_25.pop() != undefined : s_25.pop() != undefined && s_25.pop() != undefined && s_25.pop() != undefined
   }
   return peopleInLine.every(bill => code[bill]()) ? 'YES' : 'NO'
 }