import styles from "./Projects.module.css";
import {projectItems} from "../../../../data/projects.ts";

export default function Projects() {
  return (
    <section id="projects" className={`${styles.section} section`}>
      <h2>Projects</h2>

      {projectItems.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <span>{project.period}</span>
          <p>{project.summary}</p>

          <ul>
            {project.description.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <ul>
            {project.techStack.map((tag) => (
              <li
                key={tag.name}
                style={{
                  color: tag.textColor ?? "var(--gray-0)",
                  backgroundColor: tag.bgColor
                }}
              >{tag.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
