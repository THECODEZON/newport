import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Civee } from "./components/Civee/Civee";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Resume/>
      <Hero />
      <Civee />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
