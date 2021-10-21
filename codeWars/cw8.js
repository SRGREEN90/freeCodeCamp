var stringToNumber = function(str){
    if(/^(\-|\+)?([0-9]+|Infinity)$/
	   .test(str))
    return Number(str);
  return null;
}