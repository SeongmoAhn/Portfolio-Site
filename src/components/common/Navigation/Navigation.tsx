import {Link, useLocation, useNavigate} from "react-router-dom";
import {navItems} from "../../../data/navigation.ts";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleScrollClick = (id: string) => {
    if (location.pathname === "/") { // 이미 Home 페이지에 있는 경우
      const target = document.getElementById(id)
      target?.scrollIntoView({behavior: "smooth"})
    } else { // Archive 페이지에 있는 경우
      // Home 페이지로 이동 후 ID도 같이 전달
      navigate("/", {state: {scrollTo: id}})
    }
  }

  return (
    <nav>
      <ul className={styles.list}>
        {navItems.map(item => (
          <li key={item.id}>
            {item.type === "route" ? (
              <Link to={`/${item.id}`} className={styles.highlight}>
                {item.label}
              </Link>
            ) : (
              <a href={`#${item.id}`}
                 onClick={(e) => {
                   e.preventDefault()
                   handleScrollClick(item.id)
                 }}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}