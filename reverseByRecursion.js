// reverse a string using Recursion


let str="madam"

function reverse(str){
// base case
if(str.length<=1) return str
else{
    // recursive case
    return reverse(str.slice(1)) +str[0]
     
}
}
console.log(reverse(str))