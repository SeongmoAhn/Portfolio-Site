import {useCallback, useEffect, useState} from "react";
import styles from "./TopButton.module.css";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      aria-label="맨 위로 이동"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"/>
        <path d="M6 11l6-6 6 6"/>
      </svg>
    </button>
  );
}
