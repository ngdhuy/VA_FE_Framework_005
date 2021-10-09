/**
 * * Promise
*/

'use strict'

console.clear()

const return_money = () => {
  console.log("return money")
  return new Promise((resolve, reject) => {
    let isHappy = Math.random() >= 0.5
    setTimeout(() => {
      if(isHappy)
      return resolve(1000)
    else
      return reject("Don't happy, so don't return")
    }, 500)
  })
}

return_money()
.then(abc => {
  console.log("Money is ", abc)
})
.then(() => {
  console.log("OK")
})
.catch(loiNe => {
  console.error(loiNe)
})
.finally(() => {
  console.log("DOME")
})
