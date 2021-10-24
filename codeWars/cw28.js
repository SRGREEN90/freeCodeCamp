function pickPeaks(arr) {
    var output = {pos: [], peaks: []};
    console.log("climbing ", arr);
    
    if(arr.length === 0)
      return output;
    
    var topPeak = arr[0];
    var topPos = 0;
    
    for(var i=1; i<arr.length; i++){
      // console.log("i = ", i, arr[i], arr[i-1]);
      
      if(arr[i] > arr[i-1]) { // keep climbing
        topPeak = arr[i];
        topPos = i;
        console.log("climbing from ", arr[i-1], " to ", arr[i]);
        
      } else if(arr[i] == arr[i-1]) { // plateau
        console.log("walking along plateau from ", arr[i-1], " to ", arr[i]);
        //const 
      } else if(arr[i] < arr[i-1]) {
        if(topPos > 0) {
          console.log(" -> peak found at ", topPos," with a height ", topPeak);
          output.pos.push(topPos);
          output.peaks.push(topPeak);
          topPos = 0;
        } 
        console.log("descending from ", arr[i-1], " to ", arr[i]);
      } else {}
    }
    
    return output;
  }