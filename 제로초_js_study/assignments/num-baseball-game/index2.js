const gameData = {}; // 전체 사용자 기록
let randomNumResult = [] // 생성 숫자
let inputNumResult = [] // 입력 숫자
let tryCount = 0 // 시도 횟수 


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
const input = function(inputNum) {
  const inpustNumbers = inputNum // "1, 2, 3"
    .split(',') // 쉼표 기준으로 나눠서 배열 만들기 ["1" , " 2", " 3"]
    .map(str => str.trim()) // 앞뒤 공백 제거 ["1", "2", "3"]
    // 빈문자열, 숫자가 아닌 값 제외, 0~9 사이 숫자만 허용
    .filter(str => {
      const num = Number(str);
      return !isNaN(num) && num >= 0 && num <= 9;
    })
    .map(Number) // 문자열을 숫자로 변환 [1, 2, 3]
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
const inputUserNm = document.getElementById('inputUserNm'); // 사용자명 입력란
const gameStartBtn = document.getElementById('gameStartBtn'); // 게임 시작 버튼
const inputNum = document.getElementById('inputNum'); // 입력한 숫자 입력란
const liveInfo = document.getElementById('liveInfo'); //실시간 정보를 담는 textarea
const finalResult = document.getElementById('finalResult') // 게임 결과 출력란

// -------------------------------------------------------------------------
// 이름 입력 시 버튼 활성화
inputUserNm.addEventListener('input', function () {
  gameStartBtn.disabled = inputUserNm.value.trim() === '';
});

// -------------------------------------------------------------------------
// '게임 시작' 버튼 클릭 시, 
function gameStart() {

  // 1. 랜덤버튼 범위 생성 및 생성 숫자 input에 값 넣기
  randomNumResult = random(3,9,1)
  document.getElementById('inputCreateNum').value = randomNumResult;

  // 2. 생성 숫자 입력란을 입력 후 enter을 눌렀을 때
  inputNum.addEventListener('keydown', function(e) { 
    if(e.key === 'Enter'){

      // input 함수에 사용 입력란의 값을 넣기 
      const userInput = input(inputNum.value); 
      // console.log(userInput)

      // 사용 입력란의 값 길이가 3이 아니라면 경고문 뜨기
      // (3개 이상 작성해도 위에 잘라주는 로직이 있기 때문에 가능)
      if (userInput.length !== 3) {
      alert('숫자 3개를 정확히 입력하세요 (0~9)');
      return;
      } 

      // 판정 함수에 '생성 숫자'와 '입력한 숫자'을 넣기 
      const result = checkResult(randomNumResult, userInput)
      console.log(result)
      
      // 판정 결과를 실시간으로 textarea에 출력 
      const resultText = `${tryCount+1}회차 - ${inputUserNm.value}님의 입력: ${userInput.join(', ')} => ${result.strike} 스트라이크, ${result.ball} 볼\n`;
      liveInfo.value += resultText;
      
      // 입력한 숫자 입력란 초기화 
      inputNum.value = '';

      tryCount++

      if (result.strike === 3){
        finalResult.textContent = "게임에 성공하였습니다."
        return;
      } 

      if(tryCount >= 10){
        finalResult.textContent = "게임에 실패하였습니다."
        return
      }

    
  }})
}
