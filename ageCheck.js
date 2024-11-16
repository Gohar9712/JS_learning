var firstName = prompt('FirstName');
var lastName = prompt('LastName');
var age = +prompt('Age');

if (firstName && lastName) {
    if (age >= 18 && isNaN(age)) {
        var user = {
            FullName: `${firstName} ${lastName}`,
            age: age
        }
        console.table(user);
    } else {
        console.log('Wrong data');
    }
} else {
    alert('First name and last name are required data');
}