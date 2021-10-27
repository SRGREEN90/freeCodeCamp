function validParentheses(parens){
    
    const parens1 = /\(\)/g;
    while(parens1.test(parens)) {
      parens = parens.replace(parens1, '');
    }
      
    return parens === '';
  }