import type {ContactItem} from "../types";
import phoneIcon from "../assets/icons/phone.png"
import emailIcon from "../assets/icons/gmail.svg"
import githubIcon from "../assets/icons/github.svg"
import blogIcon from "../assets/icons/tistory.svg"

export const contactItems: ContactItem[] = [
  {
    type: "github",
    label: "GitHub",
    content: "github.com/SeongmoAhn",
    description: "프로젝트와 코드를 확인해보세요",
    href: "https://github.com/SeongmoAhn",
    icon: githubIcon
  },
  {
    type: "phone",
    label: "Phone",
    content: "010-2293-5558",
    description: "평일 오전 10시부터 오후 6시까지",
    href: "tel:010-2293-5558",
    icon: phoneIcon
  },
  {
    type: "email",
    label: "Email",
    content: "asm0619@gmail.com",
    description: "확인 후 빠르게 답변드릴게요",
    href: "mailto:asm0619@gmail.com",
    icon: emailIcon
  },
  {
    type: "blog",
    label: "Blog",
    content: "seongmoahn.tistory.com/",
    description: "개발 기록을 남기고 있어요",
    href: "https://seongmoahn.tistory.com/",
    icon: blogIcon
  },
];
