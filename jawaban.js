const data = {
    users: [
      { id: 1, name: "John", posts: [ { title: "Post 1" }, { title: "Post 2" } ] },
      { id: 2, name: "Jane" }
    ],
    meta: { page: 1, total: 2 }
  };

const { users: [{name, posts: [{}, {title}]}], meta: {total} } = data

console.log(name) // John 
console.log(title) // post 2
console.log(total) //2

const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { b: 99, d: 4 }

const merged = {...obj1, ...obj2}
console.log(merged)


