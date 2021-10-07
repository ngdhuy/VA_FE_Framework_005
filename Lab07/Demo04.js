/**
 * * Function in ES
 */

'use strict'

console.clear()

function sayHello() { console.log("Hello") }
sayHello()

//? Pass by value
function doubleValue(value) {
  value *= 2
  console.log("-->", value)
}

let value = 100
console.log("1. a = ", value)
doubleValue(value)
console.log("2. a = ", value)

//? Pass by reference
function incrementValue(object) {
  object.value += 10
  console.log("-->", object);
}

let b = { value: 100 }; 
console.log("1. b = ", b)
incrementValue(b)
console.log("2. b = ", b)

//? Default parameter
function sayHi(value, name = "Petter") { console.log(value, " Hi ", name) }

sayHi(1, "Thay Huy")
sayHi(2)

let showMessage = function(message) { console.log(message) }
showMessage("Hello someone")

//? Arrow functions
let showMessage_2 = message => console.log(message)
showMessage_2("This is a new paragraph")

let tripleValue = a => a * 3
console.log(tripleValue(100))

let arr = [1, 2, 3, 4, 5]
arr.forEach(item => console.log(item))

