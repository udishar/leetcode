//Remove duplicates from sorted array

let arr=[2,2,3,3,3,4,5,5,5,5,6]

// function RemoveDuplicates(arr){
// let count=1

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]!= arr[i+1]){
//         arr[count]=arr[i+1]
//         count++
//     }
// }
// arr.length=count
// return arr
// }
// console.log(RemoveDuplicates(arr))

//ANOTHER APPROACH FOR REMOVING DUPLICATES


// function Random(arr){
// let i=1,j=1,n=arr.length
//     while(i<n){
//         if(arr[i]==arr[i-1]){//duplicate
//             i++;
//         }
//         else{
//             arr[j]=arr[i]
//             j++
//             i++
//         }
//     }
//     arr.length=j
//     return arr
// }
//     console.log(Random(arr))


// remove dupli practice

function rem(arr){
    let count =1

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] !=arr[i+1]) {
            arr[count]=arr[i+1]
            count ++
        }
    }
    arr.length=count
    return arr
}
console.log(rem(arr))
