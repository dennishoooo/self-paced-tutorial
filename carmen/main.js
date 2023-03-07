const numArr = ["1", "2", "3", "3"];

let occurrences = {};

for (let num of numArr) {
  console.log(num);
  if (occurrences[num]) {
    occurrences[num] += 1;
  } else {
    occurrences[num] = 1;
  }
}

console.log(occurrences);

// {'1': 1, '2':1, '3':2}

for (let key in numArr) {
  console.log(key);
}
console.log(numArr[0]);
