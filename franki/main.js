//data type

//primitive data type

// Boolean
// Number
// Float
// String

// null
// undefined

// array

let franki = {name:'franki', age:18, salary: 50000}

let students = ['franki', 'dennis', 'alex']

students[0]

for (let i=0 ; i < students.length; i++) {
    console.log(students[i]);
}

for (let student of students) {
    console.log(student);
}

for (let key in franki) {
    console.log(`${key}: ${franki[key]}`);
}


// for of loop

// for in loop

const numbers = `3 2 4 5 6
34 5 55 7 456 56
324 46 6 768 8 67 3
34 
`
console.log(numbers.split('\n').join(' ').split(' '))

let numArr = numbers.split('\n').join(' ').split(' ')
let count = {}

for (let num of numArr) {
    if (!count[num]) {
        count[num] = 1
        continue
    }
    count[num] += 1
}

console.log(count);



console.log(franki['girlfriend']);

if (franki.salary) {
    console.log('franki is working');
}

if (!franki.girlfriend) {
    franki.girlfriend = 'mary'
}

franki.girlfriend = 'ali'

console.log(franki.girlfriend);

for (let char of franki.girlfriend) {
    console.log(char);
}

console.log(franki.girlfriend[2])