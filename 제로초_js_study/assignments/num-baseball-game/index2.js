const gameData = {}; // 전체 사용자 기록
let userName = ''; //user 이름 
let randomNumResult = [] // 전역으로 선언
let inputNumResult = []


// ***********************************************************************
// 무작위 숫자 로직
const random = function(count, max, min) {
  const randNumbers = []

  while(randNumbers.length < count) {
    // 랜범 숫자 뽑기 
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    // 중복체크
    if (!randNumbers.includes(rand)){
      randNumbers.push(rand)
    } 
  }
  return randNumbers;
}

// 사용자 입력 숫자 로직 (input)
const input_2 = function(inputNum) {
  const inpustNumbers = inputNum
    .split(',') // 쉼표 기준으로 나눠서 배열 만들기
    .map(str => str.trim()) // 앞뒤 공백 제거
    // 빈문자열, 숫자가 아닌 값 제외, 0~9 사이 숫자만 허용
    .filter(str => str !== !isNaN(str) && str >= 0 && str <= 9)
    .map(Number) // 문자열을 숫자로 변환 
    .slice(0, 3); // 앞에서부터 최대 3개만 자름

  return inpustNumbers;
}


// 판정 로직
const checkResult = function(randomArr, userArr) {
  let strike = 0 
  let ball = 0 

  for (let i=0; i<randomArr.length; i++){
    if (randomArr[i] === userArr[i]){
      strike ++;
    } else if(randomArr.includes(userArr[i])){
      ball ++ ;
    }
  }

  return {strike, ball}
}


// -------------------------------------------------------------------------
// DOM 요소
const inputUserNm = document.getElementById('inputUserNm');
const gameStartBtn = document.getElementById('gameStartBtn');
const inputNum = document.getElementById('inputNum');
const liveInfo = document.getElementById('liveInfo');

// -------------------------------------------------------------------------
// 이름 입력 시 버튼 활성화
inputUserNm.addEventListener('input', function () {
  gameStartBtn.disabled = inputUserNm.value.trim() === '';
});

// -------------------------------------------------------------------------
// 게임 시작 시 랜덤 숫자 생성
function gameStart() {
  userName = inputUserNm.value.trim();
  if (!userName) {
    alert('이름을 입력하세요');
    return;
  }

  randomNumResult = random(3,9,1)
  document.getElementById('inputCreateNum').value = randomNumResult;

inputNum.addEventListener('keydown', function(e) { 
  if(e.key === 'Enter'){
    e.preventDefault(); 

    // 문자열 -> 숫자 배열
    const userInput = input_2(inputNum.value); 
    console.log(userInput)

    if (userInput.length !== 3) {
    alert('숫자 3개를 정확히 입력하세요 (0~9)');
    return;
    } 

    const result = checkResult(ra)

    liveInfo.value = userInput;
    
    inputNum.value = '';
  
}})
}
