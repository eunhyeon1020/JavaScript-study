// 년도, 월
const year = document.getElementById("year");
const month = document.getElementById("month");

// 요일, 날짜 칸
const dateBoard = document.querySelector(".date-board");

// 오늘 날짜 정보
const today = new Date(); //실제 오늘을 기준으로 가져오는 것
const todayY = today.getFullYear();
const todayM = today.getMonth();
const todayD = today.getDate();

// 달력 그리기
const printCalendar = (date) => {
  // 1. 현재 날짜의 년도와 월 가져오기
  let nowY = date.getFullYear();
  let nowM = date.getMonth(); // 0부터 세짐

  // 현재 연도와 월 대입
  year.innerHTML = nowY + "년";
  month.innerHTML = nowM + 1 + "월";

  // 2. 현재 달의 첫번째 날의 정보와 마지막 날 가져오기 (ex : 0~6, 31)
  // getDay() : 0=일요일, 1=월요일, ... 6=토요일
  let firstDay_info = new Date(nowY, nowM, 1);
  let lastDay_info = new Date(nowY, nowM + 1, 0);
  let firstDay = firstDay_info.getDay(); // 5(금요일 기준)
  let lastDay = lastDay_info.getDate(); // 31(8월 기준)

  console.log("현재 달의 첫 번째 날 :: " + firstDay);
  console.log("현재 달의 마지막 날 :: " + lastDay);

  // 3. 현재 달에 필요한 날짜 칸 수 계산하기
  let baseCellCount = firstDay + lastDay; // 첫 번째 날짜 정보 + 마지막 날짜
  let needCell = Math.ceil(baseCellCount / 7) * 7; // 현재 달에 필요한 모든 날짜칸 수(빈칸 + 날짜칸)
  console.log(needCell);

  let dateCell = "";

  // 1일 전, 빈 날짜일 때 빈 날짜칸 생성
  for (let i = 0; i < firstDay; i++) {
    dateCell += `<div class="empty-cell"></div>`;
  }

  // 날짜칸 생성
  for (let i = 1; i <= lastDay; i++) {
    // 오늘 날짜 일때 하이라이트 설정
    if (nowY === todayY && nowM === todayM && i === todayD) {
      dateCell += `<div class="dateCell">
                    <div class="today">${i}</div>
                    <div class="cell"></div>
                  </div>`;
    } else {
      dateCell += `<div class="dateCell">
                    <div class="date">${i}</div>
                    <div class="cell"></div>
                  </div>`;
    }
    console.log(i);
  }

  // 마지막 날 후, 빈 날짜일 때 빈 날짜칸 생성
  for (let i = baseCellCount; i < needCell; i++) {
    dateCell += `<div class="empty-cell"></div>`;
  }

  dateBoard.innerHTML = dateCell;
};

// 현재 날짜를 가져오는 date 객체 생성(현재 달력에서 보고 있는 달 / 달력 화면을 이동)
let date = new Date();

// 현재 달
printCalendar(date);

// ***************************************************************************//
// 버튼 클릭 시 이전 달, 다음 달로 넘어가기

function prevMonth() {
  // 이전 달
  // setMonth : Date 객체 자체에서 달 필드만 수정하는 메서드
  printCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}

function nextMonth() {
  // 다음 달
  printCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}

// ***************************************************************************//
// 기본으로 현재 날짜로 게시판 도출
function setDefaultBoard() {
  document.querySelector("#memo-board div ul").innerHTML = `
    <li>${todayY}년</li>
    <li>${todayM + 1}월 ${todayD}일</li>`;

  document.querySelector(".meeting-date").innerHTML = `
    <div>${todayM + 1}월 ${todayD}일</div>`;
}

setDefaultBoard();

// 날짜 셀 클릭 시, 클릭한 날짜 요일이 게시판 영역에 도출
dateBoard.addEventListener("click", (e) => {
  // closest(선택자) :: 자기 자신 부터 시작해서 부모 요소를 타고 올라가면서, 선택자에 맞는 가장 가까운 요소 반환
  // .detecell을 만나면 거기서 멈추고 반환
  const cell = e.target.closest(".dateCell");
  // 1. datecell 외 다른 곳을 클릭 했을 때 반환
  if (!cell) return;

  // 2. 게시판 영역에 html 넣기
  document.querySelector("#memo-board div ul").innerHTML = `
    <li>${year.innerText}</li>
    <li>${month.innerText} ${cell.innerText}일</li>`;

  document.querySelector(".meeting-date").innerHTML = `
    <div>${month.innerText} ${cell.innerText}일</div>`;
});
