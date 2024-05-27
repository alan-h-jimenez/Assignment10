// STEP 1
// function Cat() {
//     console.log('A kitty has been created')
// }

// const Dog = function() {
//     console.log('A doggo has been created')
// }

// STEP 2
// const newCat = new Cat()
// const newDog = new Dog()

// STEP 3
// function Animal(message) {
//     this.message = message

//     this.displayStatus = function() {
//         console.log('The Animal has been created')
//     }
// }

// const theAnimal = new Animal()
// theAnimal.displayStatus()

// STEP 4
// function Animal(message) {
//     this.message = message

//     this.displayStatus = function() {
//         console.log(this.message)
//     }
// }

// const theAnimal = new Animal('Animal Object Instantiated')
// theAnimal.displayStatus()

// STEP 5
// function Animal(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
// }

// const theAnimal = new Animal('Horse', 'Swedish Ardennes', 'Black', '62 inches', '8 feet')
// console.log(`A ${theAnimal.type} of breed ${theAnimal.breed} was created. It is ${theAnimal.color}, ${theAnimal.height} high, and ${theAnimal.length} long`)

// STEP 6
// function Animal(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
// }

// const theAnimal = new Animal('Horse', 'Swedish Ardennes', 'Black', '62 inches', '8 feet')

// for (const property in theAnimal) {
//     console.log(`${property}: ${theAnimal[property]}`);
// }

// STEP 7
// function Animal(type, breed, color, height, length) {
//     let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length
    
//     this.speak = function() {
//         if (_type.toLowerCase() == 'dog') {
//             return `The ${_color} dog is barking!`
//         } else if (_type.toLowerCase() == 'cat') {
//             return `The ${_color} cat is meowing!`
//         }
//     }
// }

// const theAnimal = new Animal('Dog', 'Rottweiler', 'Black', '27 inches', '42 inches')
// console.log(theAnimal.speak())

// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length
    
//     let checkType = function() {
//         if (_type.toLowerCase() == 'dog') {
//             return 'dog'
//         } else {
//             return 'cat'
//         }
//     }

//     this.speak = function() {
//         return checkType()
//     }
// }

// const theAnimal = new Animal('Dog', 'Rottweiler', 'Black', '27 inches', '42 inches')
// console.log(`The ${theAnimal.speak()} has made a noise!`)

// STEP 9
// String.prototype.findWords = function(word, paragraph ) {
//     let words = Array.from(paragraph.matchAll(word))

//     alert(`The word "${word}" was found ${words.length} times in the paragraph: ${paragraph}`)
// }

// const thePhrase = new String
// thePhrase.findWords('have', 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough. -Oprah Winfrey ')