function expressionMatter(a, b, c) {
    let highestValue = 0;
    if ((a*b*c) > highestValue) {highestValue =a*b*c;}
    if ((a*b+c) > highestValue) {highestValue =a*b+c;}
    if ((a+b*c) > highestValue) {highestValue =a+b*c;}
    if ((a+b+c) > highestValue) {highestValue =a+b+c;}
    if (((a+b)*c) > highestValue) {highestValue =(a+b)*c;}
    if ((a*(b+c)) > highestValue) {highestValue =a*(b+c);}
    return highestValue;
  }