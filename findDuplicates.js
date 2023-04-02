let arr=[1,4,1,5,85,65,85,4,1]

function duplicate(arr){
    let n = arr.length
    let mp=new Map()

    for(let i=0 ; i<n;i++){
        if(mp.has(arr[i])){
            let x = mp.get(arr[i])
            mp.set(arr[i],x+1)
        }
        else{
            mp.set(arr[i],1)
        }
       }
       let newArr=[]
       for(let keys of mp){
        if(keys[1]>1){
            newArr.push(keys[0])
        }
        
       }
      return newArr
       }
     
    

console.log(duplicate(arr));