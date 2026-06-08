# 개발일지 — 닥터스 브랜드 매니저 회사소개 사이트

> 리포지토리: `HalinaCho/rest02`  
> 개발 기간: 2026년 6월 8일  
> 개발 환경: Windows 11 / Node.js / Create React App  
> 배포 URL: https://halinacho.github.io/rest02

---

## 프로젝트 개요

병의원 전문 마케팅 대행사 **닥터스 브랜드 매니저(닥브매)**의 회사소개 웹사이트.  
안과·피부과·한의원·치과·성형외과 등 개원병의원을 대상으로 네이버 블로그, 플레이스, 카페, 인스타그램 통합 마케팅을 대행하는 회사의 온라인 브랜드를 구축.

---

## 2026-06-08

### 1단계 — 환경 세팅

- GitHub 리포지토리 `HalinaCho/rest02` 클론
- `create-react-app`으로 React 프로젝트 초기화
- 추가 패키지 설치: `react-router-dom`, `react-icons`
- 프로젝트 디렉토리 구조 설계

```
src/
├── components/   # Header, Footer, Hero, Services, WhyUs, Process, CtaBanner
├── pages/        # Home, About, Services, Contact
├── styles/       # variables.css (디자인 토큰)
└── assets/
```

---

### 2단계 — 디자인 시스템 구성

**컬러 팔레트 1차 (오렌지/옐로우 계열)**
- 주 컬러: 다크블루 `#0a1628`, 로열블루 `#1a56db`
- 포인트: 오렌지 `#f97316`, 옐로우 `#fbbf24`

**컬러 팔레트 2차 리뉴얼 (틸/시안 계열)**
- 오렌지·옐로우가 병의원 마케팅 회사 정체성과 맞지 않는다는 피드백 반영
- 포인트를 틸 `#0891b2` + 시안 `#22d3ee`로 전면 교체
- 배경 강조용 `--cyan-light: #e0f7fa` 추가
- 전체 CSS 파일 색상 변수 일괄 업데이트

---

### 3단계 — 컴포넌트 개발

#### Header
- 고정(fixed) 헤더, 스크롤 50px 이상 시 다크블루 배경으로 전환
- 로고: `D` 마크 + `닥브매` (abbr) + `닥터스 브랜드 매니저` 풀네임 이중 구성
- 반응형 햄버거 메뉴 (900px 이하 슬라이드 패널)

#### Hero
- 풀스크린 다크 그라데이션 배경
- **회사 풀네임 "닥터스 브랜드 매니저"를 최상단 가장 크게** 배치 (3.6rem)
- eyebrow 라인: `닥브매` 뱃지 + `Doctor's Brand Manager` 영문
- 서브 태그라인 + 스카이블루→시안 그라데이션 텍스트 강조
- 배경 블롭 효과 (블루 + 틸)

#### Services (컴포넌트)
- 4대 서비스 카드: 네이버 블로그, 플레이스, 카페, 인스타그램
- 호버 시 상단 틸 보더 + 카드 부유 효과

#### WhyUs
- 좌측 텍스트 + 우측 2×2 카드 그리드 레이아웃
- 4가지 강점: 전문성, 데이터 분석, 의료법규 준수, 빠른 피드백

#### Process
- 다크 배경 위 4단계 프로세스 (상담→전략→제작→분석)
- 단계 연결 라인 + 틸 그라데이션 번호 버블

#### CtaBanner
- 틸→로열블루 그라데이션 배경
- 화이트 버튼으로 대비 강조

#### Footer
- 4컬럼 그리드 (브랜드 / 서비스 / 회사 / 연락처)
- `닥브매` 약칭 + `닥터스 브랜드 매니저` 풀네임 이중 표기

---

### 4단계 — 페이지 개발

#### Home (`/`)
Hero → Services → WhyUs → Process → CtaBanner 섹션 조합

#### About (`/about`)
- 회사 스토리 텍스트 (창업 배경, 타겟 진료과)
- 대표자 프로필 카드: **조하령** / 병의원 비즈니스 7년 이상 / 마케팅 PM 출신
- 핵심 가치 4개 (전문성·브랜딩·투명성·신뢰)

#### Services (`/services`)
3단계 패키지 구성:

| 플랜 | 채널 | 비고 |
|---|---|---|
| 케어 플랜 (BASIC) | 블로그 + 플레이스 | 2채널 |
| 그로스 플랜 (STANDARD) | 블로그 + 플레이스 + 카페 | 3채널, "가장 인기" 배지 |
| 브랜드 플랜 (PREMIUM) | 전 채널 4개 + 인스타 광고 | 풀 패키지 |

- 채널별 상세 설명 섹션 추가
- 가격은 추후 업데이트 예정 (placeholder 처리)

#### Contact (`/contact`)
- 상담 신청 폼 (성함, 병원명, 연락처, 관심 서비스, 문의 내용)
- 제출 후 성공 메시지 전환

---

### 5단계 — GitHub Pages 배포

**패키지 설정**
```json
"homepage": "https://HalinaCho.github.io/rest02",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build --dotfiles"
}
```

**라우터 변경**
- `BrowserRouter` → `HashRouter`
- GitHub Pages는 서브경로 직접 접근 시 404 발생 → HashRouter로 해결
- URL 형태: `https://halinacho.github.io/rest02/#/about`

**트러블슈팅 — 첫 배포 후 빈 화면**
- 원인: `.nojekyll` 파일 누락
- GitHub Pages는 기본적으로 Jekyll을 통해 사이트를 처리하며, `.nojekyll` 없으면 JS/CSS가 차단될 수 있음
- 해결: `public/.nojekyll` 생성 + `gh-pages --dotfiles` 플래그 추가 후 재배포

---

### 6단계 — SEO / SNS 공유 최적화

#### 파비콘 (`public/favicon.svg`)
- SVG 형식으로 제작 → 모든 해상도에서 선명
- 디자인: 다크블루→틸 그라데이션 라운드 사각형 + 흰색 **D** 로고
- `manifest.json` 앱명·테마컬러 업데이트 (`short_name: 닥브매`)

#### Open Graph 메타태그 (`public/index.html`)
```html
<html lang="ko">
<meta property="og:title"       content="닥터스 브랜드 매니저" />
<meta property="og:site_name"   content="닥터스 브랜드 매니저" />
<meta property="og:description" content="개원병의원 전문 온라인 마케팅 대행사" />
<meta property="og:url"         content="https://halinacho.github.io/rest02" />
<meta property="og:type"        content="website" />
<meta property="og:locale"      content="ko_KR" />
<meta property="og:image"       content=".../og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height"content="630" />
<meta name="twitter:card"       content="summary" />
<meta name="twitter:image"      content=".../og-image.png" />
```

#### OG 이미지 (`public/og-image.png`)
- 크기: 1200×630px PNG
- 생성 방식: `scripts/generate-og.js` — SVG 디자인 → `sharp` 라이브러리로 PNG 변환
- 구성 요소:
  - 다크네이비 그라데이션 배경 + 격자 패턴
  - D 로고 마크 + 회사명·닥브매 뱃지·영문명
  - 태그라인 (그라데이션 텍스트)
  - 서비스 채널 태그 4개
  - 우측 주요 통계 (7+ 경험 / 4채널 / 5진료과)
  - 하단 블루→틸 포인트 바
- OG 이미지 재생성 방법: `node scripts/generate-og.js`

---

## 회사 정보 요약

| 항목 | 내용 |
|---|---|
| 회사명 | 닥터스 브랜드 매니저 |
| 약칭 | 닥브매 |
| 영문 | Doctor's Brand Manager |
| 설립일 | 2026년 6월 1일 |
| 대표 | 조하령 |
| 서비스 | 네이버 블로그·플레이스·카페, 인스타그램 마케팅 대행 |
| 타겟 | 안과, 피부과, 한의원, 치과, 성형외과 등 개원병의원 |

---

## 기술 스택

| 구분 | 기술 |
|---|---|
| 프레임워크 | React 19 (Create React App) |
| 라우팅 | react-router-dom v7 (HashRouter) |
| 아이콘 | react-icons v5 |
| 스타일 | 컴포넌트별 CSS + CSS 변수 (design token) |
| 이미지 생성 | sharp v0.34 (SVG → PNG) |
| 배포 | GitHub Pages + gh-pages v6 |

---

## 남은 작업 (TODO)

- [ ] 패키지 가격 확정 후 Services 페이지 업데이트
- [ ] 대표자 프로필 사진 추가 (About 페이지)
- [ ] 연락처 정보 (전화번호, 이메일, 주소) 확정 후 반영
- [ ] Portfolio 페이지 제작
- [ ] Blog 페이지 제작
- [ ] OG 이미지 디자인 최종 확정 후 재생성
