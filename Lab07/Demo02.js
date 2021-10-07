/**
 * * Data type
 */

console.clear();

let a = 4;        // integer
let b = 5.2;      // float
let c = "Hello"   // string
let d = {
  id : 1,
  name: "Product MX"
};

console.log(a, b, c, d);

let e  = [1, 2, 3, 4];
console.log(e);

let f = [
  1.2, 
  "Hello", 
  3,
  { 
    name: "abc", 
    value: 100 
  } 
];
console.log("f = ", f);

let g = true; // boolean
let h = null; // null
let i = undefined; // undefined

console.log(g, h, i);

let j = 3;
let s = (j % 2 === 0) ? "Chan" : "Le";

// if(j % 2 === 0) {
//   s = "Chan";
// } else {
//   s = "Le";
// }

console.log(s);
