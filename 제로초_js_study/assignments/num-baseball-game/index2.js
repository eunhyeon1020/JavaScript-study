let randomNumResult = [] // 전역으로 선언
let inputNumResult = []

// 무작위 숫자 로직
const random = function(count, max, min) {
  const randNumbers = []

  while(randNumbers.length < count) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    if (!randNumbers.includes(rand)){
      randNumbers.push(rand)
    } 
  }
  
  return randNumbers
}

function randomBtn(){ 
  randomNumResult = random(3, 9, 1)
  console.log(randomNumResult)
}



// 사용자 입력 숫자 로직 
const input = function() {
  const inputNumbers= []

  for (let i = 0; i < 3; i ++) {
    const inputValue = prompt(`${i+1}번째 숫자를 입력하세요(0~9)`)
    if(inputValue !== null && inputValue>= 0 && inputValue <= 9){
      inputNumbers.push(Number(inputValue))
    }
  }

  return inputNumbers
}

function numInputBtn() {
  inputNumResult = input()
  console.log(inputNumResult)
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

function resultBtn () {
  const result = checkResult()
  alert(`판정 -- ${result.strike} 스트라이크 , ${result.ball} 볼`)
}

// 반복 출력 
function tenPlay() {
  randomNumResult = random(3, 9, 1)
  console.log("정답(디버깅용):", randomNumResult)

  const tenTry = 10 

  for (let i = 0; i < tenTry; i ++ ){
  inputNumResult = input()
  console.log(`입력(${i}회차):`, inputNumResult)

  const result = checkResult()
    alert(`[${i}회차] 결과 → ${result.strike} 스트라이크, ${result.ball} 볼`)

    // 성공 조건
    if (result.strike === 3) {
      alert("🎉 정답입니다! 축하합니다!")
      return
    }
  }

  // 실패 시
  alert("❌ 다음 기회에...")
  }