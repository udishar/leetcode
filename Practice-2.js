let arr=[-25,-3,-78,-4,-58,-14,-6,-7]
// kadanes algo
let max_sum=-Infinity
let sum=0
let freq={}

for(let i=0 ;i<arr.length ;i++){
    sum+=arr[i]
    max_sum=Math.max(max_sum,sum)
    if(sum<0){
        sum=0
    }
    
}
console.log(max_sum)