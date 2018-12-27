# [ Nomad Connection Homepage ]

**최종 수정일**: 2018-12-27

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

## CSS

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

- 컴파일된 css 파일은 css/ 폴더 내 style.css입니다. css를 수정하시려면 scss/ 폴더 내 scss 파일을 수정하시고 컴파일해주세요.
  - 만약 scss 파일 없이 작업하시려면 css/ 폴더에 압축되지 않은 style-not-compressed.css 파일이 있으니, 이를 수정하시고 해당 파일로 스타일을 연결하시면 됩니다.

## 전달사항

- 파일 다운로드 버튼을 누르면 현재 alert창이 나옵니다. 이를 수정하시려면 아래와 같이 해주세요!

1. files/ 폴더에 파일을 업로드해주세요.
   > 예를 들어, files/ 내에 introduction.pdf를 업로드 합니다.
2. js/ 폴더의 ui.js 파일을 여신 다음, 8번째 줄의 fileName 변수를 찾습니다.

```
  var fileName = "";
```

3. 위 fileName의 "" 안에 확장자를 포함한 파일이름 전체를 넣어주세요.

```
  var fileName = "introduction.pdf";
```

- 회사 주소 등 텍스트를 수정하려는 경우, index.html 내에 해당 텍스트를 직접 수정하시면 됩니다.
  - 단, 영문 타이틀(Our Value 등)은 이미지로 되어 있으니, 이미지를 통째로 교체하셔야 합니다. (이 경우 css내의 width, height값도 함께 변경하셔야 깨지지 않습니다!)
