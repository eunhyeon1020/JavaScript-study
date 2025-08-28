// 리스트 만드는 로직
const boardList = document.querySelector(".board-list");

function renderBoardList(dateKey) {
  boardList.innerHTML = "";

  // memos = 배열
  const memos = memoData[dateKey] || [];
  // forEach(각 회의록 객체, 인덱스 번호)
  memos.forEach((m, i) => {
    const item = document.createElement("div");
    item.classList.add("memoList");
    item.innerHTML = `
        <div class="listIndex">${i + 1}. </div> 
        <div class="listTopic">${m.topic}</div> 
      <hr/>
    `;
    boardList.appendChild(item);
  });
}
