let tim = {name:'tim', age: 18}

console.log(tim);
console.log(typeof tim);

export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`hi, im ${this.name}`);
    }

}
class Student extends Person {
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject
    }
    study() {
        console.log(`im studying ${this.subject}`);
    }
}
let dennis = new Person('dennis', 30)
let tim2 = new Student('tim', 18, 'javascript')

console.log(tim2 instanceof Student);

console.log(tim instanceof Student);

tim2.greet()
tim2.study()

dennis.greet()


console.table(dennis)
