//1839. Longest Substring Of All Vowels in Order

let word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"

function LongestSubString(word){
   let n = word.length
   let ans=0
   let len=0
   let count = 0
   for(let i=1;i<n;i++){
    if(word[i-1]<=word[i]){
        len++
        if(word[i-1]!=word[i]){
            count++
        }
    }
    else{
        count=1;
        len=1;
    }
    if(count==5){
        ans=Math.max(ans,len)
    }
   }
   return ans
}

console.log(LongestSubString(word))