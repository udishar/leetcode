let arr=[1,2,3,4]

function Swap(a,b){
    a=a+b
    b=a-b
    a=a-b
    return [a,b]
}
console.log(Swap(3,4));

function rev(arr){
let i=0
let j = arr.length-1

while(i<j){
  [arr[i],arr[j]]= Swap(arr[i],arr[j])
    i++
    j--
}

return arr

}
console.log(rev(arr));
