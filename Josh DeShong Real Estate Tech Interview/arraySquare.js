// take in an array
// square each num going in
// should take O(n) time

// solution:
// iterate through the array, find the number closest to 0
// compare left and right of that number and add to result array

var arraySquare = function(a) {
  let result = [];
  let minIdx = a[0];
  let currentIdx = 1;

  // find the number closest to 0
  while (currentIdx < a.length){
    if (a[currentIdx] < 0){
      if (a[currentIdx] * -1  < a[minIdx]){
        minIdx = currentIdx;
      }
    } else {
      if(a[currentIdx] < a[minIdx]){
        minIdx = currentIdx;
      }
    }
    currentIdx += 1;
  }
  result.push(a[minIdx]*a[minIdx]);

  // add the smaller squared number left or right of the prev number
  // until everything from the input is in the output
  let leftIdx = minIdx - 1;
  let rightIdx = minIdx + 1;

  while (leftIdx >= 0 || rightIdx < a.length){
    if (a[leftIdx]*a[leftIdx] <= a[rightIdx]*a[rightIdx] || a[rightIdx] === undefined){
      result.push(a[leftIdx]*a[leftIdx]);
      leftIdx -= 1;
    } else {
      result.push(a[rightIdx]*a[rightIdx]);
      rightIdx += 1;
    }
  }

  return result;
};
