/**
 * * Callback function -> callback hell
*/

'use strict'

console.clear()

//? Callback function
let value = 1

const f_1 = () => {
  console.log(value)
  setTimeout(() => {
    value++
    console.log("Inside setTimeout()", value)
  }, 10)
  console.log("DONE")
}

f_1()

//? Problem -> callback hell
const f_2 = () => {
  setTimeout(() => {
    console.log("Time 01")
    setTimeout(() => {
      console.log("Time 02")
      setTimeout(() => {
        console.log("Time 03")
      }, 500)
    }, 800)
  }, 1000)
}

f_2()