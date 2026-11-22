# P4 포트폴리오 웹사이트 기능 및 파일 검증 스크립트

$ErrorActionPreference = "Stop"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " 1. 필수 정적 파일 존재 여부 검사" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

$requiredFiles = @(
    "index.html",
    "website-config.js",
    "website-config.example.js",
    "README.md",
    "asset_inventory.md",
    "css/style.css",
    "js/main.js",
    "assets/images/report-cover.png",
    "assets/reports/P4_final_report.pdf",
    "assets/reports/P4_final_report.docx",
    "assets/motion/index.html",
    "assets/images/figures/figure-01.png",
    "assets/images/figures/figure-02.png",
    "assets/images/figures/figure-03.png",
    "assets/images/figures/figure-04.png",
    "assets/images/figures/figure-05.png",
    "assets/images/figures/figure-06.png",
    "assets/images/figures/figure-07.png",
    "assets/images/figures/figure-08.png",
    "assets/images/figures/figure-09.png",
    "assets/images/figures/figure-10.png"
)

$missingCount = 0
foreach ($f in $requiredFiles) {
    if (Test-Path $f) {
        $len = (Get-Item $f).Length
        Write-Host " [PASS] $f ($([math]::Round($len/1024, 1)) KB)" -ForegroundColor Green
    } else {
        Write-Host " [FAIL] 누락된 파일: $f" -ForegroundColor Red
        $missingCount++
    }
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host " 2. HTML 콘텐츠 및 핵심 수치 정합성 검사" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

$html = Get-Content "index.html" -Raw -Encoding UTF8

$checks = @(
    @{ Pattern = "9.79%"; Label = "과거 실측 폐기율 9.79%" },
    @{ Pattern = "2.38%"; Label = "과거 실측 품절률 2.38%" },
    @{ Pattern = "12.52억"; Label = "경제적 손실 12.52억 원" },
    @{ Pattern = "12.75%"; Label = "AI 모델 6월 WAPE 12.75%" },
    @{ Pattern = "63.6%"; Label = "정책 B 미판매 잔량 63.6% 감소" },
    @{ Pattern = "15.24%"; Label = "정책 B 모의이익 15.24% 증가" },
    @{ Pattern = "14.7%"; Label = "정책 B 품절 수량 14.7% 증가 (경고 표시)" },
    @{ Pattern = "assets/motion/index.html"; Label = "30초 모션 애니메이션 임베드" },
    @{ Pattern = "assets/reports/P4_final_report.pdf"; Label = "최종 보고서 PDF 다운로드 링크" },
    @{ Pattern = "assets/images/report-cover.png"; Label = "공식 표지 이미지 연결" }
)

foreach ($c in $checks) {
    if ($html -match [regex]::Escape($c.Pattern)) {
        Write-Host " [PASS] 수치/요소 확인: $($c.Label)" -ForegroundColor Green
    } else {
        Write-Host " [FAIL] 누락된 수치/요소: $($c.Label)" -ForegroundColor Red
        $missingCount++
    }
}

if ($missingCount -eq 0) {
    Write-Host "`n>>> 모든 정적 자산 및 콘텐츠 검증 통과 (100% PASS) <<<" -ForegroundColor Green
} else {
    Write-Host "`n>>> $missingCount 개 검증 실패 <<<" -ForegroundColor Red
    exit 1
}
