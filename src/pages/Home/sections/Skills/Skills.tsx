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
                <li
                  key={item.name}
                  style={{
                    color: item.textColor ?? "var(--gray-0)",
                    backgroundColor: item.bgColor
                  }}
                  className={styles.tag}
                >{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
