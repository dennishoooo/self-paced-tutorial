// Load Chance
var Chance = require('chance');

var { Person } = require('./oop.js');
// Instantiate Chance so it can be used
var chance = new Chance();

// console.log(chance.name({ prefix: true }))
// console.log(chance.email())
// console.log(chance.email())

// for (let i =0; i< 10; i++) {
//     setTimeout(()=>{
//         console.log(chance.name())
//     },1000 * i)
// }

let dennis = new Person('dennis', 90)

dennis.greet()

async function main() {
    for (let i =0; i< 10; i++) {
        let name = await setTimeoutPromise(chance.name())
        console.log(name)
        }
}

function setTimeoutPromise(name) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(()=>{
                resolve(name)
            },1000)
        } catch (error) {
            reject(error);
        }
    })
}

// main()

console.log('hi')

let tim = () =>{
    console.log('hi, im tim');
}

let a = tim

let b = tim()

console.log(a());
console.log(b);