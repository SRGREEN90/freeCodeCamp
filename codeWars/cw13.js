function twoHighest(arr) {
    return arr
     .filter((v, i, a) => a.indexOf(v) === i)  // Unique array
     .sort((a, b) => b - a)  // Sort by DESC
     .slice(0, 2);  // Get first 2 element of sorted array
 }