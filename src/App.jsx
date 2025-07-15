import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CustomCursor from './components/CustomCursor';
import "./styles/navbar.css";
import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <CustomCursor />
    </div>
  );
}

export default App;
