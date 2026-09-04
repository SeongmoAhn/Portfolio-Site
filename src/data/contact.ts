import type {ContactItem} from "../types";
import phoneIcon from "../assets/icons/phone.png"
import emailIcon from "../assets/icons/gmail.svg"
import githubIcon from "../assets/icons/github.svg"
import blogIcon from "../assets/icons/tistory.svg"

export const contactItems: ContactItem[] = [
  {
    type: "phone",
    name: "전화번호",
    content: "010-2293-5558",
    href: "tel:010-2293-5558",
    icon: phoneIcon
  },
  {
    type: "email",
    name: "이메일",
    content: "asm0619@gmail.com",
    href: "mailto:asm0619@gmail.com",
    icon: emailIcon
  },
  {
    type: "github",
    name: "GitHub",
    content: "github.com/SeongmoAhn",
    href: "https://github.com/SeongmoAhn",
    icon: githubIcon
  },
  {
    type: "blog",
    name: "블로그",
    content: "seongmoahn.tistory.com/",
    href: "https://seongmoahn.tistory.com/",
    icon: blogIcon
  },
];
