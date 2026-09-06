import styles from "./Contact.module.css";
import {contactItems} from "../../../../data/contact.ts"

export default function Contact() {
  // contactItems에서 Contact에 보여줄 정보만 필터링
  // 깃허브는 나중에 링크드인 가입하고 나면 제거
  const displayItems = contactItems.filter((item) =>
    ["github", "phone", "email"].includes(item.type)
  )

  // 새탭으로 열 사이트
  const external_links = ["github", "linkedin"]

  return (
    <section id="contact" className={`${styles.section} section container`}>
      <h2 className={styles.title}>CONTACT</h2>

      <h3 className={styles.headline}>새로운 기회와 협업을 기다립니다.</h3>
      <p className={styles.subtext}>프로젝트와 개발에 관한 잡담을 기다리고 있어요. 편한 방법으로 연락해주세요.</p>

      <div className={styles.grid}>
        {displayItems.map((item) => (
          <a
            key={item.type}
            href={item.href}
            target={external_links.includes(item.type) ? "_blank" : undefined}
            rel={external_links.includes(item.type) ? "noopener noreferrer" : undefined}
            className={styles.card}
          >
            <div className={styles.iconBadge}>
              <img src={item.icon} alt={item.label} className={styles.icon}/>
            </div>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.content}>{item.content}</span>
            <span className={styles.description}>{item.description}</span>
          </a>
        ))}
      </div>

      <p className={styles.footnote}>언제든 편하게 연락해주세요 :)</p>
    </section>
  );
}
