import type {SkillCategory} from "../types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Language",
    icon: "code",
    items: [
      { name: "TypeScript", bgColor: "#4C7DD6" },
      { name: "JavaScript", textColor: "var(--gray-900)", bgColor: "#E0D25C" },
      { name: "Python", bgColor: "#4B7BA5" },
      { name: "Java", bgColor: "#C0503C" },
      { name: "Kotlin", bgColor: "#A45FD6" },
    ],
  },
  {
    category: "Frontend",
    icon: "html",
    items: [
      { name: "Next.js / React", bgColor: "#1A1A1A" },
      { name: "Zustand", bgColor: "#4A4A4A" },
      { name: "Recoil", bgColor: "#5B8FF0" },
      { name: "React-Query", bgColor: "#E0637A" },
      { name: "Apollo-Client", bgColor: "#2E2350" },
      { name: "React-Hook-Form", bgColor: "#0E1E3D" },
      { name: "Sass", bgColor: "#C56A9E" },
      { name: "Tailwind CSS", bgColor: "#7ECBF0" },
      { name: "Emotion", bgColor: "#B44FA8" },
      { name: "Vite", bgColor: "#8B7FE0" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      { name: "Django", bgColor: "#1E3D2B" },
      { name: "Spring (Boot)", bgColor: "#8CB86E" },
      { name: "Gradle", bgColor: "#1B2A3D" },
      { name: "Firebase", textColor: "var(--gray-900)", bgColor: "#F0C93D" },
      { name: "Supabase", bgColor: "#5FAE8C" },
    ],
  },
];