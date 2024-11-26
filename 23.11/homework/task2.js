//Remove Duplicates Given an array [1, 2, 2, 3, 4, 4, 5]: Write a program to create a new array where duplicate elements are removed. The result should be [1, 2, 3, 4, 5].
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
console.log(uniqueArr);