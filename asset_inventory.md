# P4 포트폴리오 자산 인벤토리 (Asset Inventory)

본 문서는 `P4_개인포트폴리오_웹사이트_구축계획.md`에 명시된 원본 파일과 웹사이트에서 사용된 자산 간의 매핑 상태를 기록한 문서입니다.

| 항목 | 계획서 요구 자산 | 실제 폴더 내 원본 파일 | 웹사이트 배치 경로 | 상태 및 정합성 |
|---|---|---|---|---|
| **표지 이미지** | 학번 굵기 수정된 최종 표지 | `images/封面表格学号更新至20238004.png` | `assets/images/report-cover.png` | 정상 반영 (표지 미리보기 & 원본 연결) |
| **최종 보고서 PDF** | E-book 변환 및 다운로드용 | `reports/P4_신선식품_수요예측_발주최적화_최종보고서_최종.pdf` | `assets/reports/P4_final_report.pdf` | 정상 반영 (25페이지, 2.0MB 다운로드/뷰어) |
| **최종 보고서 DOCX**| 검증 및 편집 원본 | `reports/P4_신선식품_수요예측_발주최적화_최종보고서_최종.docx`| `assets/reports/P4_final_report.docx`| 정상 반영 (1.5MB 다운로드 제공) |
| **문제 설명 애니메이션**| 16:9 음성 완주형 HTML | `animation/P4_Motion_Effect_30s.html` | `assets/motion/index.html` | 정상 반영 (iframe 임베드 + 단독 실행 지원) |
| **그림 01** | 카테고리별 폐기율·품절률 | `charts/01_카테고리별_폐기율_품절률.png` | `assets/images/figures/figure-01.png` | 정상 반영 (관측 데이터) |
| **그림 02** | 카테고리별 경제적 손실 | `charts/02_카테고리별_경제적_손실.png` | `assets/images/figures/figure-02.png` | 정상 반영 (12.52억 원 손실 분석) |
| **그림 03** | 센터×카테고리 손실 히트맵 | `charts/03_센터별_카테고리_손실_히트맵.png` | `assets/images/figures/figure-03.png` | 정상 반영 (수도권/영남권 센터 분석) |
| **그림 04** | 프로모션·명절별 예측오차 | `charts/04_프로모션_명절별_예측오차.png` | `assets/images/figures/figure-04.png` | 정상 반영 (기존 시스템 한계 진단) |
| **그림 05** | 기존 시스템 예측 편향 | `charts/05_기존_시스템_예측_편향.png` | `assets/images/figures/figure-05.png` | 정상 반영 (+12% 일괄 가산 룰 편향) |
| **그림 06** | AI 모델 성능 비교 | `charts/06_예측모델_성능비교.png` | `assets/images/figures/figure-06.png` | 정상 반영 (HistGBM 12.75% WAPE 채택) |
| **그림 07** | 일별 실제수요와 예측 | `charts/07_일별_실제수요와_예측.png` | `assets/images/figures/figure-07.png` | 정상 반영 (6월 테스트 일별 추종) |
| **그림 08** | Newsvendor 발주량 비교 | `charts/08_Newsvendor_발주량_비교.png` | `assets/images/figures/figure-08.png` | 정상 반영 (임계확률 기반 최적 발주) |
| **그림 09** | 정책별 손실과 이익 비교 | `charts/09_정책별_손실과_이익_비교.png` | `assets/images/figures/figure-09.png` | 정상 반영 (잔량 -63.6%, 품절 +14.7%) |
| **그림 10** | 동적 할인 민감도 분석 | `charts/10_동적할인_민감도.png` | `assets/images/figures/figure-10.png` | 정상 반영 (가정 기반 PoC 시뮬레이션) |
| **온라인 E-book URL** | flipbook iframe URL | 미발급 (사용자 추후 입력 필요) | `website-config.js` | 플레이스홀더 + 로컬 PDF 뷰어로 처리 |
| **개인 프로필 정보** | 이름, 전공, 학번, 메일 | 사용자 미승인 상태 | `website-config.js` | 플레이스홀더 유지 (개인정보 보호 기본 적용) |
