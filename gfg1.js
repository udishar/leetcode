// Sort an array of 0s, 1s and 2s

let arr=[0, 2, 1 ,2 ,0,1,2,0,0,0,1,1,1,2,2,2,]
//practice
function sort(arr){
    let len=arr.length
    let start=0
    let end = len-1
    let i=0
    while(i<=end){
        if(arr[i]==2){
            let temp = arr[i]
            arr[i]=arr[end]
            arr[end] =temp
            end--
        }

        else if(arr[i]==0){
            let temp = arr[i]
            arr[i]=arr[start]
            arr[start]=temp
            start++
            i++
        }
        else i++
    }
    return arr
}
console.log(sort(arr));






























// function Sort(arr){
//     let n = arr.length
//     let left = 0
//     let right = n-1

//     let i=0 
//      while(i<=right){
//         if(arr[i]==2){
//             let temp = arr[i]
//             arr[i]= arr[right]
//             arr[right]=temp
//             right--
//  }
//  else if (arr[i]==0){
//     let temp = arr[i]
//     arr[i]= arr[left]
//     arr[left]=temp
//     left++
//     i++
//  }
//  else i++
//      }
//      return arr
// }

// console.log(Sort(arr))