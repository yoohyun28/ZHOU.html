/**
 * P4 포트폴리오 웹사이트 설정 파일 (website-config.js)
 * 
 * - 개인 정보 및 외부 온라인 E-book(플립북) URL을 설정하는 파일입니다.
 * - 온라인 플립북 서비스(Heyzine, PubHTML5, FlipHTML5 등)에서 발급받은 iframe URL을
 *   아래 ebook.embedUrl에 입력하면 사이트의 E-book 섹션에 인터랙티브 뷰어가 활성화됩니다.
 * - 값이 비어 있는 경우 플레이스홀더 및 로컬 PDF 미리보기 기능이 자동으로 작동합니다.
 */

const WEBSITE_CONFIG = {
  // 개인 소개 정보 (사용자 승인 전에는 플레이스홀더 유지)
  author: {
    name: "[ZHOU YUXUAN]",
    major: "[한림대학교 경영학과]",
    role: "데이터 분석 및 AI 공급망 모델링",
    bio: "데이터 분석과 머신러닝, 생성형 AI 도구를 융합하여 유통·물류 분야의 현실적인 비즈니스 문제를 해결하는 데이터 사이언스 포트폴리오입니다.",
    email: "", // 공개 동의 시 이메일 기재 (예: user@example.com)
    github: "", // 예: https://github.com/username
    showPrivateInfo: false
  },

  // E-book 및 문서 링크 설정
  ebook: {
    // 온라인 플립북 서비스에서 발급받은 iframe embed URL (비어 있으면 플레이스홀더 표시)
    embedUrl: "https://dianzishuyulan.netlify.app/", 
    // 온라인 플립북 새 창 보기 링크 (비어 있으면 안내 모달/로컬 링크 제공)
    publicUrl: "https://dianzishuyulan.netlify.app/", 
    // 로컬 PDF 및 DOCX 상대 경로
    pdfPath: "./assets/reports/P4_final_report.pdf",
    docxPath: "./assets/reports/P4_final_report.docx"
  },

  // 프로젝트 기본 정보
  project: {
    code: "P4",
    title: "AI 기반 신선식품 수요 예측 및 스마트 발주 최적화",
    subtitle: "유통기한별 동적 할인 전략을 중심으로",
    domain: "신선식품 물류 및 공급망 관리 (SCM)",
    datasetRows: "10,860행",
    datasetPeriod: "2026년 1월 ~ 6월 (181일)",
    centers: "2개 물류센터 (수도권 센터, 영남권 센터)",
    skus: "30개 SKU (채소, 과일, 육류, 유제품)",
    disclaimer: "본 프로젝트는 쿠팡 실제 운영 자료가 아닌, 교수자 제공 가상 시나리오 데이터(10,860행)를 바탕으로 수행된 학술 과제입니다."
  }
};
