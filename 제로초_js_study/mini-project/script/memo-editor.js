const main = document.getElementById("main");
const modal = document.getElementById("memo-editor-modal");

function plusBtn() {
  modal.style.display = "block";
  main.classList.add("modal-background");
}

function hideBtn() {
  modal.style.display = "none";
  main.classList.remove("modal-background");
}

// 회의록 주제, 참여자, 회의 내용 데이터
const topic = document.getElementById("topic");
const attendees = document.getElementById("attendees");
const content = document.getElementById("content");

function saveBtn() {
  // 선택한 날짜 갖고오기
  const dateText = document.querySelector(".meeting-date").innerText;
  console.log(dateText); //8월 27일

  // key값으로 저장할 데이터 가공
  const yearText = document
    .getElementById("year") // 2025년
    .innerText.replace("년", ""); // 2025
  const monthDay = dateText
    .replace("월", "") // 8 27일
    .replace(" ", "-") // 8-27일
    .replace("일", ""); // 8-27
  const dateKey = `${yearText}-${monthDay}`;
  console.log(dateKey);

  // value값으로 저장한 데이터 만들기
  const newMemo = {
    topic: topic.value,
    attendees: attendees.value,
    content: content.value,
  };
  console.log(newMemo);

  // 로컬 스토리지에서 memos라는 키를 찾아서 가져옴
  let memoData = JSON.parse(localStorage.getItem("memos")) || {};

  // 로컬 스토리지에 오늘 날짜 키가 있는지 확인
  if (!memoData[dateKey]) {
    // 없으면 빈 배열
    memoData[dateKey] = [];
  }
  // 해당 날짜 배열에 회의록 데이터 추가
  memoData[dateKey].push(newMemo);

  // 로컬 스토리지에 다시 저장
  localStorage.setItem("memos", JSON.stringify(memoData));

  renderBoardList(dateKey);

  topic.value = "";
  attendees.value = "";
  content.value = "";

  hideBtn();
}
