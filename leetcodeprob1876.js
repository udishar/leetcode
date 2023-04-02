//  1876. Substrings of Size Three with Distinct Characters   

let s = "aababcabc"

function countDistinct(s){
    let freqCounter={}
let length=0 , left = 0 , right=s.length , count=0 , start = 0 
while(start<right){
    if(!freqCounter[s[start]]){
        freqCounter[s[start]]=1
        length++
        if(length==3){
            count ++ 
             delete freqCounter[s[left]]
             length--
             left++
        }
        start++
    }
    else{
        
             delete freqCounter[s[left]]
             length--
             left++
    }
    
}
return count
}

console.log(countDistinct(s));