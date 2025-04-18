// Object.assign(target, ...source) 
const target = { a: 1, b: 2};
const source = { b: 4, c: 5};

const returnedTarget = Object.assign(target, source);

console.log(target);

//------------------------------------------------------------------------

// Object.entries(obj)
const object1 = {
  a : "something",
  b : 42,
}

for(const [key, value] of Object.entries(object1)){
  console.log("entries :: " + `${key} : ${value}`);
}

//------------------------------------------------------------------------

const object2 = {
  a : "something",
  b : 43,
  c : false
};

// Object.keys(obj)
console.log("keys :: ");
console.log(Object.keys(object2));

// Object.values() 
console.log("values :: ");
console.log(Object.values(object2));

//------------------------------------------------------------------------

// Object.fromEntries(iterable)
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42]
]);

const obj = Object.fromEntries(entries);
console.log(obj);


