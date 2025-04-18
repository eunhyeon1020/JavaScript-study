// Q1. 배열의 삭제 
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

// .length를 사용하면(배열 길이 지정) 배열의 뒤에서 삭제가 됨. 
var nums1 = [100, 200, 300, 400, 500];
var removeNums_1 = nums1.length = 3;
console.log(nums1);

// array.slice(시작 인덱스, 삭제할 개수, "넣을 아이템") : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열 내용을 변경 
var nums2 = [100, 200, 300, 400, 500];
nums2.splice(3,1); // nums2 = [100, 200, 300, 500]
nums2.splice(3,1); 
console.log(nums2);

// **답안**
// pop() : 배열의 마지막 요소를 제거하고 그 요소를 반환
var nums3 = [100, 200, 300, 400, 500];
nums3.pop(); // 500
nums3.pop(); // 400
console.log(nums3); 


