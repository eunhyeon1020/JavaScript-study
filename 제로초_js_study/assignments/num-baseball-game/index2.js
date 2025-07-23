const gameData = {}; // 전체 사용자 기록
let tryCount = 1 // 시도 횟수 


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
// const input = function(inputNum) {
//   const inpustNumbers = inputNum // "1, 2, 3"
//     .split(',') // 쉼표 기준으로 나눠서 배열 만들기 ["1" , " 2", " 3"]
//     .map(str => str.trim()) // 앞뒤 공백 제거 ["1", "2", "3"]
//     // 빈문자열, 숫자가 아닌 값 제외, 0~9 사이 숫자만 허용
//     .filter(str => {
//       const num = Number(str);
//       return !isNaN(num) && num >= 0 && num <= 9;
//     })
//     .map(Number) // 문자열을 숫자로 변환 [1, 2, 3]
//     .slice(0, 3); // 앞에서부터 최대 3개만 자름

//   return inpustNumbers;
// }

// const input = function(){
  
// }


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
const randomNum = document.getElementById('inputCreateNum'); // 랜덤 생성 숫자 
const round = document.getElementById('inputRound'); // 회차 
// 숫자 입력란 
const inputNum_1 = document.getElementById('inputNum_1'); 
const inputNum_2 = document.getElementById('inputNum_2'); 
const inputNum_3 = document.getElementById('inputNum_3'); 
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

  // 1. 랜덤 함수 로직에 범위 설정
  randomNumResult = random(3,9,1)
  // 2. 생성한 랜덤 숫자 input값에 출력 
  randomNum.value = randomNumResult;

  // 3. 회차 출력(처음 회차는 1)
  round.value = tryCount
}

// -------------------------------------------------------------------------
// 게임 초기화 함수(모든 값을 초기화 시킴)
function gameReset() {
  inputUserNm.value = ''
  randomNum.value = ''
  round.value = ''
  inputNum_1.value = ''
  inputNum_2.value = ''
  inputNum_3.value = ''
  finalResult.textContent = ''
  liveInfo.value = ''
}

// -------------------------------------------------------------------------
// 엔딩 메세지 출력 함수 
function endGameMessage(message){
  finalResult.textContent = message

  setTimeout(()=> {
    if(confirm('게임을 다시 시작할까요?')){
      gameReset()
    } else {
      alert('수고하셨습니다.')
      gameReset()
    }
  }, 3000)
}
  
// -------------------------------------------------------------------------
// '숫자 맞추기' 버튼 클릭 시, 
function guessBtn() {

  // 1. 숫자 입력 
  // 입력 숫자 정규식 (숫자 외 입력 불가능, 0~9만 가능)
  inputNum_1.value = inputNum_1.value.replace(/[^0-9]/g, '')
  inputNum_2.value = inputNum_2.value.replace(/[^0-9]/g, '')
  inputNum_3.value = inputNum_3.value.replace(/[^0-9]/g, '')
  // 입력한 숫자가 빈값이라면 실행 중단 
  if (isNaN(Number(inputNum_1.value)) || isNaN(Number(inputNum_2.value)) || isNaN(Number(inputNum_3.value))) {
    alert('숫자를 정확히 입력해주세요.')
    
    // 값 초기화 
    inputNum_1.value = ''
    inputNum_2.value = ''
    inputNum_3.value = ''

    // 첫 번째 input에 포커스
    inputNum_1.focus()
    return
  }
  
  // 3개의 숫자를 배열로 만들기
  const inputValues = [Number(inputNum_1.value), Number(inputNum_2.value), Number(inputNum_3.value)]
  console.log(inputValues)

  // 2. 입력한 숫자와 생성 숫자 비교하여 판정
  // 판정 함수에 '생성 숫자'와 '입력한 숫자'을 넣기 
  const result = checkResult(randomNumResult, inputValues)
  console.log(result)
  
  
  // 판정 결과를 실시간으로 textarea에 출력 
  const resultText = `${tryCount}회차 - ${inputUserNm.value}님의 입력: ${inputValues} => ${result.strike} 스트라이크, ${result.ball} 볼\n`;
  liveInfo.value += resultText;
  
  // 판정할 때 마다 회차 늘어남. 
  tryCount++
  round.value = tryCount 
  
  // 초기화 및 포거싱 
  inputNum_1.value = ''
  inputNum_2.value = ''
  inputNum_3.value = ''

  inputNum_1.focus()

  // 3. 판정이 끝난다면 게임 결과 표시 
  // 스트라이크가 3개라면 게임 성공 메세지 
  if (result.strike === 3){
    endGameMessage('정답입니다.')
  } 
  // 회차가 10 이상이 된다면 게임 실패 메세지 
  if(tryCount >= 10){
    endGameMessage('살패입니다.')
  }

}
