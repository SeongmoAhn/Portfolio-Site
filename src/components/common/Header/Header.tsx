import Navigation from "../Navigation/Navigation.tsx";
import styles from './Header.module.css'
import favicon from '../../../../public/favicon.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={favicon} alt='favicon' width="30px"/>
        <div>Portfoilo</div>
      </div>
      <Navigation/>
    </header>
  )
}