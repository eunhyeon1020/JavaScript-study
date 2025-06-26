// json 폴더 연결 
function weather() { 
  return fetch('naver_weather_sample.json')
    .then((res) => res.json())
    .then((json) => json.shortTermForecasts)
}

weather().then((shortTermForecasts)=> {{
  console.log(shortTermForecasts)
  // console.log(shortTermForecasts)
}})

// 1. 6월 24일 시간별 예보에서 '흐림' 시간만 출력 
function cloudy(shortTermForecasts) {
  const mapArray = shortTermForecasts.map(obj => { 
    return (
      {...obj, check:true}
    );
  })
  console.log(mapArray)
  // if (shortTermForecasts)
  // const result = shortTermForecasts.filter()
}

// 2. 6월 24일 시간별 예보에서 '구름 많음'을 '흐림'으로 변경해서 시간별 예보만 출력

// 3. 주간예보(weeklyForecast)에서 '흐림'으로 예보된 것이 며칠인지 출력 