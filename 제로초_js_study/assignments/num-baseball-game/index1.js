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
