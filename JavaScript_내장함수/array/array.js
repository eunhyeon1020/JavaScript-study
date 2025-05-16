// concat() : 두 개 이상의 배열을 결합 
let arr = [1,2,3];
let arr1 = [4,5,6];

console.log(arr.concat(arr1)); //[1, 2, 3, 4, 5, 6]

console.log("-----------------------------------------------------------");

// every() : 배열의 모든 요소가 주어진 조건을 만족하는지 확인 
let arr2 = [1,2,3,4,5];
console.log(arr2.every(num => num > 0)); //true, 순서대로 하나씩 객체를 num에 대입해서 모두 참이라면 true
console.log(arr2.every(num => num > 1)); //false, 하나라도 거짓이라면 false

console.log("-----------------------------------------------------------");

//filter : 주어진 조건을 만족하는 모든 요소를 새로운 배열로 반환 
let arr3 = [1,2,3,4,5];
console.log(arr3.filter(num => num > 3)); //[4,5]
