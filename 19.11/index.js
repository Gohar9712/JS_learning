//homework1 calculator
var input1 = +prompt('Input first number');
var operator = prompt('Input symbol');
var input2 = +prompt('Input second number');

switch (operator) {
    case '+': 
        output = input1 + input2; 
        break; 
    case '-': 
        output = input1 - input2;
        break; 
    case '*': 
        output = input1 * input2;
        break; 
    case '/': 
        if (input2 !== 0) {
            output = input1 / input2;
        } else {
            output = 'Please change input2';
        }
        break;
    default: 
        output = 'Wrong symbol';
        break;
}

console.log(output);

//homework2 translate
var Day = prompt('Enter Day');
Day = Day.toLowerCase();
switch (Day) {
    case 'monday': 
        Translation = 'Երկուշաբթի'; 
        break;
    case 'tuesday': 
        Translation = 'Երեքշաբթի'; 
        break;
    case 'wednesday': 
        Translation = 'Չորեքշաբթի'; 
        break;
    case 'thursday': 
        Translation = 'Հինգշաբթի'; 
        break;
    case 'friday': 
        Translation = 'Ուրբաթ'; 
        break;
    case 'saturday': 
        Translation = 'Շաբաթ'; 
        break;
    case 'sunday': 
        Translation = 'Կիրակի'; 
        break;
    default: 
        Translation = 'Not found'; 
}

console.log(Translation);

//Homework3
var month = +prompt('Enter month');

if (isNaN(month) || month > 12 || month <= 0) {
    console.log('Input is wrong');
} else {
    if (month >= 3 && month <= 5) {
        Output = 'Spring';
    } else if (month >= 6 && month <= 8) {
        Output = 'Summer';
    } else if (month >= 9 && month <= 11) {
        Output = 'Autumn';
    } else {
        Output = 'Winter';
    }
    console.log(Output);
}

//Homework4
var n=10;
// if (n % 2 === 0) {
 //   console.log('Even');
//} else {
  //  console.log('Odd');
///}
(n%2===0) ? : out='eve'
