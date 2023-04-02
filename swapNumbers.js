//Swap 2 numbers (a&b) without using a 3rd variable

// let a=5
// let b = 10


//     a = a+b
//     b=a-b
//     a=a-b
    

// console.log(a,b)


//swap 2 strings 

let s1="udisha"
let s2= "sharma"

function swapString(s1,s2){
    s1=s1.concat(s2) //udishasharma
    s2=s1.slice(0,s2.length)
    s1=s1.slice(s1.length-s2.length,s1.length)
   return s1.concat(s2)
}
console.log(swapString(s1,s2))