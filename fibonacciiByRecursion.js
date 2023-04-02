// Kth position in fibbonnacci series using recursion


function Fibonaccii(k){
//base case
if(k==0||k==1) return k
else{
    //recursive case
    return Fibonaccii(k-1) + Fibonaccii(k-2)
}
}
console.log(Fibonaccii(12));