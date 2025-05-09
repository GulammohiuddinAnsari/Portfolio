import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      <SocialLinks/>
    </div>
  );
}

export default App;
