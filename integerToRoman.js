let num = 11

var intToRoman = function(num) {
    
    const numerals = [
      { value: 1000, symbol: 'M' },
     
      { value: 500, symbol: 'D' },
    
      { value: 100, symbol: 'C' },
     
      { value: 50, symbol: 'L' },
   
      { value: 10, symbol: 'X' },
    
      { value: 5, symbol: 'V' },
   
      { value: 1, symbol: 'I' },
    ];
  
    let result = '';
  
    for (let i = 0; i < numerals.length; i++) {
      const { value, symbol } = numerals[i];
      const count = Math.floor(num / value);
      num %= value;
      result += symbol.repeat(count);
    }
  
    return result;
  
  
  };

  console.log(intToRoman(num));