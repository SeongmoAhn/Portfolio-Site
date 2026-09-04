import styles from "./About.module.css";
import profileImg from '/src/assets/images/profile.png'

export default function About() {
  return (
    <section id="about" className={`${styles.section} section container`}>
      <h2 className={styles.category}>About</h2>

      <div className={styles.profile}>
        <div className={styles.content}>
          <p className={styles.textSmall}>안녕하세요.</p>
          <p className={styles.textBig}>본질에 집중하는 백엔드 개발자</p>
          <p className={styles.textBig}>안성모<span className={styles.textSmall}> 입니다.</span></p>

          <div>
            <p className={styles.textSmall}>학력</p>
            <p className={styles.text}>MIT 컴퓨터공학과 졸업</p>
          </div>

          <div>
            <p className={styles.textSmall}>자격증</p>
            <p className={styles.text}>외과 전문의 면허</p>
            <p className={styles.text}>합기도 3단</p>
            <p className={styles.text}>태권도 1단</p>
            <p className={styles.text}>운전 면허 1종 보통</p>
          </div>

          <div>
            <p className={styles.textSmall}>이메일</p>
            <p className={styles.text}>asm0619@gmail.com</p>
          </div>
        </div>

        <div className={styles.profileImage}>
          <img src={profileImg} width="300" alt="프로필 이미지"/>
        </div>
      </div>
    </section>
  );
}