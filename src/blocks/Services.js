
import Container from '../components/Container';

const Services = () => {
  return <section className="services">
    <Container>
        <div className='services__body'>
            <header className='services__header grid--1x'>
                <span className='uptitle uptitle--pink services__uptitle'>Services</span>
                <h2 className='title title--black services__title'>Design that solves problems, one product at a time.</h2>
            </header>
            <div className='services__content'>
                <article className='services__cart'>
                    <img className='services__cart-img' src="./assets/images/services/services-1.png" alt="figure" />
                    <h5 className='title title--black services__cart-title'>What I can do for you</h5>
                    <p className='services__cart-text'>Faster, better products that your users love. Here's all the services I provide:</p>
                    <ul className='services__cart-list'>
                        <li className='services__cart-item'>Design Strategy</li>
                        <li className='services__cart-item'>Web and Mobile App Design</li>
                        <li className='services__cart-item'>Front-end Development</li>
                    </ul>
                </article>
                <article className='services__cart'>
                    <img className='services__cart-img' src="./assets/images/services/services-2.png" alt="figure" />
                    <h5 className='title title--black services__cart-title'>Applications I'm fluent in</h5>
                    <p className='services__cart-text'>Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.</p>
                    <ul className='services__cart-list'>
                        <li className='services__cart-item'>Sketch</li>
                        <li className='services__cart-item'>Webflow</li>
                        <li className='services__cart-item'>Figma</li>
                    </ul>
                </article>
                <article className='services__cart'>
                    <img className='services__cart-img' src="./assets/images/services/services-1.png" alt="figure" />
                    <h5 className='title title--black services__cart-title'>What you can expect</h5>
                    <p className='services__cart-text'>I design products that are more than pretty. I make them shippable and usable.</p>
                    <ul className='services__cart-list'>
                        <li className='services__cart-item'>Clean and functional</li>
                        <li className='services__cart-item'>Device and user friendly</li>
                        <li className='services__cart-item'>Efficient and maintainable</li>
                    </ul>
                </article>
            </div>
        </div>
    </Container>
  </section>
}

export default Services;