// chatAt(인덱스) : 문자열에서 특정 위치에 있는 문자를 반환 
let str = "hello";
console.log(str.charAt(1)); //"e"

console.log("-----------------------------------------------------------");

// concat() : 두 개 이상의 문자열을 결합 
let str1 = "hello";
let str2 = "world";
console.log(str1.concat("!", str2));  //"helloworld"
console.log(str1.concat(str2));  //"helloworld"

console.log("-----------------------------------------------------------");

// includes() : 문자열에 특정 문자열이 포함되어 있는지 확인 
let str3 = "helloworld";
console.log(str3.includes("world")); // true
console.log(str3.includes("a")); // false

console.log("-----------------------------------------------------------");

// indexOf() : 문자열에서 특정 문자열의 첫 번째 위치를 (인덱스)반환 
let str4 = "hello world";
console.log(str4.indexOf("world")); // 6
console.log(str4.indexOf("llo")); //2


console.log("-----------------------------------------------------------");

// slice() : 문자열의 일부분을 반환 
let str5 = "apple";
console.log(str5.slice(2)); // "ple" 인덱스 2번째부터 가져옴 
console.log(str5.slice(0, 3)); // "app" 인덱스 0번째부터 3번째 전까지 가져옴


console.log("-----------------------------------------------------------");

// split() : 문자열을 배열로 분할 
let str6 = "I Love you";
console.log(str6.split(" ")); //['I', 'Love', 'you']
console.log(str6.split("")); //['I', ' ', 'L', 'o', 'v', 'e', ' ', 'y', 'o', 'u']
console.log(str6.split(",")); //['I Love you']

console.log("-----------------------------------------------------------");

// toLowerCase() : 문자열을 소문자로 변환 
let str7 = "RESTROOM";
console.log(str7.toLowerCase()); // "restroom"

// toUpperCase() : 문자열을 대문자로 변환 
let str8 = "restroom";
console.log(str8.toUpperCase()); // "RESTROOM"

console.log("-----------------------------------------------------------");

// padStart(주어진 길이, 채울 문자) : 문자열의 시작을 다른 문자열로 채워, 주어진 길이을 만족하는 새로운 문자열을 반환
let str9 = "1";
console.log(str9.padStart(4, "0")); // 0001, 4개의 길이 맞춰 0을 추가함

// padEnd(주어진 길이, 채울 문자) : 문자열의 끝을 다른 문자열로 채워, 주어진 길이를 만족한느 새로운 문자열을 반환 
console.log(str9.padEnd(4, "0")) // 1000

console.log("-----------------------------------------------------------");

// length: 문자열의 길이를 반환 
let str10 = "my name eunhyeon"
console.log(str10.length) //16, 띄어쓰기도 포함하여 길이를 반환 


