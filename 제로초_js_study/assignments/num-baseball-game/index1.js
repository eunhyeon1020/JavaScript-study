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


// 사용자 입력 숫자 로직 (prompt)
const input_1 = function() {
  const inputNumbers= []

  for (let i = 0; i < 3; i ++) {
    const inputValue = prompt(`${i+1}번째 숫자를 입력하세요(0~9)`)
    if(inputValue !== null && inputValue>= 0 && inputValue <= 9){
      inputNumbers.push(Number(inputValue))
    }
  }

  return inputNumbers;
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
const checkResult = function() {
  let strike = 0 
  let ball = 0 

  for (let i=0; i<randomNumResult.length; i++){
    if (randomNumResult[i] === inputNumResult[i]){
      strike ++;
    } else if(randomNumResult.includes(inputNumResult[i])){
      ball ++ ;
    }
  }

  return {strike, ball}
}

// ***********************************************************************
// 버튼
function randomBtn(){ 
  randomNumResult = random(3, 9, 1)
  console.log(randomNumResult)
}

function numInputBtn() {
  inputNumResult = input_1()
  console.log(inputNumResult)
}

function resultBtn () {
  const result = checkResult()
  alert(`판정 -- ${result.strike} 스트라이크 , ${result.ball} 볼`)
}

// ***********************************************************************
// 반복 출력 
function tenPlayBtn() {
  // 무작위 숫자 생성
  randomNumResult = random(3, 9, 1)
  console.log("정답(디버깅용):", randomNumResult)
  // [document.writeln 부분을 한번 로직 ]
  document.writeln("무작위 숫자 : " + randomNumResult + '<br>');

  // 사용자 입력 숫자 10번 반복 
  const tenTry =5

  for (let i = 0; i < tenTry; i ++ ){
  inputNumResult = input()
  console.log(`입력(${i+1}회차):`, inputNumResult)
  document.writeln('<br>' +`${i+1}차 입력 : `+inputNumResult);

  const result = checkResult()
    alert(`[${i+1}회차] 결과 → ${result.strike} 스트라이크, ${result.ball} 볼`)

    // 성공 조건
    if (result.strike === 3) {
      alert("🎉 정답입니다! 축하합니다!")
    } 
  }
  alert("❌ 다음 기회에...")
}

// ***********************************************************************
// 사용자 이름 input
const inputUserNm = document.getElementById('inputUserNm');
// 게임 시작 버튼 
const gameStartBtn = document.getElementById('gameStartBtn');
// 입력 숫자 input
const inputNum = document.getElementById('inputNum');
// 게임 결과 textarea
const liveInfo = document.getElementById('liveInfo');

// 이름 입력 시에만, 게임 스타트 버튼활성화 
inputUserNm.addEventListener('input', function() {
  if(inputUserNm.value.trim() !== ''){
    gameStartBtn.disabled = false; 
  } else {
    gameStartBtn.disabled = true;
  }
})

// 게임 스타트 버튼을 눌렀을 때, 무작위 숫자 생성 및 사용자 반복문 시작
function gameStart() {
  const randomNumber = random(3, 9, 1)
  document.getElementById('inputCreateNum').value = randomNumber;

  inputNum.addEventListener('keydown', function(e) { 
  if(e.key === 'Enter'){
    e.preventDefault();

    const userInput = input_2(inputNum.value);
    console.log(userInput)

    if (userInput.length !== 3) {
    alert('숫자 3개를 정확히 입력하세요 (0~9)');
    return;
    } 
    liveInfo.value = userInput;
    

  
}})
}

