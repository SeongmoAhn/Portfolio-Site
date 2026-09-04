import Navigation from "../Navigation/Navigation.tsx";
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src='/public/favicon.svg' alt='favicon' width="30px"/>
        <div>Portfoilo</div>
      </div>
      <Navigation/>
    </header>
  )
}