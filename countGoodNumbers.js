let m = BigInt(1000000007)
function power(a,n){
let ans = BigInt(1) 
if(n==0) return ans   // base case

// recursive part
ans = power(a, Math.floor(n/2)) //a^n/2
ans = BigInt(ans)

if(n%2==1){ //odd
    ans = (ans%m * ans%m)%m
    ans = (ans%m * BigInt(a)%m) %m

}
else {
    // even
   ans = (ans%m * ans%m)%m
}
return ans %m
}

function count(n){
    let even =0
    let odd=0

    if(n%2==1){ //odd
      even = Math.floor(n/2)+1
      odd= Math.floor (n/2)
    }
    else{ // even
        even = Math.floor(n/2)
        odd = Math.floor(n/2)
    }
    let ans = (power(5,even)%m * power(4,odd)%m)%m
    return ans
}

console.log(count(4))