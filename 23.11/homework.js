//homewrok 1
const array = [1, 2, 3, 4, 5,6];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("sum:", sum);


//homework2
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
console.log(uniqueArr);
//homework3
const words = ["React", "JavaScript", "Redux", "PHP", "C#"];
let longestWord = words[0];
for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}
console.log(longestWord);