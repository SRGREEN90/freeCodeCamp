function repeatStr (n, s) {
    var array = [];
    for(var i = 0; i < n;)
        array[i++] = s;
    return array.join(''); 
}