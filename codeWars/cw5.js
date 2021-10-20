function doubleChar(str) {
    str = str.split('');
      var i = 0;
      while (i < str.length) {
          str.splice(i, 0, str[i]);
          i += 2;
      }
      return str.join('');
    }