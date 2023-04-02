let str="udisshaa"
let result=``

freq={}

for(let i=0;i<str.length;i++){
    freq[str[i]]=(freq[str[i]] || 0) +1
}

for(let key in freq){
result += `${key} => ${freq[key]}\n`
}
 
let x=Object.keys(freq).sort()
console.log(result,x)