let arr=[12,4,67,2,34]

function MaxSum(arr){
    let largest=-Infinity
    let secondLargest=-Infinity
    let n = arr.length

    for(let i =0;i<n;i++){
      
        if(arr[i]>largest){
            secondLargest=largest
            largest=arr[i]
 
        }
        else if(arr[i]>secondLargest){
            secondLargest=arr[i]
        }
        
    }
   
    return largest + secondLargest



}
console.log(MaxSum(arr));