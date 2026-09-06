import styles from "./Contact.module.css";
import {contactItems} from "../../../../data/contact.ts"

export default function Contact() {
  // contactItems에서 Contact에 보여줄 정보만 필터링
  // 깃허브는 나중에 링크드인 가입하고 나면 제거
  const displayItems = contactItems.filter((item) =>
    ["phone", "email", "linkedin", "github"].includes(item.type)
  )

  // 새탭으로 열 사이트
  const external_links = ["github", "linkedin"]

  return (
    <section id="contact" className={`${styles.section} section container`}>
      <h2>CONTACT</h2>

      <ul>
        {displayItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target={external_links.includes(item.type) ? "_blank" : undefined}
              rel={external_links.includes(item.type) ? "noopener noreferrer" : undefined}
            >
              {/*{item.content}*/}
              <img src={item.icon} alt="아이콘" width={150} />
            </a>
          </li>
        ))}
      </ul>

    </section>
  );
}