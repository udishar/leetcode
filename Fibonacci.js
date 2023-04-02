// RECURSION DAY-1
//Fibonacci series

let n =12

function fibonacci(n){
//base case
if(n==0 ||n==1) return n

    return fibonacci(n-1) + fibonacci(n-2)
    
}
for(let i=0;i<=n;i++){  // to print series 
    console.log(fibonacci(i))
    }