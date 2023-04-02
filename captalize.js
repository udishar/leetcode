function cap(arr){
    let result =[]
    let n=arr.length

    // base case
    if(n==0) return []
    else{
      // recursive case
      let s= arr[0][0].toUpperCase() + arr[0].slice(1) // hello => H + ello => Hello
      result.push(s)
      return result.concat(cap(arr.slice(1)))
    }
}

console.log(cap(['hello','udisha','hiii']))