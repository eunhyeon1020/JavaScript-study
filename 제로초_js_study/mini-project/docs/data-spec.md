# 데이터 설계서 

## 저장 방식 
- 저장소 : `localStorage`
- Key : `'YYYY-MM-DD'`
- Value : 회의록 객체 배열(JSON)

## 회의록 객체 구조 
| 필드명 | 타입 | 설명 |
|--------|------|------|
| `id` | `string` | 고유 식별자 (timestamp) |
| `title` | `string` | 회의 제목 |
| `members` | `string` | 참여자 이름 (쉼표로 구분) |
| `content` | `string` | 회의 내용 |
| `createdAt` | `string` | 작성 시각 |

## 예시 데이터 
```json
[
  {
    "id": "memo-001",
    "title": "디자인 회의",
    "members": "은현",
    "content": "컴포넌트 정리",
    "createdAt": "2025-08-07T10:00:00"
  }
]