import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) return; // Home 섹션 스크롤은 Home에서 처리
    window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return null;
}
