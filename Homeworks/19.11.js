//Homework1
const n=5;
for (let i = 1; i <= 10; i++) {
    console.log(n +'* ' + i + ' = ' + n * i);
}

//Homework2
const input = "I am learning JavaScript";
let output = ""; 
for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') { 
        output += '-'; 
    } else {
        output += input[i]; 
    }
}
console.log(output);