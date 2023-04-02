// flatten the given array

let arr = [1, 2, [3, 4, 5], [6, 7, [3, 4]]];

function flattenArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) == false) newArr.push(arr[i]);
    else {
      newArr = newArr.concat(flattenArr(arr[i]));
    }
  }
  return newArr;
}
console.log(flattenArr(arr));
