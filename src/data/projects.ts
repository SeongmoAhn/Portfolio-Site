import type {Project} from "../types";
import {allSkills} from "./skills";

export const projectItems: Project[] = [
  {
    name: "포트폴리오 개발",
    period: "2026.09 -",
    summary: "나를 소개하는 포트폴리오 사이트",
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
    description: ["TypeScript를 사용한 사이트", "React를 사용한 사이트", "원스크롤 + 라우팅을 이용한 페이지 구성"],
    techStack: [
      allSkills.find((s) => s.name === "Java")!,
      allSkills.find((s) => s.name === "Django")!,
      allSkills.find((s) => s.name === "Supabase")!,
    ],
    readmePath: "/readmes/test.md",
  },
];
