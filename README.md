# ✈️ 여행 일정 공유 서비스앱 [여기다]

### 🎬[Demo시연영상](https://www.youtube.com/watch?v=JYKu9MwEL1Y) 🎤[Presentation](https://github.com/DANA-HYEON/yogida-client/wiki/%EC%97%AC%ED%96%89-%EA%B3%B5%EC%9C%A0-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%95%B1-%5B%EC%97%AC%EA%B8%B0%EB%8B%A4%5D-%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C) 📝[Notion](https://www.notion.so/b2d3d50c35e247c596894bc3ef8e01a7?pvs=21) 🖌️[Figma](https://www.figma.com/file/G35yyvdZSVCH7ohs5WxRJE/Elice-Project-2?type=design&node-id=0%3A1&mode=design&t=HkJV2PXVa28vcwRm-1)
![banner](https://github.com/DANA-HYEON/yogida-client/assets/80450737/9df1b646-834f-4364-af5b-0e471c61e0d8)

- 배포 URL : http://kdt-sw-7-team08.elicecoding.com/
- Test ID : test@test.com
- Test PW : test1234!

<br>

## ✨ 프로젝트 소개
<table style="overflow:hidden">
  <tbody  style="overflow:hidden">
      <td align="left">
          
 <br/>
 
📒 **여**: 여행 일정을 / **기**: 기록하고 / **다**: 다이어리를 쓰는 공간

### **여기다**

여행 일정을 공유하고 관광 명소 및 코스를 스크랩 할 수 있는 서비스를 제공합니다.

### 주요 기능

- **여행 일정 공유**: 전체 여행 일정을 타임 라인으로 간편하게 보여줍니다.
- **여행 코스 기록:** 사용자는 자신의 여행 경험을 기록합니다.
- **지도 위치 표시:** 플랫폼은 사용자가 기록한 여행 코스의 각 지점을 정확한 지도 상 위치와 함께 시각적으로 제시합니다.
- **여행지 및 여행 코스 즐겨찾기:** 사용자는 다양한 여행지와 코스를 찜하기 기능을 통해 즐겨 찾는 목록에 담아둘 수 있습니다.

<br/>
       </td>
     
  </tbody>
</table>

<br>

## 팀원 구성


<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/DANA-HYEON/"><img src="https://github.com/DANA-HYEON/yogida-client/assets/80450737/cfc68cf2-643a-423a-9ac2-f01ba20faac0" alt="profile" width="100" height="100px" object-fit="cover"/><br /><sub><b>FE 팀장 : 이다현</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/DANA-HYEON/yogida-client/assets/80450737/e06a4240-88f7-4f80-a320-afae2e328ccc" alt="profile" width="100" height="100px"/><br /><sub><b>FE 팀원 : 황하연</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/DANA-HYEON/yogida-client/assets/80450737/66966aa8-a3b3-4f72-8a2f-d9fc009b2418" alt="profile" width="100" height="100px"/><br /><sub><b>FE 팀원 : 하유나</b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href=""><img src="https://github.com/DANA-HYEON/yogida_client/assets/80450737/28baf1f4-6f49-4d25-b9dd-93d1f55c416e" width="100" height="100px" alt=""/><br /><sub><b>BE 팀장 : 구기윤</b></sub></a><br /></td>
     <td align="center"><a href=""><img src="https://github.com/DANA-HYEON/yogida-client/assets/80450737/bd715476-66fa-4291-a1ca-9d46dd99bbcf" alt="profile" width="100" height="100px"/><br /><sub><b>BE 팀원 : 김세연</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/DANA-HYEON/yogida-client/assets/80450737/ba7cc33b-6596-4bd0-a9bd-0a83a5796db2" alt="profile" width="100" height="100px"/><br /><sub><b>BE 팀원 : 고정화</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<br>

## 1. 개발 환경

- Front : HTML, JavaScript, React, Tailwind Css, Recoil, React-Query
- Back-end : MongoDB, Express.js, JavaScript, Node.js
- 버전 및 이슈관리 : Gitlab, Gitlab Issues, Gitlab Project
- 빌드 도구, 패키지 매니저, 인증 방식 : Vite, Yarn, Cookie
- 협업 툴 : Discord, [Notion](https://www.notion.so/b2d3d50c35e247c596894bc3ef8e01a7?pvs=21)
- Git Hook 관리 도구 : Husky
- 서비스 배포 환경 :
- 디자인 : [Figma](https://www.figma.com/file/G35yyvdZSVCH7ohs5WxRJE/Elice-Project-2?type=design&node-id=0%3A1&mode=design&t=HkJV2PXVa28vcwRm-1)
<br>

## 2. 채택한 개발 기술과 브랜치 전략
### React, Tailwind css

- React
    - **재사용성**
    컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- Tailwind css
    - **개발시간 단축** 
    클래스 이름을 고민하는 시간도 개발시간에 포함 된다고 생각했습니다. Tailwind CSS는 클래스 이름을 고민할 필요가 없기 때문에 빠르게 구현에 초점을 둘 수 있습니다.
    - **스타일 통일성**
    팀 내에서 스타일 규칙을 정한다고 해도, CSS 파일을 따로 만들어 각자 작성을 하게 되면 서로의 이해 차이 때문에 페이지 혹은 컴포넌트 별 스타일의 통일성을 해칠 수 있습니다. 그러나 Tailwind CSS의 경우 사용할 수 있는 클래스 명이 이미 정해져있기 때문에 이해 차이를 줄이고 스타일에 통일성을 줄 수 있습니다.

### Recoil

- 최상위 컴포넌트를 만들어 props로 유저 정보를 내려주는 방식의 경우 불필요한 props 전달이 발생합니다. 따라서, 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.
- Redux가 아닌 Recoil을 채택한 이유
    - **낮은 러닝커브**
    Recoil은 React만을 위한 라이브러리로, 사용법도 기존의 useState 훅을 사용하는 방식과 유사해 학습비용을 낮출 수 있었습니다.
    - **적은 코드량**
    또한 Redux보다 훨씬 적은 코드라인으로 작동 가능하다는 장점이 있었습니다.

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.

### 브랜치 전략

- Git-flow 전략을 기반으로 master, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- master, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **master** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **dev** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - feat 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┣ 📂components //공통 컴포넌트 폴더
 ┣ 📂constants  //공통 상수관리 폴더
 ┣ 📂hooks
 ┣ 📂pages //페이지 단위 폴더
 ┃ ┣ 📂auth
 ┃ ┣ 📂comment
 ┃ ┣ 📂detail
 ┃ ┣ 📂main
 ┃ ┣ 📂mypage
 ┃ ┣ 📂notification
 ┃ ┣ 📂setup
 ┃ ┣ 📜ApiErrorBoundary.jsx
 ┃ ┣ 📜ChangePassword.jsx
 ┃ ┣ 📜Filter.jsx
 ┃ ┣ 📜FindPassword.jsx
 ┃ ┣ 📜Loading.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜Map.jsx
 ┃ ┣ 📜Notfound.js
 ┃ ┣ 📜PrivateRoute.jsx
 ┃ ┣ 📜Search.jsx
 ┃ ┗ 📜SignUp.jsx
 ┣ 📂recoils
 ┣ 📂services //API 통신 로직 폴더
 ┣ 📂store
 ┃ ┗ 📜reactQuery.js
 ┣ 📂utils
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

<br>

## 4. 역할 분담
<table>
  <tr>
    <th>이름</th>
    <th>담당 업무</th>
  </tr>
  <tr>
    <td>
      🍊이다현  
    </td>
    <td>
      <ul>
        <li>UI
          <ul>
            <li>페이지 : 게시글 작성, 게시글 수정, 마이페이지, 프로필 편집</li>
            <li>공통 컴포넌트 : Header, Navbar, Loading, ErrorBoudnary</li>
          </ul>
        </li>
        <li>기능
          <ul>
            <li>로그인 유무에 따른 페이지 분기 처리</li>
            <li>axios 응답 인터셉터에서 404 || 401 || 403 응답 값을 받을 경우 error를 throw하여 react-error-boundary에서 catch하도록 설정</li>
            <li>react-query의 onError 옵션을 활용해 404 || 401 || 403 를 제외한 에러 발생 시 react-hot-toast 모달 표현</li>
            <li>에러 타입별 react-error-boundary 적용</li>
            <li>카카오맵 api를 이용한 실시간 주소 키워드 검색</li>
            <li>게시글 등록, 수정, 삭제</li>
            <li>마이페이지 리스트 조회, 부분 삭제, 전체 삭제</li>
            <li>댓글 등록, 삭제, 편집</li>
            <li>로그아웃</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      ☘️ 고정화
    </td>
    <td>
      <ul>
        <li>게시글 DB 설계 및 API 개발</li>
        <li>각 여행 장소를 저장하는 북마크 DB 설계 및 API 개발</li>
        <li>postman api 명세서 작성 (게시글, 북마크)</li>
        <li>erd 작성 (게시글, 북마크)</li>
        <li>ppt 제작</li>
      </ul>
    </td>
  </tr>
</table>


## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2023-12-11 ~ 2022-12-29
- UI 구현 : 2022-12-11 ~ 2022-12-21
- 기능 구현 : 2022-12-22 ~ 2022-12-29

### 작업 관리

- GitLab Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간 회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 Notion에 회의 내용을 기록했습니다.

<br>

## 6. 신경 쓴 부분

- [개발자의 휴먼에러를 방지하기 위한 string 상수값 환경변수화](https://dana-dev.tistory.com/entry/React-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%ED%9C%B4%EB%A8%BC%EC%97%90%EB%9F%AC%EB%A5%BC-%EB%B0%A9%EC%A7%80%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-string-%EC%83%81%EC%88%98%EA%B0%92-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%ED%99%94)

<br>

## 7. 페이지별 기능

### [이메일 회원가입]
- 로그인이 필요한 페이지를 클릭할 시 로그인 페이지로 이동
- 이메일 인증 번호 확인
- 닉네임 중복 검사
- 회원가입 시 자동으로 로그인
- 유저정보를 recoil-persist를 이용해 localstorge에 저장
- accessToken을 쿠키에 세팅

| 이메일 회원가입 |
|----------|
|![이메일회원가입](https://github.com/DANA-HYEON/yogida-client/assets/80450737/29ee3045-59a0-458b-8320-131ca9c6ebfd)|

<br>

### [카카오 회원가입]
- 카카오 API를 통한 회원가입
- 카카오 프로필 이미지를 기본 이미지로 설정 (수정 가능)
- 닉네임 중복 검사
- 회원가입 시 자동으로 로그인
- 유저정보를 recoil-persist를 이용해 localstorge에 저장
- accessToken을 쿠키에 세팅

| 카카오 회원가입 |
|----------|
|![카카오회원가입](https://github.com/DANA-HYEON/yogida-client/assets/80450737/d5bef859-f808-4f48-a039-0c31149873eb)|

<br>

### [여행일정 등록]
- 달력을 통해 여행일정 등록
- 카카오맵 api를 이용해 키워드로 실시간 장소 검색 가능
- 등록한 장소 사이의 거리들을 custom hook을 이용해 계산
- 날짜별로 일정 등록 후 장소마다 사진과 별점을 설정 가능
- 여행 장소를 카카오 지도에 line으로 표시하여 직관적으로 일정을 알 수 있게 디자인
- 여행 tag 선택 가능

| 여행일정 등록 |
|----------|
|![게시글등록](https://github.com/DANA-HYEON/yogida-client/assets/80450737/0a35042f-2664-408a-a9fb-21c2cfd0e53b)|

<br>

### [이미지 슬라이드]
- 날짜별 여행장소의 첫번째 이미지들을 슬라이드 형식으로 디자인

| 이미지 슬라이드 |
|----------|
|![이미지슬라이드](https://github.com/DANA-HYEON/yogida-client/assets/80450737/71e38cb1-0b17-49f2-a177-81619fc1e01b)|

<br>

### [여행일정 상세]
- 여행일정을 공유할 수 있는 링크 복사 기능 가능
- 카카오 지도에 장소별 marker와 line을 그려 유저가 직관적으로 파악할 수 있게 디자인
- 장소별로 거리를 km로 표시
- 장소 클릭시 카카오맵 상세페이지 이동, 한번 더 클릭 시 상세정보 확인 가능
- 자신이 등록한 게시글일 경우 수정하기, 삭제하기 버튼 표시

| 여행일정 상세 |
|----------|
|![게시글상세](https://github.com/DANA-HYEON/yogida-client/assets/80450737/e4fba1db-ece7-4f83-bdf0-8fccfe55be47)|

<br>

### [여행일정 수정]
- 여행일정 수정
- 날짜나 장소 등 수정이 가능
  
| 여행일정 수정 |
|----------|
|![게시글수정](https://github.com/DANA-HYEON/yogida-client/assets/80450737/cbaf6479-5e77-4d08-9401-bd6266fbc00f)|

<br>

### [게시글 좋아요 및 장소 스크랩]
- 여행일정에 하트를 눌러 좋아요 표시 가능
- 게시글 상세 화면의 마음에 드는 장소를 스크랩 가능

| 게시글 좋아요, 장소 스크랩 |
|----------|
|![북마크찜](https://github.com/DANA-HYEON/yogida-client/assets/80450737/0d8887c1-d2f0-4b88-b4b7-2e8af01a28b8)|

<br>

### [댓글 등록, 수정, 삭제, 대댓글]
- 게시글에 댓글 등록, 수정, 삭제가 가능
- 대댓글 등록, 수정, 삭제 가능

| 댓글 |
|----------|
|![댓글](https://github.com/DANA-HYEON/yogida-client/assets/80450737/e0b2fc2d-8242-4b28-99bb-45cce422fc6a)|

<br>

### [마이페이지]
- 마이페이지에서 내가 등록한 게시글, 좋아요 누른 게시글, 스크랩한 장소, 내가 쓴 댓글들을 조회
- 게시글 수정 및 삭제 가능
- 스크랩한 장소와 좋아요 누른 게시글들을 하나씩 선택하거나 전체선택하여 일괄 삭제 가능
- 내가 쓴 댓글들은 클릭 후 게시글로 이동하여 하나씩 삭제 가능

| 마이페이지 조회, 삭제 |
|----------|
|![마이페이지](https://github.com/DANA-HYEON/yogida-client/assets/80450737/fc3d383a-b277-49c8-9fc5-d00e509e9b3a)|

<br>

### [프로필 편집]
- 마이페이지에서 프로필 편집 가능
- 사진과 닉네임만 수정이 가능
- 닉네임 중복검사

| 프로필 수정 |
|----------|
|![프로필편집](https://github.com/DANA-HYEON/yogida-client/assets/80450737/43d7ed76-d4e4-41ca-89cf-fd3eb61e483d)|

<br>

### [여행일정 검색]
- 장소를 선택하거나 검색하여 여행일정 검색 가능

| 여행일정 검색 |
|----------|
|![검색](https://github.com/DANA-HYEON/yogida-client/assets/80450737/ac48accb-bfe1-43de-888a-faf5314ab45f)|

<br>

## 8. 트러블 슈팅

- [접근제한 설정](https://dana-dev.tistory.com/entry/%EB%AA%B0%EB%9E%90%EB%8D%98-useEffect%EC%9D%98-%EC%8B%A4%ED%96%89%EC%88%9C%EC%84%9Cfeat-%EC%9C%A0%EC%A0%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9C%A0%EB%AC%B4-%ED%8C%90%EB%8B%A8)

<br>

## 9. 개선 목표

- 카카오맵 api를 이용한 실시간 주소 검색 시 디바운싱을 이용한 불필요한 트래픽 감소시키기
- 좋아요 클릭 시 바로 좋아요 갯수 +1 해서 보여주기 (낙관적 UI적용)
- 메인페이지 무한스크롤 적용하기
- 알람 삭제 시 새로고침해야 적용되는 현상 실시간 적용으로 개선하기
- 웹 반응형 작업

    
<br>

## 10. 프로젝트 후기

<table>
  <tr>
    <th>이름</th>
    <th></th>
  </tr>
  <tr>
    <td>
      🍊이다현  
    </td>
    <td>
      이 번 프로젝트를 진행하면서 개발도 중요하지만 협업하는 방식도 중요하다는 것을 배웠습니다. 
      매일 아침마다 디스코드로 만나 스크럼을 할 때에도 
      <br/>
      서로 감정상하지 않게 얘기하는 것, 서로의 일정을 쉽게 이해할 수 있게 공유하는 것, 문제 사항을 부끄러워하지 않고 물어보는 것 등... 
      <br/>
      개발자로서의 성장도 물론이지만 같이 소통하고 일하는 법을 배워 "동료"로써 성장했다고도 느꼈습니다.
      <br/>
      2023년 한 해 동안 가장 치열하게 살았던 한 달인 것 같습니다. 같이 힘내준 우리 조원들 모두에게 고생했다고 전하고 싶습니다🧡
    </td>
  </tr>
  <tr>
    <td>
      ☘️ 고정화
    </td>
    <td>
      ...
    </td>
  </tr>
</table>
