// declarative style = specifies only what you want
// procedural style = "how to get it" like while loop which details the individual steps

// predicate = function that produces a boolean result

// functions
// select elements from an array            .filter(), .find(), .findIndex(), .some(), .every(), .map()
// transform an array into a new array      .map(), .reduce(), .reduceRight()

// algorithm goes thru elements, apply some opertions to each of them to create new set

// data elements
// predicate        // In computer science, a predicate is a function or logical expression that evaluates to either true or false based on its input.It's essentially a condition that can be used to filter data, make decisions, or control program flow. Predicates are fundamental in various areas, including database querying, functional programming, and even computer architecture.
// apply that predicate rule  // method call using a predicate      data.method(rule)
// view result

// Testing an array
let myArray = [22, 60, 112, 14, 56, 10];
const under21 = (value) => value < 21;
console.log(myArray.find(under21)); //
console.log(myArray.findIndex(under21));

const equalTargetValue = (value) => value === 60;
console.log(myArray.find(equalTargetValue)); // method call using a predicate
console.log(myArray.findIndex(equalTargetValue)); // method call using a predicate

console.log(myArray.some(under21)); // method call using a predicate
console.log(myArray.every(under21)); // method call using a predicate

// 2.7 write equivalents of .some() and .every() based upon .find() or .findIndex?
// for .some() use .findIndex() to see if it satisfies the predicate
// if it does not return -1, it means that at least one element satisfies your condition.
// for .every() you want to see whether findIndex() cannot find any element that satisfies negate(your predicate)
// if none is found, then this means that every element fulfills your condition.
// --> Atul code not available in GitHub

// Functional Programmming FP: understandable, maintainable, testable, modular, reusuable

// Transforming an array
// Algorithm goes thru string elements (which represent numbers) and transforms that list into corresponding numeric values
// Setting up loop, systemically processes each one-by-one, produces new array          .map()

// use same array, map it with a function that multiplies each element x 10, and renders a new array

console.log(myArray.map((x) => 10 * x));
console.log(["1", "2", "4", "8", "16", "32"].map(parseInt)); // [1, Nan, Nan, Nan, 1, 17]
myArray.parseInt();
