function getMiddle(s){
	var position, length;
  if((s.length % 2) === 0) {
	  position = s.length / 2 - 1;
	  length = 2;
  } else {
	  position = (s.length - 1) / 2;
	  length = 1;
  }
	
	return s.substring(position, position + length);
}