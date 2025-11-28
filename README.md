# DIVE SOPT 37기 합동 세미나 모바일 웹 3조 아이디어스

<br/>

## 🛒 프로젝트 소개

아이디어스(IDUS)

<br/>

## 👥 팀원

| <img src="https://github.com/jstar000.png" width="120" /> | <img src="https://github.com/mimizae.png" width="120" /> | <img src="https://github.com/odukong.png" width="120" /> | <img src="https://github.com/qowjdals23.png" width="120" /> |
| :-------------------------------------------------------: | :------------------------------------------------------: | :------------------------------------------------------: | :---------------------------------------------------------: |
|           [임지성](https://github.com/jstar000)           |           [지민재](https://github.com/mimizae)           |           [오수빈](https://github.com/odukong)           |           [배정민](https://github.com/qowjdals23)           |

<br/>

---

<br/>

## 🙋‍♂️ 담당 역할

### 정민

| 구분    | 항목                                                                                                                                                                                           |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setting | `ky 초기 세팅`                                                                                                                                                                                 |
| view    | `주목할 만한 작품 컴포넌트` `작품 키워드 컴포넌트` `사용자 후기 컴포넌트` `기획전 배너 컴포넌트` `사용자 후기 페이지 (ProductReview)` `연관 작품 페이지 (RelatedProduct)` `후기 요약 컴포넌트` |
| api     | `후기 조회 GET` `작가 정보 조회 GET`                                                                                                                                                           |

### 수빈

| 구분    | 항목                                                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setting | `eslint, prettier` `husky` `storybook` `tanstack-query`                                                                                                 |
| view    | `혜택가(Benefit) 컴포넌트` `캐러셀(Carousel) 컴포넌트` `헤더(Header) 공통 컴포넌트` `작품 요약 정보(Summary) 컴포넌트` `작품 정보 페이지 (ProductInfo)` |
| api     | `작품 정보 조회 GET`                                                                                                                                    |

### 지성

| 구분    | 항목                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| setting | `폴더구조 설정` `컴포넌트 지연로딩` `React-router` `SVGR` `Path Alias` `CODEOWNERS` `Ky 인스턴스 래퍼함수` `이미지 성능 최적화` |
| view    | `Input 컴포넌트` `Floating Button` `버튼 공통 컴포넌트` `Footer` `바텀시트`                                                     |
| api     | `Ky 인스턴스 래퍼함수` `API 구조 세팅` `작품 좋아요 POST`                                                                       |

### 민재

| 구분    | 항목                                                                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setting | `ci-cd 구축 및 vercel 배포` `vanilla extract 디자인 토큰 시스템 구축`                                                                                       |
| view    | `좋아요 공통 컴포넌트` `컴포넌트들 취합한 루트 페이지 구현` `작가 정보 컴포넌트` `Tab-Bar 구현` `아코디언 공통 컴포넌트` `작품 정보 페이지 (ProductDetail)` |
| api     | `작가 좋아요 POST`                                                                                                                                          |

<br/>

---

<br/>

## 📝 컨벤션

프로젝트 컨벤션은 [여기](https://www.notion.so/2a9b555a2dff8068b9e0e3a6dec05b8c)에서 확인할 수 있습니다.

<br/>

---

<br/>

## 🛠 사용 기술 스택

| Category             | Stack                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)                                                                                                 |
| Styling              | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-DB7093?style=for-the-badge&logo=vanilla-extract&logoColor=white)                                                                                |
| Data Fetching        | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)                                                                                       |
| Package Manager      | ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)                                                                                                                   |
| Formatting & Linting | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) |
| Version Control      | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)                |

<br/>

---

<br/>

## 📁 폴더 구조

```
src/
├── apis/                    # API 관련
│   ├── constants/           # API 엔드포인트, 쿼리키
│   ├── mutations/           # useMutation 훅
│   ├── queries/             # useQuery 훅
│   └── types/               # API 타입 정의
├── assets/                  # 정적 리소스
│   ├── img/                 # 이미지 파일
│   └── svg/                 # SVG 아이콘
├── pages/                   # 페이지 컴포넌트
│   ├── product/             # 상품 루트 페이지
│   ├── product-info/        # 상품 정보
│   ├── product-detail/      # 상품 상세
│   ├── product-review/      # 상품 후기
│   ├── related-product/     # 연관 상품
│   └── purchase/            # 구매 바텀시트
├── shared/                  # 공통 모듈
│   ├── components/          # 공통 컴포넌트
│   ├── constants/           # 공통 상수
│   ├── hooks/               # 공통 훅
│   ├── styles/              # 스타일, 디자인 토큰
│   ├── types/               # 공통 타입
│   └── utils/               # 유틸 함수
├── routes/                  # 라우팅 설정
└── stories/                 # Storybook 스토리
```
