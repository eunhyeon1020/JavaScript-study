const boardList = document.querySelector(".board-list");

function renderBoardList(dateKey) {
  boardList.innerHTML = "";

  const memos = memoData[dateKey] || [];
  memos.forEach((m, i) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <strong>${m.topic}</strong> (${m.attendees})<br/>
      <p>${m.content}</p>
      <hr/>
    `;
    boardList.appendChild(item);
  });
}
