let str = "abcba";

function pallin() {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) return false;
    i++;
    j--;
  }
  return true;
}
console.log(pallin(str));
