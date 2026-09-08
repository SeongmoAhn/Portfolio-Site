import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {navItems} from "../../../data/navigation.ts";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeId, setActiveId] = useState(navItems[0].id)

  const handleScrollClick = (id: string) => {
    if (location.pathname === "/") { // 이미 Home 페이지에 있는 경우
      const target = document.getElementById(id)
      target?.scrollIntoView({behavior: "smooth"})
    } else { // Archive 페이지에 있는 경우
      // Home 페이지로 이동 후 ID도 같이 전달
      navigate("/", {state: {scrollTo: id}})
    }
  }

  useEffect(() => {
    if (location.pathname !== "/") return

    const scrollIds = navItems.filter(item => item.type === "scroll").map(item => item.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {rootMargin: "-40% 0px -55% 0px"}
    )

    scrollIds.forEach(id => {
      const target = document.getElementById(id)
      if (target) observer.observe(target)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <nav>
      <ul className={styles.list}>
        {navItems.map(item => {
          const isActive = item.type === "route"
            ? location.pathname.startsWith(`/${item.id}`)
            : location.pathname === "/" && activeId === item.id

          return (
            <li key={item.id}>
              {item.type === "route" ? (
                <Link
                  to={`/${item.id}`}
                  className={`${styles.archive} ${isActive ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              ) : (
                <a href={`#${item.id}`}
                   className={isActive ? styles.active : ""}
                   onClick={(e) => {
                     e.preventDefault()
                     handleScrollClick(item.id)
                   }}
                >
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}