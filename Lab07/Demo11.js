/**
 * * Async - Await
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

async function call_return_money() {
  try {
    let money = await return_money()
    console.log("Money is ", money)
    console.log("OK")
  } catch (err) {
    console.error(err)
  }
  console.log("DONE")
}

call_return_money()

