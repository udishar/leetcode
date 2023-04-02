// Question: Given an array of integers, write a function to find the most frequently occurring element in the array using a frequency counter.

// For example, if the input array is [1, 2, 2, 3, 3, 3, 4, 4, 4, 4], the function should return 4, since 4 occurs more frequently than any other element in the array.

// Write a function in your preferred programming language to solve this problem using a frequency counter approach.

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function MostFrequent(arr) {
  let n = arr.length;
  let counter = {};
  

  for (let i = 0; i < n; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) + 1;
  }

 let max = - Infinity
  for (key in counter) {
    if (max < counter[key]) {
      max = counter[key]
    }
  }
  return max
}

console.log(MostFrequent(arr));
