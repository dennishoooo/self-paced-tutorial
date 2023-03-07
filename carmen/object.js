let arr = [];

arr.push(123);

let obj = {};

console.log(obj);

obj["name"] = "carmen";
console.log(obj);
obj["name"] = "dennis";
console.log(obj.name);
console.log(obj.age);
obj["age"] = 18;

if (!obj.age) {
  console.log("the person does not have age");
}

console.log(arr);

for (let key in obj) {
  if (key === "name") {
    console.log("hi there", obj[key]);
  }
  if (key === "age") {
    console.log("happy birthday");
  }
}
