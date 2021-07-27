## 1. 과제 소개

API와 연동하여 무한 스크롤(Infinite Scroll)을 구현해보자 !

### 1-1. 기술 스택

`React` `React Hooks` `Intersection Observer API`

**Intersection Observer API**

- 리플로우 문제를 야기시키는 `getBoundingClientRect()` 함수를 사용하지 않기 위해서 사용

### 1-2. 구현 목록

- [x] figma를 참고한 카드 스타일링
- [x] JSON 데이터 Fetching
- [x] 무한 스크롤 구현
- [x] 리팩토링

## 2. 설치 및 실행

```jsx
npm install && npm start
```

## 3. 구조

```bash
📦 src/
┣ 📂 components/
┃ ┗ ⚛️ Card.jsx
┃ ┗ ⚛️ InfiniteScrollList.jsx
┣ 📂 fetch/
┃ ┗ ⚛️ useFetchCards.js
┣ 📂 utils/
┃ ┗ ⚛️ config.js
┣ 📂 assets/
┃ ┗ 📂 css/
┃ 	┗ 💅App.css
┃ 	┗ 💅 Card.css
┃ 	┗ 💅 InfiniteScrollList.css
┃ 	┗ 💅 reset.css
┗ ⚛️ App.jsx
┗ ⚛️ index.js
```

## 4. 데모

![ezgif com-gif-maker](https://user-images.githubusercontent.com/19265753/127101541-ac42fa8b-0603-47c7-9624-4a05e7514592.gif)
