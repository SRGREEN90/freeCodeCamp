function isPangram(string) {
    let lowerCased = string.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)) {
            return false;
         }
      }
     return true;
    }