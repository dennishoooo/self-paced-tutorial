let arr = [1, 2, 3];

// function add(a, b) {
//   return a + b;
// }

// arrow function
// const add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;

const returnNum = (num) => num ** 2;

let sum = add(1, 23);

let num = returnNum(1234);

console.log(sum);
console.log(num);

console.log(
  arr.map((num) => {
    return "tecky";
  })
);

console.log(
  arr.reduce((pv, cv) => {
    console.log({
      previousValue: pv,
      currentValue: cv,
    });
    return pv + cv;
  }, 0)
);
