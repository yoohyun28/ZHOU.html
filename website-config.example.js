/**
 * P4 포트폴리오 웹사이트 설정 예시 파일 (website-config.example.js)
 * 
 * 실제 배포 시 본 파일을 복사하여 website-config.js로 사용하거나
 * website-config.js 파일의 값을 직접 수정하십시오.
 */

const WEBSITE_CONFIG = {
  author: {
    name: "홍길동",
    major: "산업공학과 / 데이터사이언스",
    role: "데이터 분석 및 AI 공급망 모델링",
    bio: "데이터 분석과 머신러닝을 통해 유통·물류 분야의 폐기와 품절 상충관계를 최적화하는 연구를 진행하고 있습니다.",
    email: "student@university.ac.kr",
    github: "https://github.com/example/p4-fresh-food-opt",
    showPrivateInfo: true
  },
  ebook: {
    // 예시: Heyzine 플립북 임베드 URL
    embedUrl: "https://heyzine.com/flip-book/example12345", 
    publicUrl: "https://heyzine.com/flip-book/example12345",
    pdfPath: "./assets/reports/P4_final_report.pdf",
    docxPath: "./assets/reports/P4_final_report.docx"
  },
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
