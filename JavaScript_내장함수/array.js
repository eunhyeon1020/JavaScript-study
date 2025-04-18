// Array.isArray(value)
console.log("isArray :: "+ Array.isArray([1,2,3]));
console.log("isArray :: "+ Array.isArray("[]"));

//------------------------------------------------------------------------

// at(index)
const array1 = [1,2,3,4,5];

let index = 1;

console.log(`하나 ${index} 일지도 ${array1.at(index)}`);

//------------------------------------------------------------------------

const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];

// concat(), concat(value0, value1 ... )
const array4 = array2.concat(array3);
console.log("concat :: ");
console.log(array4);

// entries() 
const iterator1 = array2.entries();
console.log("entries :: ")
for (const element of iterator1){
  console.log(element); 
}

//------------------------------------------------------------------------

// every(callbackFn), every(callbackFn, thisArg)
const isBelowThreshold = (currentValue) => currentValue < 40 ; 

const array5 = [1, 20, 30, 42, 22, 15];
console.log("every :: ")
console.log(array5.every(isBelowThreshold));

//------------------------------------------------------------------------

// fill(value), fill(value, start), fill(value, start, end)
console.log("fill :: ")
console.log(array1.fill(0, 2, 4))

//------------------------------------------------------------------------

// filter(callbackFn), filter(callbackFn, thisArg)
const words = ["spray", "elite", "exuberant", "destruction", "present"]

const result = words.filter((word) => word.length > 6);
console.log("fillter :: ")
console.log(result);

//------------------------------------------------------------------------

// find(callbakFn), find(callbackFn, thisArg)
const array6 = [5, 12, 8, 130, 44];

const found  = array6.find((element) => element > 10);
console.log("find :: " + found);

//------------------------------------------------------------------------

// foreach(callbackFn), foreach(callbackFn, thisArg)
console.log("forEach :: ")
array6.forEach((element) => console.log(element));

//------------------------------------------------------------------------

// includes(searchElement), includes(searchElement, fromIndex)
console.log("includes :: " + array6.includes(5));

//------------------------------------------------------------------------

const beasts = ["ant", "bison", "camel", "duck", "bison" ];

//indexOf(searchElement), indexOf(searchElement, fromIndex=검색을 시작할 인덱스)
console.log("indexOf :: ");
console.log(beasts.indexOf("ant"));
console.log(beasts.indexOf("bison", 2));
console.log(beasts.indexOf("aaa"));


// join(), join(separator)
console.log("join :: " + beasts.join());
console.log("join :: " + beasts.join(""));
console.log("join :: " + beasts.join("_"));

//------------------------------------------------------------------------

//map(callbakFn), map(callbakFn, thisArg)
const array7 = [1,3,5,2,6];
const map1 = array7.map(
  function(x) {
    return x * 2;
  }
);
console.log(map1);

//------------------------------------------------------------------------

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// pop()
console.log("pop :: " + plants.pop());
console.log(plants);

// shift() 
console.log("shift :: " + plants.shift());
console.log(plants);

//------------------------------------------------------------------------

// push(), push(element), push(element1, element2 ..)
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log("push :: " + count);
console.log(animals)

//------------------------------------------------------------------------

const array8 = [1,2,3,4,5,6]
function sum (total, number){
  return total + number;
}

// arr.reduce(callback[, initialValue]) 
const result1 = array8.reduce(sum);
console.log("reduce :: " + result1);

// a.reverse()
const reverseArray8 = array8.reverse(); 
console.log("reverse :: " )
console.log(reverseArray8);

//------------------------------------------------------------------------

// arr.slice([begin[, end]])
const animals1 = ["ant", "bison", "camel", "duck", "elephant"];
console.log("slice :: " )
console.log(animals1.slice(2));
console.log(animals1.slice(2, 4));
console.log(animals1.slice(-2));

//------------------------------------------------------------------------

// arr.sort([compareFunction])
const months = ["가", "다", "하", "나"];
console.log("sort :: ");
months.sort();
console.log(months);

//------------------------------------------------------------------------

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
const months1 = ["Jan", "March", "April", "June"];
months1.splice(1, 0, "Feb");
console.log("splice :: ")
console.log(months1);

//------------------------------------------------------------------------

// 화살표함수 some((element) =>{}), some((element. index) =>{}), some((element, index, arrary) =>{})
// 콜백함수 some(callbackFn), some(callbackFn, thisArg)
// 인라인 콜백 함수 some(function (element){}), some(function (element, index) {}), some(function (element, index, array) {}), some(function (element, index, array) {}, thisArg)
const array9 = [10,20,30,40,50];
const even = (element) => element % 2 === 0; 
console.log("some :: " + array9.some(even));
