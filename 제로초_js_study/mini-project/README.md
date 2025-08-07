# 회의록 캘린더

날짜별로 회의록을 작성하고, 수정/삭제할 수 있는 웹 개발 애플리케이션입니다.
JavaScirpt만 사용하며, localStorage로 데이터가 저장됩니다.

## 프로젝트 미리 보기

![미리보기 이미지]()

## 사용 기술

- HTML5 / CSS3
- JavaScirpt (vanilla)
- LocalStorage (브라우저 저장소)

## 주요 기능

- 월 단위 캘린더 생성
- 날짜 클릭 시 회의록 게시판 모달 오픈
- 회의록 작성/수정/삭제 기능
- 회의록이 있는 날짜는 달력에 동그라미 표시
- 모든 데이터는 localStorage에 자동 저장

## 프로젝트 구조

mini-project  
├── index.html  
├── style.css  
├── script.js  
└── README.md

## 실행 방법

1.  저장소 클론
2.  'index.html'을 브라우저로 열면 바로 실행 가능 (로컬 서버 불필요)

## 설계 개요

- 데이터 저장 : 날짜('YYYY-MM-DD')를 key로 하여 localStorage에 회의록 배열 저장
- 모듈 구성 : 달력 렌더링, 게시판 모달, 회의록 모달, 저장/삭제 처리 모듈 분리

## 설계 문서

- [데이터 설계서](./docs/data-spec.md)
- [모듈 설계서](./docs/module-spec.md)
- [인터페이스 설계서](./docs/interfacs-spec.md)

## 기타

- 반응형 UI 미지원(pc 전용, 추후 개발 예정)
- 프레임워크 없이 순수 JS로 구현
