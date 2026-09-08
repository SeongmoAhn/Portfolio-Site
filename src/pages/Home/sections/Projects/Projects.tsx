import {useState} from "react";
import styles from "./Projects.module.css";
import {projectItems} from "../../../../data/projects.ts";
import type {Project} from "../../../../types";
import ReadmeModal from "./ReadmeModal";
import githubIcon from "../../../../assets/icons/github.svg";

export default function Projects() {
  const [readmeProject, setReadmeProject] = useState<Project | null>(null);

  return (
    // 프로젝트 섹션
    <section id="projects" className={`${styles.section} section container`}>
      <h2 className={styles.title}>PROJECTS</h2>

      <div className={styles.grid}>
        {/*projectItems에서 프로젝트 정보를 하나씩 읽어서 map()*/}
        {projectItems.map((project, index) => (
          <div key={`${project.name}-${index}`} className={styles.card}>
            {/*프로젝트 소개 부분*/}
            <div className={styles.top}>
              <h3 className={styles.name}>{project.name}</h3>
              <span className={styles.period}>{project.period}</span>
            </div>
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

            <hr className={styles.divider}/>

            {/*기술 스택 부분*/}
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

            <hr className={styles.divider}/>

            {/*READ, Git, Image 등 참고자료 부분*/}
            <div className={styles.field}>
              <span className={styles.label}>참고 자료</span>
              <div className={styles.references}>
                {project.readmePath && (
                  <button
                    type="button"
                    className={styles.refButton}
                    onClick={() => setReadmeProject(project)}
                  >
                    README
                  </button>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.refButton}
                  >
                    <img src={githubIcon} alt="" className={styles.refIcon}/>
                    GitHub
                  </a>
                )}
                {project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.refButton}
                  >
                    원문 PDF
                  </a>
                )}
              </div>
              {project.refNote && (
                <p className={styles.refNote}>{project.refNote}</p>
              )}
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={`${project.name} 스크린샷`}
                  className={styles.previewImage}
                />
              )}
            </div>

          </div>
        ))}
      </div>

      {readmeProject && (
        <ReadmeModal project={readmeProject} onClose={() => setReadmeProject(null)}/>
      )}
    </section>
  );
}
