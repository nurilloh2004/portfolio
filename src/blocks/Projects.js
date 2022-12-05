
import Container from '../components/Container';

const Projects = () => {
  return <section className="projects">
    <Container>
        <div className='projects__body'>
            <header className='projects__header grid--2x'>
                <div>
                    <p className='uptitle uptitle--purple projects__uptitle'>PROJECTS</p>
                    <h2 className='title title--black projects__title'>I bring results.<br/> My clients are proof.</h2>
                </div>
                <a href='./' className='link link--filled projects__link grid--2x__right'>View all projects</a>
            </header>
        </div>
    </Container>
  </section>
}

export default Projects;