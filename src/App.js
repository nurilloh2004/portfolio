import Intro from './blocks/Intro';
import Navbar from './blocks/Navbar';
import Services from './blocks/Services';
import Sponsors from './blocks/Sponsors';
import Projects from './blocks/Projects';

function App() {
  return <>
    <Navbar/>
    <Intro />
    <Sponsors />
    <Services />
    <Projects />
  </>;
}

export default App;