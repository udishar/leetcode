let arr = [5, 3, 2, 7, 1, 2];

function ProductOfArray(arr) {
  let len = arr.length;
  let ans = new Array(len);
  let prefix = new Array(len);

  prefix[0] = arr[0]; //5

  for (let i = 1; i < len; i++) {
    prefix[i] = arr[i] * prefix[i - 1];
  }

  let suffix = new Array(len);

  suffix[len - 1] = arr[len - 1];

  for (let i = len - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * arr[i];
  }

  ans[0] = suffix[1];
  ans[len - 1] = prefix[len-2];

  for (let i = 1; i < len - 1; i++) {
    ans[i] = prefix[i - 1] * suffix[i + 1];
  }

  return ans;
}
console.log(ProductOfArray(arr));
