// Destructuring Array
const numbers = [1, 2, 3]

// Estrak ke variable
const [a, b] = numbers
console.log(a)
console.log(b)

// Melewati element
const [first, , third] = numbers
console.log(first)
console.log(third)

// Menetapkan nilai default
const [x = 1, y = 2] = [100, 200]
console.log(x, y)

// Destructuring Object
const user = {
    name: "Alice",
    age: 25,
    address: {city: "Jakarta"}
}

// Ekstrak Property
const {name, age} = user
console.log(name) // Alice
console.log(age) // 25

// Rename property
const {name: userName} = user
console.log(userName) //"Alice"

// Default value
const {role = "Admin"} = user
console.log(role) // Admin

// Nested Destructuring
const {address: {city}} = user
console.log(city) // Jakarta


