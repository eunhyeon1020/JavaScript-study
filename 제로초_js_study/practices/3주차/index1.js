var arr =['zero', 'one', 'two'];

var arr2 = new Array();

arr2.push('zero');
arr2.push('one');
arr2.push('two');

arr2[2] = '1';

//for - of 를 써서 arr의 모든 요소를 출력하시오.
for (const aOf of arr){
    console.log("for of ::" + aOf);
}

console.log("--------------------------------")

//for - in 을 써서 arr의 모든 요소의 인덱스와 값을 출력하시오. 
for (const aIn in arr){
    console.log("for in :: " + aIn )
    console.log("for in :: " + arr[aIn])
}