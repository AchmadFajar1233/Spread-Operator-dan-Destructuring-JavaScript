const arr1 = [1, 2, 3]
const arr2 = [4, 5]

// Gabungkan Array
const combined = [...arr1, ...arr2] // [1, 2, 3, 4, 5]
console.log(combined)

// Copy Array
const copy = [...arr1] // [1, 2, 3]
console.log(copy)

// Tambahkan Element Baru
const newArr = [0, ...arr1, 4] //[0, 1, 2, 3, 4]
console.log(newArr)

// Penggunaan di fungsi
const sum = (a, b, c) => {
    return a + b + c
}

const number = [1, 2, 3]
console.log(sum(...number))

// Mengurai String
const str = 'anjay'
const chars = [...str] // ['a', 'n', 'j', 'a', 'y']
console.log(chars)

// Pada Object
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 99}

const merged = {...obj1, ...obj2} // { a: 1, b: 2, c: 3, d: 99 }
console.log(merged)

const obj3 = {c: 3, b: 99}
const merged2 = {...obj1, ...obj3}
console.log(merged2)

// Salin Object (shallow object)
const copyObj = {...obj1} // {a: 1, b: 2}
console.log(copyObj)

// Tambahkan property
const newObj = {...obj1, c: 3} //  {a: 1, b: 2, c: 3 }
console.log(newObj)

// Shallow warning
const original = {x: 1, y: {z: 2}}
const copyObj2 = {...original}

copyObj2.y.z = 999
console.log(original.y.z) // 999