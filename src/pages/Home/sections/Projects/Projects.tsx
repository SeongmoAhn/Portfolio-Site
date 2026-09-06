import styles from "./Projects.module.css";
import {projectItems} from "../../../../data/projects.ts";

export default function Projects() {
  return (
    <section id="projects" className={`${styles.section} section container`}>
      <h2 className={styles.title}>PROJECTS</h2>

      <div className={styles.grid}>
        {projectItems.map((project, index) => (
          <div key={`${project.name}-${index}`} className={styles.card}>
            <h3 className={styles.name}>{project.name}</h3>
            <span className={styles.period}>{project.period}</span>
            <p className={styles.summary}>{project.summary}</p>

            <div className={styles.field}>
              <span className={styles.label}>담당 역할</span>
              <p className={styles.role}>{project.role}</p>
            </div>

            <div className={styles.field}>
              <span className={styles.label}>주요 구현 내용</span>
              <ul className={styles.description}>
                {project.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className={styles.field}>
              <span className={styles.label}>기술 스택</span>
              <ul className={styles.techStack}>
                {project.techStack.map((tag) => (
                  <li
                    key={tag.name}
                    style={{
                      color: tag.textColor ?? "var(--gray-0)",
                      backgroundColor: tag.bgColor
                    }}
                    className={styles.tag}
                  >{tag.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
