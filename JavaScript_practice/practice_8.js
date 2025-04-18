// Q8. 객체의 키 이름 중복 
// 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight']);

// ** 답 : 84 ** 
// 자바스크립트에서 객체는 key가 중복되면 마지막 값으로 덮어씀. 
// 즉, 'weight' : 78이 먼저 들어갔다가... 'weight'가 같은 key로 다시 들어오면서 기존 값(78)을 덮어버린 것. 
// 객체는 아래처럼 저장됨. 

var d = {
  'height':180,
  'weight':84,
  'temperature':36,
  'eyesight':1
};
