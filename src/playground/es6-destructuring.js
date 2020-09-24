// const person = {
//   name: 'Faiber',
//   age: 31,
//   location: {
//     city: 'Bucaramanga',
//     temp: 26
//   }
// }

// const {name, age, location} = person
// const { city, temp: temperature } = location
// console.log(`${name} is ${age} and he lives in ${city} and it's ${temperature} degrees`)

// const book = {
//   title: "ego is the enemy",
//   author: "ryan holiday",
//   publisher: {

//   }
// }
// const {name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName) // Penguin or Self-Published


// Array destructuring
// 

const address = ['1299 S Juniper Street', 'philadelphia', 'Pennsylvania', '19147'] 
const [firstLine, city] = address
console.log(`You are in ${firstLine} ${city}`)