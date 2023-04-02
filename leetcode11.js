// Container With Most Water

// let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let arr=[1,1]

// function MaxWaterConatiner(arr) {
//   let n = arr.length;
//   let ans = 0;
//   let start = 0;
//   let end = n - 1;

//   while (start < end) {
//     let width = end - start;
//     let heigth = Math.min(arr[start], arr[end]);
//     let area = heigth * width;

//     ans = Math.max(area, ans);

//     if(arr[start]<arr[end]) start ++
//     else end--
//   }
//   return ans;
// }
// console.log(MaxWaterConatiner(arr));



//PRACTICE

let arr = [1, 10, 6, 2, 5, 4, 8, 3, 8];

function MostWater(arr){
  let n=arr.length
  let start =0
  let end=n-1
  let maxContainer=0

  while(start<end){
    let width = end-start
    let heigth =Math.min(arr[start],arr[end])
    let area = heigth*width
    maxContainer = Math.max(area,maxContainer)

    if(arr[start] <arr[end]) start ++
    else end --
  }
  return maxContainer
}
console.log(MostWater(arr));


























