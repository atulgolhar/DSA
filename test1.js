const under21 = (value) => value < 21; // ingests a value and returns true if less than 21

let myArray = [22, 9, 60, 12, 4, 56];
let newArray = myArray.filter(under21); // apply under21 check to filter the original array

console.log(newArray);
