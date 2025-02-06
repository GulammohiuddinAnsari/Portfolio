import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
