import {useLocation, useNavigate} from "react-router-dom";
import Navigation from "../Navigation/Navigation.tsx";
import styles from './Header.module.css'
import favicon from '../../../../public/favicon.svg'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogoClick = () => {
    if (location.pathname === "/") { // 이미 Home 페이지에 있는 경우
      document.getElementById("about")?.scrollIntoView({behavior: "smooth"})
    } else { // Archive 페이지에 있는 경우
      navigate("/", {state: {scrollTo: "about"}})
    }
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <div className={styles.logo} onClick={handleLogoClick}>
          <img src={favicon} alt='favicon' width="30px"/>
          <div>Portfoilo</div>
        </div>
        <Navigation/>
      </div>
    </header>
  )
}