import type {SkillCategory, SkillTag} from "../types";
import languageIcon from "../assets/icons/lui1.png"
import frontendIcon from "../assets/icons/lui2.png"
import backendIcon from "../assets/icons/lui3.png"

export const skillCategories: SkillCategory[] = [
  {
    category: "Language",
    icon: `${languageIcon}`,
    items: [
      { name: "TypeScript", textColor: "#395ea1", bgColor: "#e6edf9" },
      { name: "JavaScript", textColor: "#7b7433", bgColor: "#fbf9e8" },
      { name: "Python", textColor: "#385c7c", bgColor: "#e6edf2" },
      { name: "Java", textColor: "#903c2d", bgColor: "#f6e6e4" },
      { name: "Kotlin", textColor: "#7b47a1", bgColor: "#f2e9f9" },
    ],
  },
  {
    category: "Frontend",
    icon: `${frontendIcon}`,
    items: [
      { name: "Next.js / React", textColor: "#141414", bgColor: "#dfdfdf" },
      { name: "Zustand", textColor: "#383838", bgColor: "#e6e6e6" },
      { name: "Recoil", textColor: "#446bb4", bgColor: "#e8effd" },
      { name: "React-Query", textColor: "#a84a5c", bgColor: "#fbe9ec" },
      { name: "Apollo-Client", textColor: "#231a3c", bgColor: "#e2e0e6" },
      { name: "React-Hook-Form", textColor: "#0b172e", bgColor: "#dddfe4" },
      { name: "Sass", textColor: "#945077", bgColor: "#f7eaf1" },
      { name: "Tailwind CSS", textColor: "#457084", bgColor: "#edf8fd" },
      { name: "Emotion", textColor: "#873b7e", bgColor: "#f5e6f3" },
      { name: "Vite", textColor: "#685fa8", bgColor: "#efedfb" },
    ],
  },
  {
    category: "Backend",
    icon: `${backendIcon}`,
    items: [
      { name: "Django", textColor: "#172e20", bgColor: "#dfe4e1" },
      { name: "Spring (Boot)", textColor: "#5b7848", bgColor: "#eff5eb" },
      { name: "Gradle", textColor: "#14202e", bgColor: "#dfe1e4" },
      { name: "Firebase", textColor: "#846f22", bgColor: "#fdf7e4" },
      { name: "Supabase", textColor: "#3e715b", bgColor: "#e9f4ef" },
    ],
  },
];

export const allSkills: SkillTag[] = skillCategories.flatMap((c) => c.items);
