/**
 * * String
 */

console.clear();

let a = "This is a paragraph";
console.log(a);

let num = 123;
console.log(num);
let b = num.toString();
console.log(`Number: ${num} - string: ${b}`);

function Cong(a, b) { return a + b; }

console.log(Cong(1, 2));
console.log(Cong(1, '2'));

let c = 'I \'m a teacher';
console.log(c);

let d = 'This is first paragraph. \
This is second paragraph';

console.log(d);

let e = 'This is first paragraph.' +
'This is second paragraph';

console.log(e);

console.log(e.toUpperCase());
console.log(e.toLowerCase());
console.log(e[2]); // e.charAt(2)
console.log(e.length);

let s_1 = "FIND ALL Student of University in the University";
console.log(s_1);

let s_2 = s_1.concat(" ", "abc", " 123");
console.log(s_2);

let s_3 = s_1.indexOf("University");
console.log(s_3);

let s_4 = s_1.search(/University/);
console.log(s_4);

let s_5 = s_1.substring(20, 31);
console.log(s_5);

let s_6 = s_1.replace("University", "Collect");
console.log(s_6);

let arr_s_7 = s_1.split(" ");
console.log(arr_s_7);