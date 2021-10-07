/**
 * * Error Handling
 */

'use strict'

console.clear()

const getByIndex = (a, index) => {
  try {
    if(index < 0 || index > a.length - 1) 
      throw new Error("index out of range")
    return a[index]
  } catch (e) {
    console.log(e.message)
    return "Loi: Index khong ton tai trong mang"
  } finally {
    console.log("=> COMPLETE")
  }
}

let a = [1, 2, 3, 4, 5]
console.log(getByIndex(a, 1))
console.log(getByIndex(a, -2))
