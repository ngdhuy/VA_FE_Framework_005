/**
 * * ECMAScript (ES)
 * * Variable:
 * * - Keyword: const, var, let
 * * _ Un-type variable
 */

console.clear();

a = 1;              // integer
console.log(a);

a = "Hello World";  // string
console.log(a);

const MAX = 100; // maximum
console.log("MAX", MAX);

var b = 1; // integer
console.log("1. b = ", b);

let c = 2;
console.log("1. c = ", c);

function calculate() {
  console.log("2. --> b = ", b);
  console.log("2. --> c = ", c);

  let d = 4;
  console.log("1. --> d = ", d);

  if (d % 2 == 0) {
    console.log("2. --> d = ", d);
    var e = 10;
    let f = 11;
    console.log("1. --> e = ", e);
    console.log("1. --> f = ", f);
  }

  console.log("3. --> d = ", d);
  console.log("2. --> e = ", e);
  // console.log("2. --> f = ", f);
}

calculate();

// console.log("3. b = ", b);
// console.log("3. c = ", c);

// console.log("2. d = ", d);