import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>Copyright © 2026 AhnSeongmo. All rights reserved.</p>
      <p className={styles.text}>Built with React, TypeScript, and CSS Modules.</p>
    </div>
  )
}
