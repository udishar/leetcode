// check if the number is power of 2 , 3 , 4 using recursion

function pow2(n){
    // base case 
    if(n===1) return true
    else{
        //recursive case
        if(n%2!=0 || n<=0) return false
    }
    return pow2(n/2)
}
console.log(pow2(8));

// function pow3(n){
//     // base case 
//     if(n===1) return true
//     else{
//         //recursive case
//         if(n%3!=0 || n<=0) return false
//     }
//     return pow3(n/3)
// }
// console.log(pow3(8));


// function pow4(n){
//     // base case 
//     if(n===1) return true
//     else{
//         //recursive case
//         if(n%4!=0 || n<=0) return false
//     }
//     return pow4(n/4)
// }
// console.log(pow4(8));


