// product of array except self

let arr = [2,4,3,6,7]

function Product(arr){
    let n = arr.length
    let ans= new Array(n)
    let prefix = new Array(n)
    prefix[0]=arr[0]
    for(let i=1;i<=n-1;i++){
        prefix[i]=arr[i] * prefix[i-1]
    }

    let suffix= new Array(n)
    suffix[n-1]=arr[n-1]
    for(let i=n-2 ; i>=0;i--){
        suffix[i] = arr[i] *suffix[i+1]
    }
   ans[0] = suffix[1]
   ans [n-1]=prefix[n-2]
   for(let i=1;i<=n-2;i++){
    ans[i] = prefix[i-1] * suffix[i+1]
   }
   return ans
}
console.log(Product(arr));