import styles from "./About.module.css";
import profileImg from '/src/assets/images/profile.png'

export default function About() {
  return (
    <section id="about" className={`${styles.section} section`}>
      <h2>About</h2>
      <p>안녕하세요.</p>
      <p>본질에 집중하는 백엔드 개발자</p>
      <p>안성모<span> 입니다.</span></p>
      <div>
        <p>학력</p>
        <p>MIT 컴퓨터공학과 졸업</p>
      </div>
      <div>
        <p>자격증</p>
        <p>외과 전문의 면허</p>
        <p>합기도 3단</p>
        <p>태권도 1단</p>
        <p>운전 면허 1종 보통</p>
      </div>
      <div>
        <p>이메일</p>
        <p>asm0619@gmail.com</p>
      </div>
      <img src={profileImg} width="300" alt="프로필 이미지"/>
    </section>
  );
}