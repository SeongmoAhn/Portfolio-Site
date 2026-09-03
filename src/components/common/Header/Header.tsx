import Navigation from "../Navigation/Navigation.tsx";
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Porfoilo</div>
      <Navigation />
    </header>
  )
}