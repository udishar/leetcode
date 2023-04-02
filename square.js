let arr=[1,2,3]
let arr1=[4,9,9]

function Square(arr,arr1){
let freq1={}
let freq2={}

for(let i=0;i<arr.length;i++){
    freq1[arr[i]]=(freq1[arr[i]]||0)+1

}
for(let i=0;i<arr1.length;i++){
    freq2[arr1[i]]=(freq2[arr1[i]]||0)+1
    
}
for(key in freq1){
    if(freq1[key*key] != freq2[key]){
        return false
    }
}
return true

}
console.log(Square(arr,arr1))