// 네비게이션 바
export interface NavItem {
  id: string;       // 실제 섹션 id 또는 경로 (예: "about", "skills")
  label: string;    // 화면에 보여줄 텍스트 (예: "About", "Skills")
  type: "scroll" | "route"; // scroll: 같은 페이지 내 스크롤 이동 / route: 다른 페이지로 이동
}

// 스킬 카테고리
export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillTag[];
}

// 스킬 태그
export interface SkillTag {
  name: string;
  textColor?: string;
  bgColor: string;
  icon?: string;
}

// 연락처
export interface ContactItem {
  type: "phone" | "email" | "github" | "blog" | "linkedin";
  label: string;
  content: string;
  description: string;
  href: string;
  icon?: string;
}

// 프로젝트
export interface Project {
  name: string;
  period: string;
  summary: string;
  role: string;
  description: string[];
  techStack: SkillTag[];
  readmePath?: string;
  githubUrl?: string;
  pdfUrl?: string;
  imageUrl?: string;
  refNote?: string;
}

// 경력/활동 이력
export interface ExperienceItem {
  period: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

// Archive 글
export interface ArchivePost {
  id: string;
  title: string;
  body: string;
  code: string | null;
  code_language: string | null;
  tags: string[];
  resolved: boolean;
  created_at: string;
  answer_count: number;
}

// Archive 답변
export interface ArchiveAnswer {
  id: string;
  post_id: string;
  body: string;
  created_at: string;
}