export function findOutlier(integers: number[]): number {
    // create arrs to keep odd and even numbers
    let oddArr = [];
    let evenArr = [];

    //check whether item is even or odd
    //if its even, push it into evenArr ...
    for (var i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        oddArr.push(integers[i]);
      } else {
        evenArr.push(integers[i]);
      }
    }
    
    //containing only i item means that the item is the outlier
    if (oddArr.length === 1)
      return oddArr[0]
    else if (evenArr.length === 1) 
      return evenArr[0]
  }