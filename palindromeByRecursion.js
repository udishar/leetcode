// find if the string is palindrome or not

function reverse(str) {
  //base case
  if (str.length <= 1) return str;
  else {
    //recursive case
    return reverse(str.slice(1)) + str[0];
  }
}

function isPalindrome(str) {
  if (str == reverse(str)) return true;
  else return false;
}
console.log(isPalindrome("madamo"))

