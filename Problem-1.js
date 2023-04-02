let str =
  "Success is not the key of Happiness, Happiness is the key of success";
let result = ``;

str = str.split(",").join("")
str = str.split(" ");

let frequencyCounter = {};

for (let i in str) {
  frequencyCounter[str[i].toLowerCase()] = (frequencyCounter[str[i].toLowerCase()] || 0) + 1;
}

for (let key in frequencyCounter) {
  result += `${key} :- ${frequencyCounter[key]}\n`;
}

console.log(result);
