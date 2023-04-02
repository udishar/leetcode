//factorial of a number using reursion


function fac(n){
// base case
if(n===1) return 1
else{
    //recursive case
    return n*fac(n-1)
}
}

console.log(fac(2));