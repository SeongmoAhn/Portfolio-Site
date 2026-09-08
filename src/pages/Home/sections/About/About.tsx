import {Link} from "react-router-dom";
import styles from "./About.module.css";
import profileImg from '../../../../assets/images/profile.png'

export default function About() {
  return (
    <section id="about" className={`${styles.section} section container`}>
      <h2 className={styles.title}>ABOUT</h2>

      <div className={styles.profile}>
        <div className={styles.content}>
          <div className={styles.row}>
            <span className={styles.eyebrow}>안녕하세요</span>
          </div>

          <div className={styles.row}>
            <p className={styles.textBig}>
              본질에 집중하는 백엔드 개발자<br/>
              안성모<span className={styles.textBigMuted}>입니다.</span>
            </p>
          </div>

          <div className={styles.row}>
            <p className={styles.bio}>
              동작 원리를 파고드는 걸 좋아하는 백엔드 개발자입니다.
              왜 그렇게 동작하는지 이해해야 코드도, 문제도 제대로 다룰 수 있다고 생각합니다.
            </p>
          </div>

          <div className={styles.row}>
            <div className={styles.info}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>학력</span>
                <p className={styles.infoValue}>숭실대학교 컴퓨터학부</p>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>자격증</span>
                <div className={styles.infoValue}>
                  <p>정보처리기사</p>
                  <p>SQLD</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.info}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>이메일</span>
                <p className={styles.infoValue}>asm0619@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.profileImage}>
          <img src={profileImg} alt="프로필 이미지"/>
        </div>
      </div>

      <Link to="/archive" className={styles.archivePromo}>
        <div>
          <span className={styles.archivePromoLabel}>ARCHIVE</span>
          <p className={styles.archivePromoText}>나의 문제 해결 기록</p>
          <p className={styles.archivePromoSubtext}>개발, 공부, 일상에서 마주친 문제들을 하나씩 풀어가는 과정을 기록합니다.</p>
        </div>
        <span className={styles.archivePromoButton}>보러가기 →</span>
      </Link>
    </section>
  )
    ;
}