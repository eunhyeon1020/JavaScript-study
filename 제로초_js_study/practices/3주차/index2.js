const javaScriptArray = [
    {name : '윤인성', region: ['서울']},
    {name : '윤명월', region: ['도쿄']}
];

// 윤인성의 region을 출력하시오 
console.log(javaScriptArray[0].region)

// 윤명월의 name과 region을 출력하시오.
for (const element in javaScriptArray){
    console.log(javaScriptArray[element])    
}


const name = Object.keys(javaScriptArray)
console.log(name)
