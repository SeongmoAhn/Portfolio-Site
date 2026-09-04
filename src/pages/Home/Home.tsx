import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
// import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const target = document.getElementById(state.scrollTo)
      target?.scrollIntoView({behavior: "smooth"})
    }
  }, [location.state])

  return (
    <div>
      <About />
      {/*<Experience />*/}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}