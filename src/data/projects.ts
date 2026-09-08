import type {Project} from "../types";
import {allSkills} from "./skills";

export const projectItems: Project[] = [
  {
    name: "AI 반도체 자원 풀링을 위한 시공간 통합 관리 아키텍처에 관한 연구",
    period: "2025 · 제6회 한국인공지능학술대회(KAIS)",
    summary: "GPU/NPU 자원을 시간·공간 축으로 쪼개 동적으로 공유하는 자원 관리 아키텍처를 제안한 연구",
    role: "제1저자 (한국전자기술연구원 지능형 IDC 사업단)",
    description: [
      "워크로드 프로파일링으로 Training/Inference/Pre-process 타입과 우선순위 자동 식별",
      "Custom Device Plugin으로 물리 GPU를 쿠버네티스 표준 매니페스트로 요청 가능한 논리 자원으로 분해",
      "시간 공유(Temporal Sharing)와 공간 공유(Spatial Sharing)를 결합한 시공간 통합 공유 엔진 설계",
      "모니터링 데이터 기반으로 공간 분할 비율과 실행 순서를 동적으로 재조정하는 제어 메커니즘 설계",
    ],
    techStack: [
      {name: "Kubernetes", textColor: "#2f5f8a", bgColor: "#e6eef7"},
      {name: "vGPU / vNPU Custom Device Plugin", textColor: "#5b4a8a", bgColor: "#efe9f7"},
      {name: "CXL (향후 확장)", textColor: "#8a5a2f", bgColor: "#f7ece0"},
      {name: "Kernel Scheduling", textColor: "#3f6b4a", bgColor: "#e8f2ea"},
    ],
    pdfUrl: "/papers/ai-semiconductor-pooling.pdf",
    refNote: "과제번호: RS-2025-02220502 (정보통신기획평가원 지원)",
  },
  {
    name: "BMC 성능 최적화를 위한 커널 코드 변경의 효율적인 관리",
    period: "2025 · 스마트미디어저널(SMJ) Vol.14, No.2",
    summary: "BMC 부팅 시 변경된 커널 소스만 골라 전송해 데이터 전송량과 오버헤드를 줄이는 최적화 기법을 제안한 연구",
    role: "공동저자",
    description: [
      "커널 소스 디렉터리 구조를 트리로 기록해 원본과 수정본 비교 시 I/O 비용 최소화",
      "수정된 파일의 경로와 해시값만 저장해 변경 파일을 효율적으로 식별",
      "편집거리(Levenshtein Distance) 알고리즘으로 변경된 줄 단위 diff를 추출·압축",
      "실험 결과 파일 크기 약 33% 감소 효과를 확인",
    ],
    techStack: [
      {name: "BMC", textColor: "#2f5f8a", bgColor: "#e6eef7"},
      {name: "Embedded Linux", textColor: "#5b4a8a", bgColor: "#efe9f7"},
      {name: "Diff Algorithm", textColor: "#3f6b4a", bgColor: "#e8f2ea"},
      {name: "C", textColor: "#8a5a2f", bgColor: "#f7ece0"},
    ],
    pdfUrl: "/papers/bmc-optimization.pdf",
    refNote: "과제번호: 2022-0-00202 (정보통신기획평가원 지원)",
  },
  {
    name: "포트폴리오 웹사이트",
    period: "2026.09 - 진행중",
    summary: "React와 Supabase로 만든 개인 포트폴리오 웹사이트",
    role: "개인 프로젝트 (기획 · 디자인 · 프론트엔드)",
    description: [
      "React Router 기반 About · Experience · Skills · Projects · Contact 섹션과 Archive 페이지 구성",
      "Supabase로 Archive 게시글/답변 작성 · 수정 · 삭제와 비밀번호 기반 권한 검증 구현",
      "CSS Modules로 컴포넌트 단위 스타일을 격리하고 반응형 레이아웃 적용",
      "Vite + TypeScript 빌드 환경 구성",
    ],
    techStack: [
      {name: "React", textColor: "#2f6a8a", bgColor: "#e6f2f7"},
      allSkills.find((s) => s.name === "TypeScript")!,
      {name: "React Router", textColor: "#8a3f5b", bgColor: "#f7e6ec"},
      allSkills.find((s) => s.name === "Supabase")!,
      {name: "Vite", textColor: "#685fa8", bgColor: "#efedfb"},
    ],
    githubUrl: "https://github.com/SeongmoAhn/Portfolio-Site",
  },
];
