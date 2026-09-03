export interface NavItem {
  id: string;       // 실제 섹션 id 또는 경로 (예: "about", "skills")
  label: string;    // 화면에 보여줄 텍스트 (예: "About", "Skills")
  type: "scroll" | "route"; // scroll: 같은 페이지 내 스크롤 이동 / route: 다른 페이지로 이동
}