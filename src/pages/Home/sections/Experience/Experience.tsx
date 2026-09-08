import styles from "./Experience.module.css";
import {experienceItems} from "../../../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className={`${styles.section} section container`}>
      <h2 className={styles.title}>EXPERIENCE</h2>

      {experienceItems.length === 0 ? (
        <p className={styles.message}>표시할 이력이 없어요.</p>
      ) : (
        <div className={styles.timeline}>
          {experienceItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className={styles.item}>
              <div className={styles.markerCol}>
                <span className={styles.dot}/>
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <span className={styles.period}>{item.period}</span>
                  <span className={styles.highlight}>{item.title}</span>
                </div>

                {item.subtitle && <p className={styles.subtitle}>{item.subtitle}</p>}
                {item.badge && <span className={styles.badge}>{item.badge}</span>}

                {index < experienceItems.length - 1 && <hr className={styles.divider}/>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
