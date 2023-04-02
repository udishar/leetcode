var removeDuplicates = function(nums) {
    let count =1 // kyuki khudse match nhi krana

    for(let i = 0 ; i<nums.length-1 ; i++){
        if(nums[i]!=nums[i+1]){
            nums[count]= nums[i+1]
            count++
        }
    }
    nums.length=count   // array after removing duplicates
    return nums
    // return count :-length of array after removing duplicates
    };
   console.log( removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,11,45]))