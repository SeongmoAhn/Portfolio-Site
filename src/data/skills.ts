import type {SkillCategory, SkillTag} from "../types";
import languageIcon from "../assets/icons/lui1.png"
import frontendIcon from "../assets/icons/lui2.png"
import backendIcon from "../assets/icons/lui3.png"
import cIcon from "../assets/icons/c.svg"

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillCategories: SkillCategory[] = [
  {
    category: "Language",
    icon: `${languageIcon}`,
    items: [
      {name: "C", textColor: "#2f5f8a", bgColor: "#e6eef7", icon: cIcon},
      {name: "C++", textColor: "#3f5aa1", bgColor: "#e8ecf9", icon: `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`},
      {name: "Java", textColor: "#903c2d", bgColor: "#f6e6e4", icon: `${DEVICON_BASE}/java/java-original.svg`},
      {name: "Python", textColor: "#385c7c", bgColor: "#e6edf2", icon: `${DEVICON_BASE}/python/python-original.svg`},
      {name: "JavaScript", textColor: "#7b7433", bgColor: "#fbf9e8", icon: `${DEVICON_BASE}/javascript/javascript-original.svg`},
      {name: "TypeScript", textColor: "#395ea1", bgColor: "#e6edf9", icon: `${DEVICON_BASE}/typescript/typescript-original.svg`},
    ],
  },
  {
    category: "Frontend",
    icon: `${frontendIcon}`,
    items: [
      {name: "HTML5", textColor: "#a1512f", bgColor: "#f9ece5", icon: `${DEVICON_BASE}/html5/html5-original.svg`},
      {name: "CSS3", textColor: "#2f5fa1", bgColor: "#e6eef9", icon: `${DEVICON_BASE}/css3/css3-original.svg`},
      {name: "React", textColor: "#2f6a8a", bgColor: "#e6f2f7", icon: `${DEVICON_BASE}/react/react-original.svg`},
    ],
  },
  {
    category: "Backend",
    icon: `${backendIcon}`,
    items: [
      {name: "Spring Boot", textColor: "#5b7848", bgColor: "#eff5eb", icon: `${DEVICON_BASE}/spring/spring-original.svg`},
      {name: "Node.js", textColor: "#3e7a48", bgColor: "#e9f5eb", icon: `${DEVICON_BASE}/nodejs/nodejs-original.svg`},
    ],
  },
  {
    category: "Database",
    icon: `${backendIcon}`,
    items: [
      {name: "MySQL", textColor: "#2f5f8a", bgColor: "#e6eef7", icon: `${DEVICON_BASE}/mysql/mysql-original.svg`},
      {name: "PostgreSQL", textColor: "#2f4f7a", bgColor: "#e6ecf5", icon: `${DEVICON_BASE}/postgresql/postgresql-original.svg`},
      {name: "Supabase", textColor: "#3e715b", bgColor: "#e9f4ef", icon: `${DEVICON_BASE}/supabase/supabase-original.svg`},
    ],
  },
  {
    category: "DevOps",
    icon: `${backendIcon}`,
    items: [
      {name: "Linux", textColor: "#141414", bgColor: "#eceef1", icon: `${DEVICON_BASE}/linux/linux-original.svg`},
      {name: "Docker", textColor: "#2f6a9a", bgColor: "#e6f1f9", icon: `${DEVICON_BASE}/docker/docker-original.svg`},
      {name: "AWS", textColor: "#8a5a2f", bgColor: "#f9efe5", icon: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`},
      {name: "Vercel", textColor: "#141414", bgColor: "#eceef1", icon: `${DEVICON_BASE}/vercel/vercel-original.svg`},
    ],
  },
  {
    category: "Tools",
    icon: `${frontendIcon}`,
    items: [
      {name: "Git", textColor: "#a1462f", bgColor: "#f9e9e5", icon: `${DEVICON_BASE}/git/git-original.svg`},
      {name: "GitHub", textColor: "#141414", bgColor: "#eceef1", icon: `${DEVICON_BASE}/github/github-original.svg`},
      {name: "Postman", textColor: "#a1622f", bgColor: "#f9eee5", icon: `${DEVICON_BASE}/postman/postman-original.svg`},
      {name: "Figma", textColor: "#7b47a1", bgColor: "#f2e9f9", icon: `${DEVICON_BASE}/figma/figma-original.svg`},
      {name: "Notion", textColor: "#141414", bgColor: "#eceef1", icon: `${DEVICON_BASE}/notion/notion-original.svg`},
      {name: "Vim", textColor: "#3e7a48", bgColor: "#e9f5eb", icon: `${DEVICON_BASE}/vim/vim-original.svg`},
    ],
  },
];

export const allSkills: SkillTag[] = skillCategories.flatMap((c) => c.items);
