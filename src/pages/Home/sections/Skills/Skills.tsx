import styles from "./Skills.module.css";
import {skillCategories} from "../../../../data/skills.ts"

export default function Skills() {

  return (
    <section id="skills" className={`${styles.section} section container`}>
      <h2 className={styles.title}>SKILLS</h2>

      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div key={category.category} className={styles.card}>
            <span className={styles.categoryLabel}>{category.category}</span>

            <ul className={styles.skills}>
              {category.items.map((item) => (
                <li key={item.name} className={styles.tag}>
                  {item.icon ? (
                    <span className={styles.tagIcon}>
                      <img src={item.icon} alt=""/>
                    </span>
                  ) : (
                    <span
                      className={styles.tagIconFallback}
                      style={{backgroundColor: item.bgColor, color: item.textColor ?? "var(--gray-0)"}}
                    >
                      {item.name.charAt(0)}
                    </span>
                  )}
                  <span className={styles.tagLabel}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
