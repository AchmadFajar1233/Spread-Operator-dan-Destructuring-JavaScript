# Spread Operator dan Destruction di Javascript

# Spread Operator
Spread Operator digunakan untuk __"mengurai"__ string, array atau object dengan sintaks `...`

## Contoh
## Pada Array
#### Contoh Implemnetasi Dasar:
```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5]

// Penggabungan Array
const combined = [...arr1, ...arr2] // [1, 2, 3, 4, 5]

// Copy Array
const copy = [...arr1] // [1, 2, 3]

// Tambahkan Element Baru
const newArr = [0, ...arr1, 4] //[0, 1, 2, 3, 4]

```

#### Contoh Implementasi Pada Fungsi:
```js 
const sum = (a, b, c) => {
    return a + b + c
}

const number = [1, 2, 3]
sum(...number) // 6
```

#### Contoh Mengurai String
```js
const name = 'anjay'
const chars = [...name] // ['a', 'n', 'j', 'a', 'y']
```

## Pada Object
#### Implementasi Dasar:
```js
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 99}

// Gabungkan Object
const merged = {...obj1, ...obj2} // { a: 1, b: 2, c: 3, d: 99 }
```

Jika anda menggabungkan 2 object dengan key yang sama maka, object terarkhir menang

##### Contoh
```js 
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, b: 99}

const merged = {...obj1, ...obj2} // {a: 1, b: 99, c: 3}
```

#### Implementasi Copy Object (shallow copy) & Tambahkan Property Baru:

```js
const obj1 = {a: 1, b: 2}

// Copy Object (shallow copy)
const copy = {...obj1} // {a: 1, b: 2}

// Tambahkan property
const newObj = {...obj1, c: 3} // {a: 1, b:2, c: 3}
```

<i>Note: Jika anda mengcopy nested object lalu mengubah salah satu dari nilai nested nya, maka object yang di copy pun nilai nested nya juga akan berubah. Itulah yang dimaksud dengan "shallow copy"

contoh:
</i>
```js 
const obj1 = {a: 1, b: {c: 2}}
const copy = {...obj1}

copy.b.c = 999
console.log(obj.b.c) // 999
```
# Destructuring
Destruksi digunakan untuk mengesktrak object atau array pada sebuah variable.

## 1. Destructuring Array
### Contoh Dasar:
```js 
const numbers = [1, 2, 3]

// Ekstrak ke Variable
const [a, b] = numbers

console.log(a) // 1
console.log(b) // 2

// Melewati element
const [first, , third] = numbers
console.log(first) // 1
console.log(third) // 3
```

Destructuring juga digunakan untuk menetapkan sebuah nilai
Contoh:
```js 
const [x = 1, y = 2] = [100, 200]
console.log(x, y) // 100 200
```
Kegunaan lain destructuring adalah untuk swap variable atau menukar nilai variable
```js 
const a = 1
const b = 2

[a, b] = [b, a] // a = 2, b = 1
```

## 2. Destructuring Object
### Contoh Dasar
```js 
const user = {
    name: "Alice",
    age: 25,
    address: {city: "Jakarta"}
}

// Ekstrak Property
const {name, age} = user
console.log(name) // Alice
console.log(age) // 25
```
Dalam destructuring object anda juga bisa merubah nama property:
```js 
const user = {
    name: "Alice",
    age: 25,
    address: {city: "Jakarta"}
}

// Rename property
const { name = userName } = user
console.log(userName) // Alice
```
Selain itu anda juga bisa menetapkan nilai default untuk property yang tidak ada dalam object
```js 
const user = {
    name: "Alice",
    age: 25,
    address: {city: "Jakarta"}
}

// Default Value
const { role: "Admin" }
console.log(role) //Admin
```
#### Nested Destructuring
```js 
const user = {
    name: "Alice",
    age: 25,
    address: {city: "Jakarta"}
}

const {address: {city}} = user
console.log(city) // Jakarta
```


## Latihan Destructuring
diberikan data:
 ```js 
const data = {
  users: [
    { id: 1, name: "John", posts: [ { title: "Post 1" }, { title: "Post 2" } ] },
    { id: 2, name: "Jane" }
  ],
  meta: { page: 1, total: 2 }
};
```

Tugas:
<ul>
    <li>Nama User Pertama</li>
    <li>Title Post ke 2 user pertama</li>
    <li>nilai Total dari meta</li>
</ul>

## Latihan Spread Operator
Gabungkan 2 object dibawah ini, jika ada property yang
sama prioritaskan obj2
```js 
Copy

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 99, d: 4 };
```
<i> note: Jawaban ada di task.js

