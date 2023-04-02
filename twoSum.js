let numbers = [2,7,11,15]
let target = 16

function TwoSum(numbers,target){
    let left=0
    let right=numbers.length-1

    while(left<right){
        if(numbers[left] + numbers[right] == target) {
            left++
            right++
            return [left,right]
        }
        if(numbers[left]+numbers[right] <target){
            left++
        }
        right--
    }
    return [left,right]
    
}
console.log(TwoSum(numbers,target));