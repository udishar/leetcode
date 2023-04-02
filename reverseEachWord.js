// reverse each word of the string

let sen="hello there this is udisha here"

function reverse(str){

    let n=str.length
    if(n<=1) return str
    else{
        return reverse(str.slice(1)) + str[0]
    }
}

function revTheWor(sen){
    let arrWord=sen.split(" ")
    for(let i=0 ; i<arrWord.length ; i++){
        arrWord[i] = reverse(arrWord[i])
    }
    return arrWord.join(" ")
}
console.log("hello there this is udisha here " + " => "+ revTheWor(sen));