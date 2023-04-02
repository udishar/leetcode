//rotate an array 

let arr=[1,2,3,4,5,6] 
let k=3

function Rotate(arr,k){
k=k%arr.length // unwanted rotations stop
let i=0
let j=arr.length-1

while(i<j){
    let temp = arr[i]
     arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
}


i=0
j=k-1
while(i<j){
    let temp = arr[i]
     arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
}



i=k
j=arr.length-1
while(i<j){
    let temp = arr[i] //1
     arr[i]=arr[j] //2
    arr[j]=temp //
    i++
    j--
}

return arr

}
console.log(Rotate(arr,k))