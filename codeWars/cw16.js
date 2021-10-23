function high(x){

    const values = [...Array(27).keys()]
    values.shift()
    
    const keys = String.fromCharCode(...[...Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).keys()]
        .map(i => i + 'a'.charCodeAt(0)))
    const merged = [...keys].reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {})
    
    const words = x.split(' ')
    const wordValues = words
      .map((word, i) => [word.split('').reduce((a, letter) => (a += merged[letter]), 0), i])
      .sort(([a], [b]) => b - a)
       
    return words[wordValues[0][1]]    
    }