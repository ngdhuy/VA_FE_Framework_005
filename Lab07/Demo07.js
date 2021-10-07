/**
 * * Array
 */

'use strict'

console.clear()

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let i = 0; i < a.length; i++)
//   console.log(a[i])

a.forEach(item => console.log(item))

a.reverse()
console.log(a)

a.sort()
console.log(a)

a.push(100)
console.log(a)

let b = a.pop()
console.log(a)
console.log(b)

a.unshift(100)
console.log(a)

b = a.shift()
console.log(a)
console.log(b)

console.log("--------------------------")
a = [
  {
    name: "product 1",
    price: 100
  },
  {
    name: "product 2",
    price: 200
  },
  {
    name: "product 3",
    price: 300
  },
]

a.map((element, index) => {
  // console.log(element, " - ", index)
  console.log(`<li>${index}. ${element.name}</li>`)
})

console.log("--------------------------")
let result = a.filter((element) => (element.price > 200) || (element.price < 200) )
console.log(result)

console.log("--------------------------")
let sumPrice = a.reduce((sum, element) => sum + element.price, 0)
console.log(sumPrice)

// sumPrice = () => {
//   sum = 0;
//   a.forEach(element => {
//     sum += element.price
//   })
//   return sum
// }

console.log("--------------------------")
a = [1, 2, 3, 4, 5]
console.log(a)
b = ["a", "b", "c"]
console.log(b)
b.push(...a)    //iterator
console.log(b)