//space change
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