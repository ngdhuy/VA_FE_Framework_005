/**
 * * Class in ES
 */

'use strict'

console.clear()

// Define class
class Animal {
  // Constructor method
  constructor(name) {
    this.name = name;
  }

  // getter/setter method
  get Name() { return this.name }
  set Name(value) { this.name = value != "duck" ? value : this.name }
  
  Talk() { console.log("Gau Gau ...") }
}

let animal = new Animal('Corgi') // object
console.log(animal)
animal.Name = "duck"
console.log(animal.name)

console.log("-------------------------------------")

class Corgi extends Animal {
  constructor(color) {
    super("Corgi")
    this.color = color
  }

  Talk() { console.log("Meo meo ...") }
}

let dog = new Corgi('yellow')
console.log(dog)
dog.Talk()

dog.type = "big"
console.log(dog)