import type {Project} from "../types";
import {allSkills} from "./skills";

export const projectItems: Project[] = [
  {
    name: "사내 업무 관리 대시보드",
    period: "2025.11 - 2026.02",
    summary: "팀원들의 업무 현황과 일정을 한눈에 관리할 수 있는 협업 대시보드",
    role: "프론트엔드 개발 (팀 4인 중 FE 2인)",
    description: [
      "React-Query를 이용한 서버 상태 관리 및 캐싱 전략 설계",
      "드래그 앤 드롭 기반 칸반 보드 UI 구현",
      "Recoil을 이용한 전역 필터/정렬 상태 관리",
      "Lighthouse 성능 점수 70 → 95로 개선",
    ],
    techStack: [
      allSkills.find((s) => s.name === "TypeScript")!,
      allSkills.find((s) => s.name === "Next.js / React")!,
      allSkills.find((s) => s.name === "React-Query")!,
      allSkills.find((s) => s.name === "Recoil")!,
    ],
    readmePath: "/readmes/test.md",
    githubUrl: "https://github.com/SeongmoAhn",
  },
  {
    name: "중고 거래 플랫폼 리뉴얼",
    period: "2025.06 - 2025.10",
    summary: "지역 기반 중고 거래를 위한 웹 서비스 백엔드 API 개발",
    role: "백엔드 개발",
    description: [
      "Django REST Framework 기반 상품/채팅/거래 API 설계 및 구현",
      "JWT 기반 인증/인가 및 소셜 로그인 연동",
      "Supabase Storage를 이용한 이미지 업로드 최적화",
      "N+1 쿼리 문제 해결로 목록 조회 응답 속도 60% 개선",
    ],
    techStack: [
      allSkills.find((s) => s.name === "Python")!,
      allSkills.find((s) => s.name === "Django")!,
      allSkills.find((s) => s.name === "Supabase")!,
    ],
    readmePath: "/readmes/test.md",
  },
  {
    name: "실시간 채팅 서비스",
    period: "2025.03 - 2025.06",
    summary: "친구와 실시간으로 대화할 수 있는 1:1 및 그룹 채팅 서비스",
    role: "백엔드 개발",
    description: [
      "WebSocket(STOMP)을 이용한 실시간 메시지 전송 구현",
      "Spring Boot 기반 REST API 설계 및 Swagger 문서화",
      "Firebase Cloud Messaging을 이용한 푸시 알림 구현",
      "동시 접속 1,000명 기준 부하 테스트 및 서버 튜닝",
    ],
    techStack: [
      allSkills.find((s) => s.name === "Kotlin")!,
      allSkills.find((s) => s.name === "Spring (Boot)")!,
      allSkills.find((s) => s.name === "Firebase")!,
    ],
    readmePath: "/readmes/test.md",
    githubUrl: "https://github.com/SeongmoAhn",
  },
];
