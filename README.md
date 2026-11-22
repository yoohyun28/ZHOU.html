# AI 스마트워크 P4 개인 포트폴리오 웹사이트

> **프로젝트명**: AI 기반 신선식품 수요 예측 및 스마트 발주 최적화 (유통기한별 동적 할인 전략을 중심으로)  
> **기술 스택**: HTML5, CSS3, Vanilla JavaScript (외부 프레임워크 빌드 없는 순수 정적 웹사이트)  
> **실행 환경**: 로컬 브라우저 / 로컬 HTTP 서버 / 온라인 정적 호스팅 (GitHub Pages, Netlify 등)

---

## 1. 프로젝트 개요

본 웹사이트는 AI 머신러닝(HistGradientBoosting) 수요 예측과 Newsvendor 발주 최적화, 그리고 유통기한별 동적 할인 PoC를 융합하여 신선식품의 폐기율(9.79%)과 품절률(2.38%) 상충관계를 해결한 연구 결과물을 인터랙티브하게 전달하는 개인 포트폴리오 사이트입니다.

### 핵심 성공 지표 및 정합성 보장
- **과거 실측 지표**: 폐기율 9.79%, 품절률 2.38%, 총 경제 손실 약 12.52억 원 (관측치)
- **AI 수요 예측 모델**: 6월 WAPE 18.66% → **12.75%** 달성 (5.91%p 오차 개선)
- **단일기간 모의평가 (정책 B)**: 미판매 잔량 **−63.6%**, 모의 순이익 **+15.24%**, 품절 수량 **+14.7% 증가**
- **상충관계 및 보완 제안**: 품절 수량 증가를 투명하게 공개하고, 카테고리별 품절 상한선(예: 3%)을 제약조건으로 부과하는 **제약형 스마트 발주 모델**을 보완책으로 제시

---

## 2. 디렉터리 구조

```text
d:\website/
├─ index.html                     # 메인 포트폴리오 한 페이지 웹사이트
├─ website-config.js              # 개인 정보 및 온라인 E-book URL 설정 파일
├─ website-config.example.js      # 설정 예시 파일
├─ asset_inventory.md             # 실제 파일과 웹사이트 간 자산 매핑 문서
├─ README.md                      # 프로젝트 실행 및 배포 가이드
├─ css/
│  └─ style.css                   # 딥네이비·화이트·청록 기업형 반응형 스타일
├─ js/
│  └─ main.js                     # 갤러리 탭, 라이트박스, E-book 전환, 내비게이션
└─ assets/
   ├─ images/
   │  ├─ report-cover.png         # 최종 승인 보고서 공식 표지 이미지
   │  └─ figures/                 # 10종 고해상도 분석 그래프 (Figure 01~10)
   │     ├─ figure-01.png ~ figure-10.png
   ├─ reports/
   │  ├─ P4_final_report.pdf      # 최종 보고서 원본 PDF (25페이지, 2.0MB)
   │  └─ P4_final_report.docx     # 최종 보고서 원본 워드 문서 (1.5MB)
   └─ motion/
      └─ index.html               # 30초 음성 완주형 모션 애니메이션 (단독 실행 지원)
```

---

## 3. 로컬 실행 방법 (강의실 / 발표용)

본 웹사이트는 별도의 `npm install`이나 빌드 과정 없이 바로 실행할 수 있는 순수 정적 웹사이트입니다.

### 방법 A: 로컬 HTTP 서버 실행 (권장)
브라우저 보안 정책(CORS 및 로컬 파일 접근 제한) 없이 TTS 및 모든 임베드 기능을 원활하게 사용하려면 파이썬 내장 서버를 권장합니다.

```bash
# 1. 터미널에서 website 폴더로 이동
cd d:\website

# 2. 로컬 웹 서버 실행 (Python 3 기준)
python -m http.server 8000
```
- 브라우저를 열고 `http://localhost:8000` 에 접속합니다.

### 방법 B: 브라우저에서 직접 열기 (더블 클릭)
- `d:\website\index.html` 파일을 크롬, 엣지 등 브라우저로 더블 클릭하여 즉시 확인 가능합니다.
- 사이트 내부의 모든 경로는 상대 경로(`./`)로 연결되어 있어 오프라인 환경에서도 문제없이 로드됩니다.

---

## 4. 온라인 E-book 연동 방법

현재는 URL이 임의로 생성되지 않고 **안내형 플레이스홀더**로 구현되어 있으며, 버튼 클릭 시 로컬 PDF 직접 뷰어로 즉시 전환 가능합니다. 온라인 플립북 서비스 연동은 다음과 같이 1분 만에 완료할 수 있습니다.

1. 로컬의 `assets/reports/P4_final_report.pdf`를 다운로드합니다.
2. [Heyzine](https://heyzine.com) 또는 [PubHTML5](https://pubhtml5.com) 등 무료 플립북 변환 서비스에 업로드합니다.
3. 생성된 iframe 임베드 주소 및 공유 링크를 `website-config.js`에 입력합니다:

```javascript
// website-config.js
const WEBSITE_CONFIG = {
  author: {
    name: "홍길동",
    major: "산업공학과 / 데이터사이언스",
    // ...
  },
  ebook: {
    embedUrl: "https://heyzine.com/flip-book/YOUR_FLIPBOOK_ID",  // 여기에 입력
    publicUrl: "https://heyzine.com/flip-book/YOUR_FLIPBOOK_ID", // 새 창 보기 링크
    pdfPath: "./assets/reports/P4_final_report.pdf",
    docxPath: "./assets/reports/P4_final_report.docx"
  }
};
```
- 저장 후 새로고침하면 사이트의 E-book 영역에 종이 넘김 효과를 지원하는 플립북이 즉시 임베드됩니다.

---

## 5. 온라인 무료 배포 가이드

### GitHub Pages 배포
1. 본 폴더(`d:\website`) 내용을 본인의 GitHub 저장소(예: `p4-portfolio`)에 푸시합니다.
2. 저장소의 `Settings` > `Pages` 메뉴로 이동합니다.
3. `Branch`를 `main` 또는 `master`로 선택하고 `/ (root)`를 지정한 뒤 `Save`를 누르면 수 초 내에 `https://<username>.github.io/<repo>/` 주소로 배포됩니다.

### Netlify 배포
1. [Netlify Drop](https://app.netlify.com/drop)에 접속합니다.
2. `d:\website` 폴더 전체를 드래그 앤 드롭하면 즉시 전 세계 CDN에 배포되며 고유 URL이 생성됩니다.

---

## 6. 품질 및 기능 검증 결과

1. **상대 경로 정합성**: 모든 이미지, 리포트, 모션 애니메이션이 상대 경로(`assets/...`) 및 원본 폴더 백업 폴백(`charts/...`)을 지원하여 깨짐 없음 확인.
2. **반응형 디자인**: 1920px(데스크톱 프로젝터), 1024px(태블릿), 375px(모바일) 전 화면 크기에서 레이아웃 깨짐 없음.
3. **접근성 및 키보드 제어**: 차트 확대 모달에서 `ESC`, 좌/우 화살표 키보드 내비게이션 완벽 지원.
4. **오프라인 발표 보장**: 인터넷이 없는 강의실에서도 `로컬 PDF 직접 보기` 기능으로 보고서 전체를 시연 가능.
