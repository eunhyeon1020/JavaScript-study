const main = document.getElementById("main");
const baseModal = document.getElementById("baseMemo-modal");
const viewModal = document.getElementById("memo-view-modal");
const editorModal = document.getElementById("memo-editor-modal");

function plusBtn() {
  baseModal.style.display = "block";
  main.classList.add("modal-background");
}

function hideBtn() {
  baseModal.style.display = "none";
  viewModal.style.display = "none";
  editorModal.style.display = "none";
  main.classList.remove("modal-background");
  main.classList.remove("basemodal-background");
}

// 회의록 주제, 참여자, 회의 내용 데이터
// 기본 데이터
const topic = document.getElementById("topic");
const attendees = document.getElementById("attendees");
const content = document.getElementById("content");
// 뷰 데이터(수정X)
const topicView = document.getElementById("view-topic");
const attendeesView = document.getElementById("view-attendees");
const contentView = document.getElementById("view-content");
// 수정 데이터
const topicEdit = document.getElementById("edit-topic");
const attendeesEdit = document.getElementById("edit-attendees");
const contentEdit = document.getElementById("edit-content");

// 데이터 키 출력 함수
function getDateKey() {
  const dateText = document.querySelector(".meeting-date").innerText.trim();
  const yearText = document
    .getElementById("year") // 2025년
    .innerText.replace("년", ""); // 2025
  const monthDay = dateText
    .replace("월", "") // 8 27일
    .replace(" ", "-") // 8-27일
    .replace("일", ""); // 8-27
  return `${yearText}-${monthDay}`;
}

// 로컬 스토리지 불러오는 함수
function loadMemo() {
  return JSON.parse(localStorage.getItem("memos")) || {};
}

// 인덱스 뽑는 함수
function getMemoIndex(memoItem) {
  const indexText = memoItem.querySelector(".listIndex").innerText;
  return parseInt(indexText) - 1;
}

// 저장 버튼을 눌렀을 때, 회의록 로컬스토리지에 저장
function saveBtn() {
  const dateKey = getDateKey();

  // value값으로 저장한 데이터 만들기
  const newMemo = {
    topic: topic.value,
    attendees: attendees.value,
    content: content.value,
  };

  // 로컬 스토리지에 오늘 날짜 키가 있는지 확인
  if (!memoData[dateKey]) {
    // 없으면 빈 배열
    memoData[dateKey] = [];
  }
  // 해당 날짜 배열에 회의록 데이터 추가
  memoData[dateKey].push(newMemo);

  // 로컬 스토리지에 다시 저장
  localStorage.setItem("memos", JSON.stringify(memoData));

  // 게시판 리스트 ui 갱신
  renderBoardList(dateKey);

  // 모달창 데이터 초기화
  topic.value = "";
  attendees.value = "";
  content.value = "";

  // 모달창 닫기
  hideBtn();
}

// 리스트를 눌렀을 때, 회의록 수정 및 삭제 로직
boardList.addEventListener("click", (e) => {
  // memoList 클릭한지, 판별
  const memoItem = e.target.closest(".memoList");
  if (!memoItem) return;

  // 뷰 모달열기
  viewModal.style.display = "block";
  main.classList.add("modal-background");

  const dateKey = getDateKey(); // 날짜 키 생성
  let memoData = loadMemo(); // 로컬스토리지 불러오기
  const index = getMemoIndex(memoItem); // 리스트 인덱스

  // 선택한 값을 전역에 저장(수정/삭제)
  window.selectedDateKey = dateKey;
  window.selectedIndex = index;

  // datekey와 index에 관한 데이터 객체 불러오기
  let targetMemo = memoData[dateKey][index];

  // input란에 데이터 객체 넣기
  if (targetMemo) {
    topicView.value = targetMemo.topic || "";
    attendeesView.value = targetMemo.attendees || "";
    contentView.value = targetMemo.content || "";
    topicEdit.value = targetMemo.topic || "";
    attendeesEdit.value = targetMemo.attendees || "";
    contentEdit.value = targetMemo.content || "";
  }
});

// 수정할 수 있게 만드는 버튼
function changeBtn() {
  baseModal.style.display = "none";
  editorModal.style.display = "block";

  topicEdit.focus();
}

// 수정버튼
function updateBtn() {
  // 클릭 했을 때, 저장해둔 dateKey와 index 갖고오기
  const dateKey = window.selectedDateKey;
  const index = window.selectedIndex;

  // 로컬스토리지 불러오기
  let memoData = loadMemo();

  // 해당 날짜 키에 메모 배열이 있고, 그 안에 index 위치가 있다면
  if (memoData[dateKey] && memoData[dateKey][index]) {
    // 그 위치의 객체를 수정된 값으로 덮어쓰기
    memoData[dateKey][index] = {
      topic: topicEdit.value,
      attendees: attendeesEdit.value,
      content: contentEdit.value,
    };
  }

  // 덮어쓴 값을 로컬스토리지에서 저장
  localStorage.setItem("memos", JSON.stringify(memoData));

  // 리스트 수정 내용 반영
  renderBoardList(dateKey);

  // 뷰 모달에 최신 데이터 넣기
  topicView.value = memoData[dateKey][index].topic;
  attendeesView.value = memoData[dateKey][index].attendees;
  contentView.value = memoData[dateKey][index].content;

  // view 모달창 띄우기
  baseModal.style.display = "block";
  editorModal.style.display = "none";
}

// 삭제 버튼
function delBtn() {
  // 모달창 닫기
  hideBtn();
}
