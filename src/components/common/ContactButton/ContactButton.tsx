import styles from "./ContactButton.module.css";
import {contactItems} from "../../../data/contact.ts";

const floatingTypes = ["github", "email"];

export default function ContactButton() {
  const items = contactItems.filter((item) => floatingTypes.includes(item.type));

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <a
          key={item.type}
          href={item.href}
          target={item.type === "github" ? "_blank" : undefined}
          rel={item.type === "github" ? "noopener noreferrer" : undefined}
          className={styles.button}
          aria-label={item.label}
        >
          <img src={item.icon ?? ""} alt="" className={styles.icon}/>
        </a>
      ))}
    </div>
  );
}
