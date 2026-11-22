/**
 * P4 포트폴리오 메인 스크립트 (js/main.js)
 * 인터랙션: 차트 갤러리 탭 필터링, 라이트박스 모달, E-book 뷰어 모드 전환, 내비게이션 스크롤
 */

// 10개 차트 데이터셋 (계획서 및 실제 파일 정합성 준수)
const CHARTS_DATA = [
  {
    id: 1,
    figNum: "그림 01",
    title: "카테고리별 폐기율 및 품절률 현황",
    category: "status",
    categoryLabel: "과제① 현황 진단",
    badgeType: "obs",
    badgeText: "관측 실측",
    imgSrc: "./assets/images/figures/figure-01.png",
    fallbackSrc: "./charts/01_카테고리별_폐기율_품절률.png",
    unit: "비율 (%)",
    source: "교수자 제공 가상 데이터 (2026.01~06, 10,860행)",
    description: "전체 평균 폐기율은 9.79%, 품절률은 2.38%로 관측되었습니다. 유통기한이 짧은 신선 채소 및 과일 카테고리에서 상대적으로 높은 폐기율이 집중되는 구조를 보입니다."
  },
  {
    id: 2,
    figNum: "그림 02",
    title: "카테고리별 경제적 손실 규모 분석",
    category: "status",
    categoryLabel: "과제① 현황 진단",
    badgeType: "obs",
    badgeText: "관측 실측",
    imgSrc: "./assets/images/figures/figure-02.png",
    fallbackSrc: "./charts/02_카테고리별_경제적_손실.png",
    unit: "금액 (원)",
    source: "과거 실측 폐기원가 및 품절 기회손실 집계",
    description: "관측 기간 동안 확인된 총 경제적 손실은 약 12.52억 원입니다. 폐기 원가 손실이 품절 기회손실보다 더 큰 비중을 차지하여, 폐기 감소가 수익성 개선의 최우선 과제임을 시사합니다."
  },
  {
    id: 3,
    figNum: "그림 03",
    title: "물류센터 × 카테고리 손실 히트맵",
    category: "status",
    categoryLabel: "과제① 현황 진단",
    badgeType: "obs",
    badgeText: "관측 실측",
    imgSrc: "./assets/images/figures/figure-03.png",
    fallbackSrc: "./charts/03_센터별_카테고리_손실_히트맵.png",
    unit: "손실액 밀도 (원)",
    source: "수도권/영남권 센터별 카테고리 교차 집계",
    description: "수도권 센터와 영남권 센터 간의 카테고리별 손실 비중을 교차 분석한 결과, 물동량이 큰 수도권 센터에서 신선 채소 및 육류의 절대 손실 규모가 두드러지게 나타났습니다."
  },
  {
    id: 4,
    figNum: "그림 04",
    title: "프로모션 및 명절별 기존 시스템 예측 오차",
    category: "forecast",
    categoryLabel: "과제② 기존 예측 분석",
    badgeType: "obs",
    badgeText: "기존 시스템",
    imgSrc: "./assets/images/figures/figure-04.png",
    fallbackSrc: "./charts/04_프로모션_명절별_예측오차.png",
    unit: "WAPE (%)",
    source: "기존 룰 기반(+12% 일괄 가산) 시스템 오차",
    description: "기존 시스템은 평시 대비 대규모 프로모션이나 명절 연휴 기간에 급격한 예측 오차 폭증을 보였습니다. 정적인 가산 룰이 비정형 수요 변동성을 흡수하지 못하는 한계를 입증합니다."
  },
  {
    id: 5,
    figNum: "그림 05",
    title: "기존 시스템의 예측 편향(Bias) 분포",
    category: "forecast",
    categoryLabel: "과제② 기존 예측 분석",
    badgeType: "obs",
    badgeText: "기존 시스템",
    imgSrc: "./assets/images/figures/figure-05.png",
    fallbackSrc: "./charts/05_기존_시스템_예측_편향.png",
    unit: "오차 분포 (수량)",
    source: "기존 시스템 예측치 - 실제 수요 차이",
    description: "예측 편향이 지속적으로 양(+)의 영역에 치우쳐 있어 상시적 과잉 발주가 발생하고 있었습니다. 이로 인해 만성적 미판매 재고 누적 및 유통기한 초과 폐기가 유발되었습니다."
  },
  {
    id: 6,
    figNum: "그림 06",
    title: "AI 예측 모델 후보군 성능 비교",
    category: "forecast",
    categoryLabel: "과제③ AI 예측 모델링",
    badgeType: "sim",
    badgeText: "AI 모델 검증",
    imgSrc: "./assets/images/figures/figure-06.png",
    fallbackSrc: "./charts/06_예측모델_성능비교.png",
    unit: "WAPE (%) / MAE (개)",
    source: "6월 테스트셋 (WAPE/MAE 단위 상이 주의)",
    description: "HistGradientBoosting, LightGBM, Random Forest 등을 비교한 결과, 기온 변수를 제외한 HistGBM 모델이 6월 WAPE 12.75%를 기록하여 기존 18.66% 대비 5.91%p 오차를 획기적으로 개선했습니다."
  },
  {
    id: 7,
    figNum: "그림 07",
    title: "6월 일별 실제 수요와 AI 예측 추이 비교",
    category: "forecast",
    categoryLabel: "과제③ AI 예측 모델링",
    badgeType: "sim",
    badgeText: "AI 모델 검증",
    imgSrc: "./assets/images/figures/figure-07.png",
    fallbackSrc: "./charts/07_일별_실제수요와_예측.png",
    unit: "일별 수요량 (개)",
    source: "선택 AI 모델 (HistGBM) 6월 검증 결과",
    description: "요일별 주기성과 이벤트 변동 구간에서 AI 모델이 실제 수요의 피크와 저점을 정밀하게 추종함을 확인할 수 있습니다."
  },
  {
    id: 8,
    figNum: "그림 08",
    title: "SKU별 Newsvendor 최적 발주량 비교",
    category: "ordering",
    categoryLabel: "과제④ 스마트 발주 최적화",
    badgeType: "sim",
    badgeText: "최적화 모델",
    imgSrc: "./assets/images/figures/figure-08.png",
    fallbackSrc: "./charts/08_Newsvendor_발주량_비교.png",
    unit: "발주 수량 (개)",
    source: "검증 구간 잔차 분포 및 마진·원가 한계 비용",
    description: "과잉 비용(Co: 폐기원가)과 부족 비용(Cu: 품절기회손실)의 임계확률(Critical Fractile)에 따라 SKU별 마진과 잔차 분포를 결합하여 최적 안전 재고 발주량을 산출했습니다."
  },
  {
    id: 9,
    figNum: "그림 09",
    title: "정책별 손실과 모의 이익 비교 (정책 B 성과)",
    category: "simulation",
    categoryLabel: "과제⑤ 정책 시뮬레이션",
    badgeType: "sim",
    badgeText: "단일기간 모의",
    imgSrc: "./assets/images/figures/figure-09.png",
    fallbackSrc: "./charts/09_정책별_손실과_이익_비교.png",
    unit: "변화율 (%) / 금액",
    source: "6월 단일기간 모의평가 시뮬레이션",
    description: "정책 B 적용 시 단일기간 시뮬레이션에서 미판매 잔량이 63.6% 감소하고 모의 순이익이 15.24% 증가했습니다. 반면 품절 수량이 14.7% 증가하는 상충관계(Trade-off)가 관측되어 제약형 발주의 보완이 필요함을 확인했습니다."
  },
  {
    id: 10,
    figNum: "그림 10",
    title: "유통기한별 동적 할인 민감도 분석 (PoC)",
    category: "simulation",
    categoryLabel: "확장·가설 검증",
    badgeType: "poc",
    badgeText: "가정 기반 PoC",
    imgSrc: "./assets/images/figures/figure-10.png",
    fallbackSrc: "./charts/10_동적할인_민감도.png",
    unit: "회수율 / 매출 변화 (%)",
    source: "잔여일수별 할인율·전환율 가정 기반 시뮬레이션",
    description: "유통기한 D-2일 15%, D-1일 30%, 당일 50%의 단계별 동적 할인을 가정한 PoC 분석입니다. 가격 탄력성과 구매 전환율 민감도에 따라 폐기 잔량을 40~60% 추가 감축할 수 있음을 모의 검증했습니다."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initAppConfig();
  initNavigation();
  initChartsGallery();
  initLightbox();
  initEbookSection();
  initBackToTop();
});

/**
 * 1. 설정 파일(website-config.js) 적용
 */
function initAppConfig() {
  const cfg = (typeof WEBSITE_CONFIG !== "undefined") ? WEBSITE_CONFIG : {
    author: { name: "[표시 이름]", major: "[전공/소속]" },
    ebook: { embedUrl: "", publicUrl: "", pdfPath: "./assets/reports/P4_final_report.pdf", docxPath: "./assets/reports/P4_final_report.docx" }
  };

  // 작성자 정보 바인딩
  const nameEl = document.getElementById("profileName");
  const majorEl = document.getElementById("profileMajor");
  const bioEl = document.getElementById("profileBio");
  
  if (nameEl) nameEl.textContent = cfg.author.name || "[표시 이름]";
  if (majorEl) majorEl.textContent = cfg.author.major || "[전공 / 소속]";
  if (bioEl && cfg.author.bio) bioEl.textContent = cfg.author.bio;

  // 다운로드 버튼 링크 동기화
  const pdfDownloadBtns = document.querySelectorAll(".btn-download-pdf");
  const docxDownloadBtns = document.querySelectorAll(".btn-download-docx");

  const pdfUrl = (cfg.ebook && cfg.ebook.pdfPath) ? cfg.ebook.pdfPath : "./assets/reports/P4_final_report.pdf";
  const docxUrl = (cfg.ebook && cfg.ebook.docxPath) ? cfg.ebook.docxPath : "./assets/reports/P4_final_report.docx";

  pdfDownloadBtns.forEach(btn => {
    btn.setAttribute("href", pdfUrl);
    btn.setAttribute("download", "P4_신선식품_수요예측_발주최적화_최종보고서.pdf");
  });

  docxDownloadBtns.forEach(btn => {
    btn.setAttribute("href", docxUrl);
    btn.setAttribute("download", "P4_신선식품_수요예측_발주최적화_최종보고서.docx");
  });
}

/**
 * 2. 내비게이션 & 스크롤 감지
 */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // 헤더 스크롤 그림자
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // 섹션 감지 및 활성 메뉴 업데이트
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });

  // 모바일 메뉴 토글
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

/**
 * 3. 10개 차트 갤러리 렌더링 & 탭 필터링
 */
function initChartsGallery() {
  const grid = document.getElementById("chartsGrid");
  const tabBtns = document.querySelectorAll(".tab-btn");
  if (!grid) return;

  function renderCharts(category = "all") {
    grid.innerHTML = "";
    const filtered = category === "all" ? CHARTS_DATA : CHARTS_DATA.filter(c => c.category === category);

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "chart-card";
      card.dataset.id = item.id;

      let badgeClass = "badge-obs";
      if (item.badgeType === "sim") badgeClass = "badge-sim";
      if (item.badgeType === "poc") badgeClass = "badge-poc";

      card.innerHTML = `
        <div class="chart-thumb-wrapper">
          <img src="${item.imgSrc}" alt="${item.title}" loading="lazy" onerror="this.src='${item.fallbackSrc}'; this.onerror=null;">
          <div class="chart-badge-overlay">
            <span class="badge ${badgeClass}">${item.badgeText}</span>
          </div>
          <div class="chart-zoom-icon" title="크게 보기">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </div>
        </div>
        <div class="chart-body">
          <div class="chart-meta-row">
            <span class="chart-fig-num">${item.figNum}</span>
            <span>${item.categoryLabel}</span>
          </div>
          <h4 class="chart-title">${item.title}</h4>
          <p class="chart-desc">${item.description}</p>
          <div class="chart-unit-box">
            <span><strong>단위:</strong> ${item.unit}</span>
            <span>클릭하여 확대</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openLightbox(item.id));
      grid.appendChild(card);
    });
  }

  // 탭 클릭 이벤트
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetCat = btn.dataset.category || "all";
      renderCharts(targetCat);
    });
  });

  renderCharts("all");
}

/**
 * 4. 차트 라이트박스 (확대 보기, 키보드 네비게이션)
 */
let currentLightboxIndex = 0;

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");

  if (!modal) return;

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  prevBtn.addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + CHARTS_DATA.length) % CHARTS_DATA.length;
    renderLightboxContent(CHARTS_DATA[currentLightboxIndex]);
  });

  nextBtn.addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % CHARTS_DATA.length;
    renderLightboxContent(CHARTS_DATA[currentLightboxIndex]);
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
}

function openLightbox(id) {
  const modal = document.getElementById("lightboxModal");
  const foundIndex = CHARTS_DATA.findIndex(c => c.id === id);
  if (foundIndex === -1) return;

  currentLightboxIndex = foundIndex;
  renderLightboxContent(CHARTS_DATA[currentLightboxIndex]);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderLightboxContent(item) {
  const figNumEl = document.getElementById("lightboxFigNum");
  const titleEl = document.getElementById("lightboxTitle");
  const imgEl = document.getElementById("lightboxImg");
  const descEl = document.getElementById("lightboxDesc");
  const unitEl = document.getElementById("lightboxUnit");
  const sourceEl = document.getElementById("lightboxSource");
  const categoryEl = document.getElementById("lightboxCategory");

  if (figNumEl) figNumEl.textContent = item.figNum;
  if (titleEl) titleEl.textContent = item.title;
  if (imgEl) {
    imgEl.src = item.imgSrc;
    imgEl.onerror = () => { imgEl.src = item.fallbackSrc; };
  }
  if (descEl) descEl.textContent = item.description;
  if (unitEl) unitEl.textContent = item.unit;
  if (sourceEl) sourceEl.textContent = item.source;
  if (categoryEl) categoryEl.textContent = item.categoryLabel;
}

/**
 * 5. E-book 섹션: 온라인 플립북 임베드 또는 로컬 PDF 전환
 */
function initEbookSection() {
  const cfg = (typeof WEBSITE_CONFIG !== "undefined") ? WEBSITE_CONFIG : {};
  const embedUrl = cfg.ebook && cfg.ebook.embedUrl ? cfg.ebook.embedUrl.trim() : "";
  const publicUrl = cfg.ebook && cfg.ebook.publicUrl ? cfg.ebook.publicUrl.trim() : "";
  const pdfPath = cfg.ebook && cfg.ebook.pdfPath ? cfg.ebook.pdfPath : "./assets/reports/P4_final_report.pdf";

  const placeholderBox = document.getElementById("ebookPlaceholder");
  const iframeBox = document.getElementById("ebookIframeBox");
  const iframeEl = document.getElementById("ebookIframe");
  const openNewTabBtn = document.getElementById("btnEbookNewTab");
  const toggleLocalPdfBtn = document.getElementById("btnToggleLocalPdf");
  const statusBadge = document.getElementById("ebookStatusBadge");

  let showingLocalPdf = false;

  // 온라인 URL이 실제로 입력되어 있는 경우
  if (embedUrl) {
    if (placeholderBox) placeholderBox.style.display = "none";
    if (iframeBox) iframeBox.style.display = "block";
    if (iframeEl) iframeEl.src = embedUrl;
    if (statusBadge) {
      statusBadge.textContent = "온라인 플립북 연결됨";
      statusBadge.className = "badge badge-sim";
    }
  } else {
    // URL 미등록 상태: 플레이스홀더 노출
    if (placeholderBox) placeholderBox.style.display = "block";
    if (iframeBox) iframeBox.style.display = "none";
    if (statusBadge) {
      statusBadge.textContent = "온라인 URL 대기중 (플레이스홀더)";
      statusBadge.className = "badge badge-poc";
    }
  }

  // 새 창 열기 버튼
  if (openNewTabBtn) {
    openNewTabBtn.addEventListener("click", (e) => {
      if (publicUrl) {
        window.open(publicUrl, "_blank");
      } else {
        // 온라인 URL이 없을 경우 로컬 PDF 새 창으로 열기 제공
        window.open(pdfPath, "_blank");
      }
    });
  }

  // 로컬 PDF 뷰어 토글 버튼 (오프라인/로컬 발표용)
  if (toggleLocalPdfBtn) {
    toggleLocalPdfBtn.addEventListener("click", () => {
      showingLocalPdf = !showingLocalPdf;
      if (showingLocalPdf) {
        if (placeholderBox) placeholderBox.style.display = "none";
        if (iframeBox) iframeBox.style.display = "block";
        if (iframeEl) iframeEl.src = pdfPath;
        toggleLocalPdfBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          안내 화면으로 전환
        `;
        if (statusBadge) {
          statusBadge.textContent = "로컬 PDF 직접 뷰어 실행중";
          statusBadge.className = "badge badge-obs";
        }
      } else {
        if (!embedUrl) {
          if (placeholderBox) placeholderBox.style.display = "block";
          if (iframeBox) iframeBox.style.display = "none";
          if (iframeEl) iframeEl.src = "";
          if (statusBadge) {
            statusBadge.textContent = "온라인 URL 대기중 (플레이스홀더)";
            statusBadge.className = "badge badge-poc";
          }
        } else {
          if (iframeEl) iframeEl.src = embedUrl;
          if (statusBadge) {
            statusBadge.textContent = "온라인 플립북 연결됨";
            statusBadge.className = "badge badge-sim";
          }
        }
        toggleLocalPdfBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          로컬 PDF 직접 보기 (오프라인 모드)
        `;
      }
    });
  }
}

/**
 * 6. 맨 위로 가기 버튼
 */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
