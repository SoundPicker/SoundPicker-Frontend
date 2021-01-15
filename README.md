## 🔈 SoundPicker WEB TEAM 🔈

- <b> SOPT 27th soundpicker 🦍 </b>
- 프로젝트 기간: 2020.12.26 ~ 2021.01.16 🦍
  >

<img style="border: 0px solid black !important;  " src="https://user-images.githubusercontent.com/61777830/103285304-23353d80-4a21-11eb-9d7e-899c970b818c.png" width="100%" height = "400px" />

<br>
<br>
<br>

## 🕸 WEB Developer 🕸

<img style="border: 0px solid black !important;" src="https://user-images.githubusercontent.com/61777830/103284989-309df800-4a20-11eb-95bd-d5b20b763b2d.jpeg" width="180px" height = "180px" /> 승미 <img style="border: 0px solid black !important; border-radius:50%; " src="https://user-images.githubusercontent.com/61777830/103285053-5d520f80-4a20-11eb-80ca-3c333c40cd8d.jpeg" width="180px" height = "180px" />아연
<img style="border: 0px solid black !important; border-radius:50%; " src="https://user-images.githubusercontent.com/61777830/103285203-cdf92c00-4a20-11eb-9ef6-4475d32007ba.jpeg" width="180px" height = "180px" />재훈 <img style="border: 0px solid black !important; border-radius:50%; " src="https://user-images.githubusercontent.com/61777830/103285090-8377af80-4a20-11eb-87f2-4ac7855538c6.jpeg" width="180px" height = "180px" />
재현

## 🛠 개발 환경 및 사용한 라이브러리 (Development Environment and Using Library)

### Development Environment

### Using Library

| 라이브러리(Library) |        목적(Purpose)        | 버전(Version) |
| :-----------------: | :-------------------------: | :-----------: |
|        Axios        |          서버 통신          |               |
|  react-router-dom   |         라우터 기능         |               |
|       Formik        |    form 에서 input 관리     |               |
|         Yup         |       input 조건 관리       |               |
|        redux        |       전역 상태 관리        |               |
|     react-redux     |       전역 상태 관리        |               |
|  styled-components  |         스타일 시트         |               |
|     YoutubeApi      |   iframe을 가져오기 위함    |               |
|       xeicon        | 기본 아이콘을 가져오기 위함 |               |

<br>
 <br>

## 📜 Coding Convention

<br>

### 🦍 역할 분담 🦍

- 재훈 ➡️ quiz제작 뷰 / quiz수정 뷰
- 아연 ➡️ 회원가입 / 로그인 / 마이페이지 / 로딩페이지
- 재현 ➡️ quizTest뷰1 / quizTest뷰2 / 관련영상 뷰
- 승미 ➡️ Main뷰 / quizend 뷰

<br>

### 🦍 프로그래밍 규칙 🦍
  - 화살표 함수를 주로 사용한다.
  -  반복되는 코드를 지양한다. 
  -  파라미터 변수와 내부 변수를 구별할 땐 언더바가 아닌 this로 구별한다.
        this.name = name (O) / name = _name (X)
        추가적으로 언더바를 prefix로 사용하는 것을 지양하자.
  - 코드의 길이가 짧고 명료한 것도 좋지만, 가독성이 현저히 떨어진다면 코드를 좀 더 풀어쓴다.
  - 모든 예외는 무시하지말고 처리한다. 만약 예외를 처리하지 않을거라면 그 이유에 대해서 명확하게 주석을 남긴다.
  - 예외 케이스가 발생할 확률이 있는 경우, 가능한 빨리 리턴 또는 예외를 던지도록 작성한다.
  -  조건이 복잡한 경우 임시 boolean 변수를 만들어 단순화한다.
  -  조건문에 부정조건을 넣는 것을 피한다.

<br>

### 🦍 네이밍 🦍

**Funcion / State**

- 파일별로 최대한 역할을 알 수 있게 한다.

- 뷰에 해당하는 파일은 대문자로 시작하고 중간 띄어쓰기는 붙인채 대문자로 적는다 ex) MainCard.js

- 모듈 및 폴더들은 소문자로 적는다.

- 함수명은 최대한 역할을 알수있게 적으며 소문자로 시작하고 중간 띄어쓰기는 붙인채 대문자로 적는다 ex)getUserInfo()

<br>

### 🦍 주석 🦍

- `//` 를 사용해서 연관된 코드를 구분짓습니다.
- 팀원이 헷갈릴 수 있는 코드는 주석을 꼭 달아줍니다.
- 한줄 주석은 코드에 부연설명이 필요한 경우 작성한다.
- 여러줄 주석은 앞으로 구현할 코드가 남은 경우 작성한다.
  <br>
  <br>

### 🦍 함께 일하는 방식 🦍

- 매일 오후 2시 전체 스크럼 참여 - 어제 한 일, 오늘 할 일 공유
- 각자 역할 분배 후, 스케쥴 정함
- 각자 스케쥴에 맞게 태스크 진행
- 노션에서 진행 상황 공유(시작 전 | 진행 중 | 완료)
- 중간, 중간 서로의 도움이 필요할 경우 요청하고, 도와준다

<br>
<br>
 
 ## 🦍 Github mangement 🦍

**사피엔스**들의 WorkFlow : **Gitfloww**

- Main 브랜치

  dev 브랜치

  개인 브랜치 (dev_name)

- 개인브랜치에서 작업 후 dev브랜치에서 통합+테스트
  <br>테스트 후 이상이 없는경우 Main브랜치로 병합한다.

- 커밋 메세지는 알기 쉽게 작성한다.
- 모든 커밋 메세지는 한글로 작성한다.

- 모든 커밋은 커밋에 애플리케이션이나 라이브러리에 새로운 기능이 추가될 때 사용되어야 한다.

- push하여 conflict가 있다면 서버 코드를 fetch하여 conflict를 핸들링한 후 다시 push한다.

- 커밋이력을 깨끗하게 하기위하여 conflict는 rebase로 해결한다.

- 1커밋당 1푸시를 원칙으로 한다.

- 새로이 구현할 기능이 있거나 수정해야 할 버그가 있는데 자신이 이를 바로 해결할 여건이 되지 않으면 깃헙 이슈를 남긴다.

- 완료되면 완료한 사람이 이슈를 닫는다.

- 충돌해서 날아가는 경우를 방지하는 용도로 backup branch를 개인별로 생성한다.
  <br>
  <br>

```

```

<br>

### 🦍 폴더구조 🦍

- **Resources**

```

├── App.js
├── assets
├── components
│   ├── common
│   │   ├── Background.js
│   │   ├── BlankLeft.js
│   │   ├── BlankTop.js
│   │   ├── BoldTextComponent.js
│   │   ├── Button.js
│   │   ├── Divider.js
│   │   ├── LoadingComponent.js
│   │   ├── MenuIcon.js
│   │   ├── TextComponent.js
│   │   ├── UnderLineWrap.js
│   ├── loading
│   │   ├── ContentComponent.js
│   │   ├── QuizLoading.js
│   │   ├── StartLoading.js
│   │   └── TitleComponent.js
│   ├── main
│   │   ├── Bg.js
│   │   ├── Main.js
│   │   ├── SearchInput.js
│   │   ├── banner
│   │   │   └── Banner.js
│   │   ├── category
│   │   │   ├── Category.js
│   │   │   └── CategoryList.js
│   │   ├── footer
│   │   │   └── Footer.js
│   │   ├── header
│   │   │   └── Header.js
│   │   └── test_card
│   │       └── TestCard.js
│   ├── test
│   │   ├── TestBackground.js
│   │   └── testcd
│   │       ├── ProgressBar.js
│   │       └── TestCd.js
│   ├── test_end
│   │   ├── BackToMain.js
│   │   ├── Bg.js
│   │   ├── Header.js
│   │   ├── LogoTitle.js
│   │   ├── RecommendCardList.js
│   │   ├── RecommendText.js
│   │   ├── TestEnd.js
│   │   ├── TestTitle.js
│   │   └── ThankYouText.js
│   └── testmaking
│       ├── Header.js
│       ├── Input
│       │   ├── InputCategory.js
│       │   ├── TopInput.js
│       │   ├── TopInputText.js
│       │   └── TopInputWrap.js
│       ├── TMBackground.js
│       ├── TMInner.js
│       ├── TopInner.js
│       └── questionlist
│           ├── QuestionListHeader.js
│           ├── QuestionListInner.js
│           ├── QuestionListPlusButton.js
│           ├── QuestionListSaveButton.js
│           ├── QuestionListTitle.js
│           ├── input
│           │   ├── InputsWrap.js
│           │   ├── QusitonListYoutubeInput.js
│           │   ├── QustionListHintWrap.js
│           │   ├── QustionListInput.js
│           │   ├── QustionListInputLeftWrap.js
│           │   ├── QustionListInputRightWrap.js
│           │   ├── QustionListInputText.js
│           │   └── QustionListInputWrap.js
│           └── player
│               ├── Player.js
│               ├── PlayerWrap.js
│               ├── StartTime.js
│               └── Wave.js
├── containers
│   ├── main
│   │   └── MainContainer.js
│   ├── test
│   │   ├── TestCd
│   │   │   └── TestCdWrapperContainer.js
│   │   └── TestWrapperContainer.js
│   ├── test_end
│   │   └── TestEndContainer.js
│   └── testmaking
│       ├── InputCategoryContainer.js
│       ├── form
│       │   └── TestMakingFormContainer.js
│       └── player
│           └── PlayerContainer.js
├── index.css
├── index.js
└── pages
    ├── main
    │   └── MainPage.js
    ├── mypage
    │   ├── MyPage.js
    │   └── MyPageButton.js
    ├── signup
    │   └── SignIn.js
    ├── test
    │   └── TestPage.js
    ├── test_end
    │   └── TestEndPage.js
    └── testmaking
        └── TestMakingPage.js

```

<br>


 ### 🦍 서비스 핵심 기술 소개 🦍


