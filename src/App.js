import Intro from './blocks/Intro';
import Navbar from './blocks/Navbar';
import Services from './blocks/Services';
import Sponsors from './blocks/Sponsors';
import Projects from './blocks/Projects';
import Blogs from './blocks/Blogs';

function App() {
  return <>
    <Navbar/>
    <Intro />
    <Sponsors />
    <Services />
    <Projects />
    <Blogs />
  </>;
}

export default App;