function isAnagram(str, str1) {
  let freObj1 = {};
  let freObj2 = {};

  for (let i = 0; i < str.length; i++) {
    freObj1[str[i]] = (freObj1[str[i]] || 0) + 1;
  }
  for (let i = 0; i < str1.length; i++) {
    freObj2[str1[i]] = (freObj2[str1[i]] || 0) + 1;
  }
  for (let key in freObj1) {
    if (freObj1[key] != freObj2[key]) {
      return "not anagram";
    }
  }
  return "is Anagram";
}

console.log(isAnagram("anagram", "nagaram"));
