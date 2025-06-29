// json 폴더 연결 
function weather() { 
  return fetch('naver_weather_sample.json')
    // 응답을 JSON으로 변환 (promise를 반환)
    .then((res) => res.json())
    // .json()으로 파싱된 데이터가 json 변수로 들어오고 그 안에 있는 shortTermForecasts 프로퍼티만 꺼내서 리턴
    .then((json) => json.shortTermForecasts)
}

// json 데이터를 변수에 담기
let shortTermForecasts_data 

// data :: weather()의 return 값
weather().then((data)=> {
  shortTermForecasts_data = data //전역변수에 할당
  
  // 함수에 매개 변수로 json 데이터 담은 변수 주기
  // 1. '흐름'시간만 출력 
  cloudyFuc(shortTermForecasts_data)
  // 2. '구름 많음' → '흐름'
  convertCloudy(shortTermForecasts_data)
  // console.log("shortTermForecats :: "+ shortTermForecasts_data)
})

// 1. 6월 24일 시간별 예보에서 '흐림' 시간만 출력(filter)
function cloudyFuc(shortTermForecasts) {
  let applyYmdArr = shortTermForecasts.filter(item => item.applyYmd === "20250624")
  console.log("applyYmdArr :: " , applyYmdArr)
  
  let cloudyArr = applyYmdArr.filter(item => item.weatherText === "흐림")
  console.log("cloudyArr :: " , cloudyArr)
}

// 2. 6월 24일 시간별 예보에서 '구름 많음'을 '흐림'으로 변경해서 시간별 예보만 출력(map)
function convertCloudy(shortTermForecasts) {
  let applyYmdArr = shortTermForecasts.filter(item => item.applyYmd === "20250624")
  
  let cloudyArr = applyYmdArr.filter(item => item.weatherText === "구름많음")

  let convertCloudyArr = cloudyArr.map(item => {
    return {
      weatherText : item.weatherText = "흐림"
    }
  })
  console.log("convertCloudyArr :: " ,convertCloudyArr)
}


// 3. 주간예보(weeklyForecast)에서 '흐림'으로 예보된 것이 며칠인지 출력(reduce)