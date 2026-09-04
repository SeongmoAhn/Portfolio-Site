import styles from "./Skills.module.css";
import {skillCategories} from "../../../../data/skills.ts"

export default function Skills() {

  return (
    <section id="skills" className={`${styles.section} section`}>
      <h2>Skills</h2>

      {skillCategories.map((category) => (
        <div key={category.category}>
          <span>{category.icon}</span>
          <span>{category.category}</span>

          <ul>
            {category.items.map((item) => (
              <li
                key={item.name}
                style={{
                  color: item.textColor ?? "var(--gray-0)",
                  backgroundColor: item.bgColor
                }}
              >{item.name}</li>
            ))}
          </ul>
          <p>. </p>
        </div>

      ))}
    </section>
  );
}
