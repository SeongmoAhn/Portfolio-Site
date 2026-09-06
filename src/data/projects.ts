import type {Project} from "../types";
import {allSkills} from "./skills";

export const projectItems: Project[] = [
  {
    name: "포트폴리오 개발",
    period: "2026.09 -",
    summary: "나를 소개하는 포트폴리오 사이트",
    role: "프론트엔드 개발",
    description: ["TypeScript를 사용한 사이트", "React를 사용한 사이트", "원스크롤 + 라우팅을 이용한 페이지 구성"],
    techStack: [
      allSkills.find((s) => s.name === "TypeScript")!,
      allSkills.find((s) => s.name === "Next.js / React")!,
    ],
    readmePath: "/readmes/test.md",
  },
  {
    name: "포트폴리오 개발",
    period: "2026.09 -",
    summary: "나를 소개하는 포트폴리오 사이트",
    role: "프론트엔드 개발",
    description: ["TypeScript를 사용한 사이트", "React를 사용한 사이트", "원스크롤 + 라우팅을 이용한 페이지 구성"],
    techStack: [
      allSkills.find((s) => s.name === "Java")!,
      allSkills.find((s) => s.name === "Django")!,
      allSkills.find((s) => s.name === "Supabase")!,
    ],
    readmePath: "/readmes/test.md",
  },
  {
    name: "실시간 채팅 서비스",
    period: "2025.03 - 2025.06",
    summary: "친구와 실시간으로 대화할 수 있는 채팅 서비스",
    role: "백엔드 개발",
    description: ["WebSocket을 이용한 실시간 메시지 전송", "Spring Boot 기반 REST API 설계", "Firebase를 이용한 푸시 알림 구현"],
    techStack: [
      allSkills.find((s) => s.name === "Kotlin")!,
      allSkills.find((s) => s.name === "Spring (Boot)")!,
      allSkills.find((s) => s.name === "Firebase")!,
    ],
    readmePath: "/readmes/test.md",
  },
];
