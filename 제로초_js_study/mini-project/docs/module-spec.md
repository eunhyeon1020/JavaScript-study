# 모듈 설계서

## 주요 모듈 정의

| 모듈명 | 주요 기능 | 관련 함수 | 설명 |
|--------|-----------|-----------|------|
| CalendarModule | 달력 렌더링, 날짜 클릭 이벤트 처리 | `renderCalendar()`, `handleDateClick()` | 달력 셀 생성, 회의록 존재 시 표시 |
| MemoBoardModule | 게시판 모달 표시, 회의록 리스트 출력 | `openMemoBoardModal()`, `renderMemoList()` | 날짜별 회의록 목록 출력 및 편집 진입 |
| MemoEditorModule | 회의록 작성/수정/삭제 처리 | `openMemoEditorModal()`, `saveMemo()`, `deleteMemo()` | 입력 폼 제어 및 localStorage 연동 |
| StorageModule | localStorage 관리 유틸 | `saveToStorage()`, `loadFromStorage()`, `deleteFromStorage()` | 날짜별 회의록 저장 및 불러오기 공통 처리 |