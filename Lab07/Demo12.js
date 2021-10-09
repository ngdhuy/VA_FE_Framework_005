/**
 * * Module
 */

'use strict'

console.clear()

const func = require('./Demo12_module')
const {sayHelloWorld} = require('./Demo12_module_s')

let a = 4 
let b = 5

sayHelloWorld()

console.log(func.cong(a, b))
console.log(func.tru(a, b))
console.log(func.data)
