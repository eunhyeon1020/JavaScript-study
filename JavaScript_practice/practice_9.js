// Q9. concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat("/", month.concat("/", day.concat
  (" ", hour.concat(":", minute.concat(":", second)))));

console.log(result)

// 출력 값 
// 2019/04/26 11:34:27

// ** 답 : var result = year.concat('/', month, '/', day, ' ', hour,  ':', minute, ':', second) ** 
// str.concat(string1, string2, ..., stringN)
// : 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환 