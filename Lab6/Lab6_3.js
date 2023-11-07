function printNumbers(start, stop) {
    let current = start;
  
    const int = setInterval(function () {
      console.log(current);
  
      if (current < stop) {
        current++;
      }else{
        clearInterval(int);
      }
    }, 2000); // 2000 milliseconds (2 seconds)
  }
  
  // Example usage:
  printNumbers(1, 5);