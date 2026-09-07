import styles from "./About.module.css";
import profileImg from '../../../../assets/images/profile.png'

export default function About() {
  return (
    <section id="about" className={`${styles.section} section container`}>
      <h2 className={styles.title}>ABOUT</h2>

      <div className={styles.profile}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>안녕하세요</span>
          <p className={styles.textBig}>
            본질에 집중하는 백엔드 개발자<br/>
            안성모<span className={styles.textBigMuted}>입니다.</span>
          </p>

          <div className={styles.info}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>학력</span>
              <p className={styles.infoValue}>MIT 컴퓨터공학과 졸업</p>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>자격증</span>
              <div className={styles.infoValue}>
                <p>외과 전문의 면허</p>
                <p>합기도 3단</p>
                <p>태권도 1단</p>
                <p>운전 면허 1종 보통</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>이메일</span>
              <p className={styles.infoValue}>asm0619@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={styles.profileImage}>
          <img src={profileImg} alt="프로필 이미지"/>
        </div>
      </div>
    </section>
  );
}