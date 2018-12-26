# [ Nomad Connection Homepage ]

**최종 수정일**: 2018-12-26

## 폴더 구조

- css/
- files/
- fonts/
- images/
  - bg/
  - favicon/
  - icon/
  - logo/
  - title/
  - ogImage.png
- js/
  - ui.js
- scss/
- index.html
- README.md

## 전달사항

- 풀 반응형이며, 최소 사이즈 720부터 대응합니다. (갤럭시 S5 크기)
  - 반응형 분기는 아래와 같습니다.
    - laptop(~980px), tablet(~769px), mobile(~640px)
  - 반응형 스타일 추가 시 @include res--{분기이름}과 같이 사용합니다.
    ```
    @include res--tablet {color:red;} //태블릿 사이즈용
    @include res--mobile {color:blue;} //모바일 사이즈용
    ```
- 폰트는 경량화 폰트를 사용했습니다. 따라서 일부 특수문자는 출력되지 않을 수 있습니다.
  - 사용하는 폰트 굵기: Thin(100), Light(200), DemiLight(300), Regular(400), Medium(500), Bold(700)
